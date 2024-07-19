<script>
  export let data;
  const msg = data.msg
  console.log("msg: " + msg);

  // /**
  //  * @typedef {Object} Product
  //  * @property {string} id
  //  * @property {string} name
  //  * @property {string} description
  //  * 
  // */
  let product = {
    id: "123456",  
    name: "name",
    description: "description",
    category: "fashion",
    price: 10,
    images: ["url1"],
  };

  // /** 
  //  * @param {Product} product
  // */
  async function addProduct() {
    console.log("Inside 'addProduct()'");
    console.log("product: " + JSON.stringify(product, null, 2));

    const response = await fetch("/api/products", {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();

    console.log("result: ", JSON.stringify(result, null, 2));
  }

  // async function getRequest() {
  //   const response = await fetch("/api/products");
  //   const msg = await response.json();
  //   console.log("msg: " + msg);
  // }
</script>

<h1>Add product page</h1>

<form action="">
  <button type="submit" on:click={addProduct}>Add Product</button>
</form>

<!-- <form action="">
  <button type="submit" on:click={getRequest}>Fetch</button>
</form> -->