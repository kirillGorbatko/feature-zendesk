export async function testAffiliate(id: string) {
  const response = await fetch(`${process.env.URL_AFFILIATE_API}/${id}`);
  if (response.status >= 200 && response.status < 400) {
    return { status: response.status, data: await response.json() };
  }
  return { status: response.status, data: null };
};
