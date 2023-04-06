// import { setCookie } from 'cookies-next';

export async function getPageData<Type>(
  name,
  query = { variant: null, v: null },
  req,
  res,
  cacheTimeoutInHours = 24 * 3,
  language = 'en',
  isGlobal = false,
  storeVariant = true
): Promise<Type> {
  let effectiveVariant =
    query.variant ||
    query.v ||
    (storeVariant && req.cookies.featureVariant) ||
    'default';
  let pageDataResponse = null;
  let pageData: Type = null;

  try {
    pageDataResponse = await fetch(
      `http://localhost:4201/data/${name}-${effectiveVariant}-${language}.json`
    );

    if (pageDataResponse.status < 200 || pageDataResponse.status >= 400) {
      effectiveVariant = 'default';
      pageDataResponse = await fetch(
        `http://localhost:4201/data/${name}-default-${language}.json`
      );
    }

    pageData = await pageDataResponse.json();
  } catch (err) {
    console.log(err.message);
  }

  // if (
  //   storeVariant &&
  //   (query.variant || query.v) &&
  //   (query.variant || query.v) !== req.cookies.featureVariant
  // ) {
  //   try {
  //     setCookie('featureVariant', query.variant || query.v, {
  //       req,
  //       res,
  //       maxAge: cacheTimeoutInHours * 60 * 60 * 1000,
  //       httpOnly: true,
  //       domain: process.env.COOKIE_DOMAIN,
  //     });
  //   } catch (ex) {
  //     console.log("couldn't store the variant in the cookie session", ex);
  //   }
  // }

  return {
    ...pageData,
    variant: effectiveVariant,
    featureConsent: req?.cookies?.featureConsent || null,
  };
}
