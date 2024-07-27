import { json } from "@sveltejs/kit";

export async function GET() {
  console.log("Inside /api/products/+server.js GET");

  const number = 7;
  return json(number);
}

export async function PUT({ request }) {
  const obj = await request.json();
  console.log("obj: " + JSON.stringify(obj, null, 2));
  return json(obj);
}