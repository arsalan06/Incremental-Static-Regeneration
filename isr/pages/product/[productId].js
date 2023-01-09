import React from "react";

const Sindleproduct = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <h1>{data.description}</h1>
      <h1>{data.price}</h1>
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  let res = await fetch(
    `http://localhost:3000/api/getproduct?productId=${params.productId}`
  );
  console.log(res);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data }, revalidate: 10 };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }, { params: { productId: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}
export default Sindleproduct;
