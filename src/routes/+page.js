export function load({ url }) {
  const params = url.searchParams.get('promo') || '';
  return {
    params
  };
}