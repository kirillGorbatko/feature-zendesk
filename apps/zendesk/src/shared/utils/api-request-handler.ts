import { API_URL } from '../constants';

type RequestUrl = {
  url?: string;
  fullUrl?: string;
};

const createHeaders = () => {
  const ACCOUNT_EMAIL = 'support@feature.fm';
  const EMAIL_AND_API = `${ACCOUNT_EMAIL}/token:${process.env.API_KEY}`;
  const TOKEN = Buffer.from(EMAIL_AND_API).toString('base64');

  const headers = new Headers({
    Authorization: `Basic ${TOKEN}`,
    'Content-Type': 'application/json',
  });

  return headers;
};

const createUrl = (url: string) => {
  return `${API_URL}${url}`;
};

export const apiRequestHandler = <T>(): {
  get: ({ url, fullUrl }: RequestUrl) => Promise<T>;
} => {
  const get = async ({ url, fullUrl }: RequestUrl) => {
    try {
      const response = await fetch(fullUrl || createUrl(url), {
        headers: createHeaders(),
      });

      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error ${response.statusText}, status = ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    get,
  };
};
