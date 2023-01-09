import React from "react";

function Products({ data }) {
  // console.log(data);
  return (
    <>
      {data?.products?.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <h1>{item.price}</h1>
        </div>
      ))}
    </>
    // <div>
    // <table>
    //   <tr>
    //     <th>Title</th>
    //     <th>description</th>
    //     <th>price</th>
    //   </tr>
    //   {data?.products?.map((item) => (
    //     <tr>
    //       <td>{item.title}</td>
    //       <td>{item.description}</td>
    //       <td>{item.price}</td>
    //     </tr>
    //   ))}
    // </table>
    // </div>
  );
}

export async function getStaticProps() {
  let res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data }, revalidate: 10 };
}

export default Products;
