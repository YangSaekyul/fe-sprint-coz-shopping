import { useData } from "../data/useData";
import { useState } from "react";
import Filter from "../components/Filter/Filter";

import Products from "../components/ProductsList/Products";
import Exhibition from "../components/ProductsList/Exhibition";
import Category from "../components/ProductsList/Category";
import Brand from "../components/ProductsList/Brand";
import Styled from "styled-components";

import Loading from "../components/Loading";

import { useSelector } from "react-redux";

const GridContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const BookmarkPage = ({ numItems = Infinity, showFilter = true }) => {
  const { data, loading, error } = useData();
  const [filterType, setFilterType] = useState("All");

  const bookmarkIds = useSelector((state) => state.bookmark);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(data)) {
    return <div>데이터가 존재하지 않습니다!</div>;
  }

  const bookmarkedData = data.filter((item) => bookmarkIds[item.id]);
  const limitedData = bookmarkedData.slice(0, numItems);

  return (
    <>
      {showFilter && <Filter setFilterType={setFilterType} />}
      <main>
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
      </main>
    </>
  );
};

export default BookmarkPage;
