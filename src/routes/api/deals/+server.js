import { json, text } from "@sveltejs/kit";
import { deals } from "../../../../test/data/deals.js";



export async function GET() {
  console.log("[+] Inside +server.js GET");

  // console.log("products: " + JSON.stringify(products, null, 2));
  return json(deals);
}

export async function PUT({ request }) {
  console.log("[+] Inside +server.js PUT");

  const obj = await request.json();
  console.log("obj: " + JSON.stringify(obj, null, 2));
  return json(obj);
}

/**
 * Exporting the fallback handler will match any unhandled request methods, including methods like 
 * MOVE which have no dedicated export from +server.js.
 * @type {import('./$types').RequestHandler}  
 */
export async function fallback({ request }) {
  return text(`I caught your ${request.method} request!`);
}