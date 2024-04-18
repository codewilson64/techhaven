import axios from "axios";

export async function productsData() {
  const products = await axios.get("https://codewilson64.github.io/apple-product-api/db.json");
  return products;
}
