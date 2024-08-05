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

  {
    "Id": 123,
    "Title": "Bicycle 123",
    "Description": "123 description",
    "BicycleType": "Hybrid",
    "Brand": "Brand-Company C",
    "Price": 500,
    "Color": ["Red", "Black"],
    "ProductCategory": "Bicycle",
    "InStock": true,
    "QuantityOnHand": null,
    "RelatedItems": [
        341,
        472,
        649
    ],
    "Pictures": {
        "FrontView": "http://example.com/products/123_front.jpg",
        "RearView": "http://example.com/products/123_rear.jpg",
        "SideView": "http://example.com/products/123_left_side.jpg"
    },
    "ProductReviews": {
      "FiveStar": [
          "Excellent! Can't recommend it highly enough! Buy it!",
          "Do yourself a favor and buy this."
      ],
      "OneStar": [
          "Terrible product! Do not buy this."
      ]
    },
    "Comment": "This product sells out quickly during the summer",
    "Safety.Warning": "Always wear a helmet"
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