import React from "react";
import { useData } from "./useData";
import Products from "./Products";
import Exhibition from "./Exhibition";
import Category from "./Category";
import Brand from "./Brand";

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
      {data.map((item) => {
        switch (item.type) {
          case "Product":
            return <Products key={item.id} item={item} />;
          case "Exhibition":
            return <Exhibition key={item.id} item={item} />;
          case "Category":
            return <Category key={item.id} item={item} />;
          case "Brand":
            return <Brand key={item.id} item={item} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProductComponent;