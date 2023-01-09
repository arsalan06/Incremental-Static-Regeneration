// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function handler(req, res) {
  let myFile = await fs.readFileSync(`db.json`);

  let allProductArray = JSON.parse(myFile);
  // console.log(allProductArray.products);
  // console.log(req.query);
  let product = await allProductArray.products.find(
    (item) => item.id == req.query.productId
  );
  // allBlogsArray.push(JSON.parse(myFile));
  res.status(200).json(product);
}
