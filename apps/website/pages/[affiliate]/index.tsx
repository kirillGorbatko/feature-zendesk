import React from 'react';
import { testAffiliate } from '../../src/helpers/affiliate'
import { setCookie } from 'cookies-next';

export function Affiliate() {
  return (
    <div>
      Welcome
    </div>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API

  const affiliate: string = query.affiliate

  try {
    const affiliateObj = await testAffiliate(affiliate);
    if (affiliateObj.status === 200) {
      const { data: { id, cookieTTL, referrerId, logo, name } } = affiliateObj.data;

      //  This comes in days from API, so I'm multiplying this
      //  by number of milliseconds in 24h
      const maxAge = parseInt(cookieTTL, 10) * 86400000;

      setCookie(
        'UREF',
        {
          AID: id,
          ANAME: name,
          ALOGO: logo,
          R: referrerId,
        },
        {
          domain: process.env.COOKIE_DOMAIN,
          httpOnly: true,
          req,
          res,
          maxAge: maxAge,
        }
      );

      /* https://${req.headers.host} */
      res.writeHead(302, { Location: `/?utm_source=${affiliate}&utm_medium=affiliate&variant=tunecore` })

    } else {
      res.writeHead(302, { Location: '/' })
    }
  } catch (ex) {
    console.log("cannot redirect using affiliate", ex)
    res.writeHead(302, { Location: '/' })
  }

  res.end()

  return { props: { } };
}

export default Affiliate;
