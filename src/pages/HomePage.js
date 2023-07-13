import styled from "styled-components";

import ProductComponent from "./ProductsListPage";
import BookmarkPage from "./BookmarkPage";

const ListTitle = styled.h1`
  margin: 40px;
`;

function MainPage() {
  return (
    <>
      <ListTitle>상품 리스트</ListTitle>
      <ProductComponent numItems={4} showFilter={false} />
      <ListTitle>북마크 리스트</ListTitle>
      <BookmarkPage showFilter={false} numItems={4} />
    </>
  );
}

export default MainPage;
