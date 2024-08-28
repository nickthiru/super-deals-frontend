/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    // console.log("event: " + JSON.stringify(event, null, 2));
    // console.log("request: " + JSON.stringify(request, null, 2));

    const data = await request.formData();
    const title = data.get("title");
    console.log("title: " + title);
    const brand = data.get("brand");
    console.log("brand: " + brand);
    const category = data.get("category");
    console.log("category: " + category);
    const price = data.get("price");
    console.log("price: " + price);
    const img = data.get("img");
    // console.log("typeof img: " + typeof img);
    console.log("img: " + img);

    // const response = await fetch("/api/products", {
    //   method: "PUT",
    //   body: JSON.stringify(product),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });

    // const result = await response.json();

    // console.log("result: ", JSON.stringify(result, null, 2));
  }
};