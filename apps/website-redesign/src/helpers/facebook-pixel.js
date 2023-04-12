import { v4 as uuidv4 } from 'uuid';

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

const cookieValue = (name) => document.cookie.match(new RegExp(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`))?.pop() || '';

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const sendEvent = async (name, options = {}) => {
  const eventId = uuidv4();

  if (typeof window !== 'undefined' && window.fbq) window.fbq('track', name, options, { eventID: eventId });

  try {
    const fbc = cookieValue('_fbc') || null;
    const fbp = cookieValue('_fbp') || null;

    await fetch(
      `${process.env.NEXT_PUBLIC_FFM_CONSOLE_API_URL}/facebook-conversion`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          fbc,
          fbp,
          eventId,
          ...options,
        }), method: 'POST'}
    );
  } catch (ex) {
    console.error('error report facebook conversion', ex);
  }
};
