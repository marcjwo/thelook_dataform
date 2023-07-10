[
  "distribution_centers",
  "users",
  "events",
  "inventory_items",
  "order_items",
  "products",
  "orders"
].forEach((name) =>
  declare({
    database: "bigquery-public-data", 
    schema: "thelook_ecommerce",
    name,
  })
);