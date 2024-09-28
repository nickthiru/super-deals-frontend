// @ts-nocheck
import * as R from "ramda";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, fetch }) => {
    console.log("Inside '/merchant/deals/add/+page.server.js");
    // console.log("event: " + JSON.stringify(event, null, 2));

    const merchantId = "Nike"

    const data = await request.formData();

    // const title = data.get("title");
    // console.log("title: " + title);

    // const originalPrice = data.get("originalPrice");
    // console.log("originalPrice: " + originalPrice);

    // const discount = data.get("discount");
    // console.log("discount: " + discount);

    const logoFileInBase64 = data.get("logoFileInBase64");
    // console.log("logoFileInBase64: " + logoFileInBase64);
    // console.log("logoFileInBase64 is empty: " + R.isEmpty(logoFileInBase64));

    const file = new File(
      [Uint8Array.from(btoa(logoFileInBase64), (m) => m.codePointAt(0))],
      'filename.png',
      { type: 'image/png' }
    );

    console.log(file);

    // const category = data.get("category");
    // console.log("category: " + category);

    // const expiration = data.get("expiration");
    // console.log("expiration: " + expiration);

    // const deal = {
    //   merchantId,
    //   title,
    //   originalPrice,
    //   discount,
    //   logoFileInBase64,
    //   category,
    //   expiration,
    // };

    // const response = await fetch("/api/deals", {
    //   method: "POST",
    //   body: JSON.stringify(deal),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });

    // const response = await fetch("https://mms6a4j564.execute-api.us-east-1.amazonaws.com/prod/merchant/deals", {
    //   method: "POST",
    //   body: JSON.stringify(deal),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });

    // const result = await response.json();
    // console.log("result: ", JSON.stringify(result, null, 2));
  }
};