// /** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch("/api/products");
  const data = await res.json();
  console.log("data in products/+page.js/load(): " + JSON.stringify(data, null, 2));

  return { data: data };
}