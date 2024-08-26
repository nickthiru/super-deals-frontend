import { brands } from '$lib/data/brands.js';

export async function load({ fetch }) {

  // const res = await fetch("/api/products");

  // const result = await res.json();

  // console.log("result: ", JSON.stringify(result, null, 2));

  // return {
  //   products: result,
  // };

  return {
    brands,
  };
}
