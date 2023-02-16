import { setCookie } from 'cookies-next';

export async function loadPageProps<Type>(
  name,
  query = { variant: null, v: null },
  req,
  res,
  cacheTimeoutInHours = 24 * 3,
  language = "en"): Promise<Type>
{
  let effectiveVariant = query.variant || query.v || req.cookies.featureVariant || 'default';
  let pageDataResponse = null;

  pageDataResponse = await fetch(
    `http://localhost:4200/data/${name}-${effectiveVariant}-${language}.json`
  );

  if (pageDataResponse.status < 200 || pageDataResponse.status >= 400) {
    effectiveVariant = 'default';
    pageDataResponse = await fetch(
      `http://localhost:4200/data/${name}-default-${language}.json`
    );
  }

  const pageData: Type = await pageDataResponse.json();

  if (query.variant && query.variant !== req.cookies.featureVariant) {
    try {
      setCookie('featureVariant', query.variant, { req, res, maxAge: cacheTimeoutInHours * 60 * 60 * 1000, httpOnly: true, domain: process.env.COOKIE_DOMAIN })
    } catch (ex) {
      console.log("couldn't store the variant in the cookie session", ex)
    }
  }

  return { ...pageData, variant: effectiveVariant, featureConsent: req.cookies.featureConsent || null }
}
