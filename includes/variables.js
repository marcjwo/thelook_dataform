// Tagging funciton expects 4 args - 1/ table 2/ data owner 3/ data level 4/ data domain

const orders_data_domain = "orders"

// BigQuery Labels
const source_data_level = "source"
const intermediate_data_level = "intermediate"
const output_data_level = "output"

module.exports = {
    orders_data_domain,
    source_data_level,
    intermediate_data_level,
    output_data_level
}