import { json } from "@sveltejs/kit";

export async function GET() {
  return json(7);
}

export async function PUT({ request }) {
  const obj = await request.json();
  console.log("obj: " + JSON.stringify(obj, null, 2));
  return json(obj);
}