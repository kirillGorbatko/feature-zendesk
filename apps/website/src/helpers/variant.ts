import { setCookie } from 'cookies-next';

export async function loadPageProps<Type>(
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
    query.variant || query.v || (storeVariant && req.cookies.featureVariant) || 'default';
  let pageDataResponse = null;
  let pageData: Type = null;

  try {
    let apiEndppointUrl = null;
    if (isGlobal) {
      apiEndppointUrl = `${process.env.PAYLOAD_API_ENDPOINT}/api/globals/${name}`;
    } else {
      apiEndppointUrl = `${process.env.PAYLOAD_API_ENDPOINT}/api/${name}`;
    }

    console.log('Attempting to fetch from CMS API endpoint:', apiEndppointUrl);
    pageDataResponse = await fetch(apiEndppointUrl);

    if (pageDataResponse.status < 200 || pageDataResponse.status >= 400) {
      console.error('cannot fetch from cms', pageDataResponse);
      throw new Error('fallback to json');
    }

    if (isGlobal) {
      pageData = await pageDataResponse.json();
    } else {
      const docs: any[] = (await pageDataResponse.json()).docs;
      pageData = docs.find(x => x.slug == effectiveVariant)
      if (!pageData) {
        pageData = docs.find(x => x.slug == "default")
      }
      if (!pageData) {
        throw new Error('no docs found, fallback to load from json');
      }
    }
  } catch (ex) {
    console.log('Falling back to json backup:', ex);
    pageDataResponse = await fetch(
      `http://localhost:4200/data/${name}-${effectiveVariant}-${language}.json`
    );

    if (pageDataResponse.status < 200 || pageDataResponse.status >= 400) {
      effectiveVariant = 'default';
      pageDataResponse = await fetch(
        `http://localhost:4200/data/${name}-default-${language}.json`
      );
    }

    pageData = await pageDataResponse.json();
  }

  if (storeVariant && (query.variant || query.v) && (query.variant || query.v) !== req.cookies.featureVariant) {
    try {
      setCookie('featureVariant', query.variant || query.v, {
        req,
        res,
        maxAge: cacheTimeoutInHours * 60 * 60 * 1000,
        httpOnly: true,
        domain: process.env.COOKIE_DOMAIN,
      });
    } catch (ex) {
      console.log("couldn't store the variant in the cookie session", ex);
    }
  }

  return {
    ...pageData,
    variant: effectiveVariant,
    featureConsent: req.cookies.featureConsent || null,
  };
}
