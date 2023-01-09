// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function handler(req, res) {
  let myFile = await fs.readFileSync(`db.json`);
  console.log(JSON.parse(myFile));
  // let allBlogsArray;
  // allBlogsArray.push(JSON.parse(myFile));
  res.status(200).json(JSON.parse(myFile));
}
