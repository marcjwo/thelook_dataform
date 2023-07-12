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
    database: dataform.projectConfig.vars.raw_database, 
    schema: dataform.projectConfig.vars.raw_dataset,
    name,
    tags: ["source"]
  })
);