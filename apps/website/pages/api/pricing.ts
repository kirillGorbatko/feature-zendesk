import NextCors from 'nextjs-cors';
import { FetchPricingResponse } from '../../src/templates/pricing/types';
import { loadPageProps } from '../../src/helpers/variant';

export default async function handler(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data: FetchPricingResponse = await loadPageProps<FetchPricingResponse>(
    'global-pricing-packages',
    { variant: null, v: null },
    req,
    res,
    72,
    'en',
    true,
    false
  );

  let override: FetchPricingResponse = null

  if (req.query.variant) {
    override = await loadPageProps<FetchPricingResponse>(
      'pricing-pages',
      req.query || {},
      req,
      res,
      72,
      'en',
      false,
      false
    );
  }

  // Rest of the API logic
  res.json({ data, override });
}
