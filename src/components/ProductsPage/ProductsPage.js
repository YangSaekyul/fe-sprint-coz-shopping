import { useData } from "./useData";
import { useState } from "react";
import Filter from "../Main/Filter/Filter";

import Products from "../ProductsList/Products";
import Exhibition from "../ProductsList/Exhibition";
import Category from "../ProductsList/Category";
import Brand from "../ProductsList/Brand";
import Styled from "styled-components";

import Loading from "./Loading";

const GridContainer = Styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const ProductComponent = ({ numItems = Infinity, showFilter = true }) => {
  const { data, loading, error } = useData();
  const [filterType, setFilterType] = useState("All");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(data)) {
    return <div>데이터가 존재하지 않습니다!</div>;
  }

  const limitedData = data.slice(0, numItems);

  return (
    <>
      {showFilter && <Filter setFilterType={setFilterType} />}

      <GridContainer>
        {limitedData.map((item) => {
          if (filterType !== "All" && item.type !== filterType) {
            return null;
          }

          switch (item.type) {
            case "Product":
              return <Products key={item.id} item={item} />;
            case "Category":
              return <Category key={item.id} item={item} />;
            case "Exhibition":
              return <Exhibition key={item.id} item={item} />;
            case "Brand":
              return <Brand key={item.id} item={item} />;
            default:
              return null;
          }
        })}
      </GridContainer>
    </>
  );
};

export default ProductComponent;
