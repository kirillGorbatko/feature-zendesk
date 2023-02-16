async function getCountryCode(ipAddress) {
  const currencyResponse = await fetch(
    `https://api.ipstack.com/${ipAddress}?access_key=c2dbe6f2a6966a61b22c9dfc050028d1`
  );
  const response = await currencyResponse.json()
  return response.data.currency;
}

const getClientIp = req => {
  // the ipAddress we return
  let ipAddress;

  // workaround to get real client IP
  // most likely because our app will be behind a [reverse] proxy or load balancer
  let clientIp =
    req.headers['x-original-forwarded-for'] || req.headers['x-client-ip'];
  let forwardedForAlt = req.headers['x-forwarded-for'];
  let realIp = req.headers['x-real-ip'];

  // more obsure ones below
  let clusterClientIp = req.headers['x-cluster-client-ip'];
  let forwardedAlt = req.headers['x-forwarded'];
  let forwardedFor = req.headers['forwarded-for'];
  let forwarded = req.headers['forwarded'];

  // remote address check
  let reqConnectionRemoteAddress = req.connection
    ? req.connection.remoteAddress
    : null;
  let reqSocketRemoteAddress = req.socket ? req.socket.remoteAddress : null;
  let reqConnectionSocketRemoteAddress =
    req.connection && req.connection.socket
      ? req.connection.socket.remoteAddress
      : null;
  let reqInfoRemoteAddress = req.info ? req.info.remoteAddress : null;

  // x-client-ip
  if (clientIp) {
    ipAddress = clientIp;
  }

  // x-forwarded-for
  else if (forwardedForAlt) {
    // x-forwarded-for header is more common
    // it may return multiple IP addresses in the format:
    // "client IP, proxy 1 IP, proxy 2 IP"
    // we pick the first one
    let forwardedIps = forwardedForAlt.split(',');
    ipAddress = forwardedIps[0];
  }

  // x-real-ip
  // (default nginx proxy/fcgi)
  else if (realIp) {
    // alternative to x-forwarded-for
    // used by some proxies
    ipAddress = realIp;
  }

  // x-cluster-client-ip
  // (Rackspace LB and Riverbed's Stingray)
  // http://www.rackspace.com/knowledge_center/article/controlling-access-to-linux-cloud-sites-based-on-the-client-ip-address
  // https://splash.riverbed.com/docs/DOC-1926
  else if (clusterClientIp) {
    ipAddress = clusterClientIp;
  }

  // x-forwarded
  else if (forwardedAlt) {
    ipAddress = forwardedAlt;
  }

  // forwarded-for
  else if (forwardedFor) {
    ipAddress = forwardedFor;
  }

  // forwarded
  else if (forwarded) {
    ipAddress = forwarded;
  }

  // remote address checks
  else if (reqConnectionRemoteAddress) {
    ipAddress = reqConnectionRemoteAddress;
  } else if (reqSocketRemoteAddress) {
    ipAddress = reqSocketRemoteAddress;
  } else if (reqConnectionSocketRemoteAddress) {
    ipAddress = reqConnectionSocketRemoteAddress;
  } else if (reqInfoRemoteAddress) {
    ipAddress = reqInfoRemoteAddress;
  }

  // return null if we cannot find an address
  else {
    ipAddress = null;
  }

  return ipAddress;
};

export default async function handler(req, res) {
  let currency = {
    code: 'USD',
    symbol: '$',
  };

  try {
    const apiCurrency = (await getCountryCode(getClientIp(req))) || {};
    if (
      apiCurrency.code != null &&
      ['USD', 'EUR', 'GBP'].includes(apiCurrency.code)
    )
    currency = apiCurrency;
  } catch (ex) {
    console.log('Error fetching user currency', ex);
  }
  res.status(200).json(currency);
}
