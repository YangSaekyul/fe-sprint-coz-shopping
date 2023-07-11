import styled from "styled-components";
import { useData } from "./DataProvider";

const Test = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
`;

function Product() {
  const data = useData();

  //   if (!data) {
  //     return <div>loading...</div>;
  //   }

  const products = data.products.filter(
    (product) => product.type === "Product"
  );

  return (
    <>
      <Test />
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.discountPercentage}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
}

export default Product;
