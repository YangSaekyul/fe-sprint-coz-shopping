import React from "react";
import { useData } from "./useData";

const ProductComponent = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(data)) {
    return <div>데이터가 존재하지 않습니다!</div>;
  }

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
