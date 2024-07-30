/*
Story: Merchant can add a product to their catalog

*****

Bounded context: Catalog

Data:

  AddProductFormDetails = {
    merchantId: string,
    merchantName: string,
    productId: string, 
    productName: string,
    description: string,
    category: "fashion" | "pharmacy" | "appliances",
    price: number,
    stockQuantity: number,
    images: [
      url: string,
      ...
    ],
    dateAdded: Date
  }

Infra:

  API

    HTTP

      PUT /products/{product-id}

      Parameters: AddProductFormDetails

  DDB


  Lambda


*****

Rule: ?

  Scenario: Merchant successfully adds product to catalog

    User fills outs 'add product' form

    User clicks 'submit' button

    Product is saved to the catalog


*/