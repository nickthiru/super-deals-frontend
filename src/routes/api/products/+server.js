import { json } from "@sveltejs/kit";
import { products } from "$lib/data/products.js";

export async function GET() {
  console.log("[+] Inside +server.js GET");

  // console.log("products: " + JSON.stringify(products, null, 2));
  return json(products);
}

export async function PUT({ request }) {
  console.log("[+] Inside +server.js PUT");

  const obj = await request.json();
  console.log("obj: " + JSON.stringify(obj, null, 2));
  return json(obj);
}