import BookmarkButton from "../Buttons/BookmarkButton";
import Styled from "styled-components";
import { ImageContainer, ProductName, StyledImage } from "./ProductsStyles";

const ProductSubTitle = Styled.div`
  font-size: 16px;
`;

const Category = ({ item }) => (
  <div>
    <ImageContainer>
      <StyledImage src={item.image_url} alt={item.title} />
      <BookmarkButton />
    </ImageContainer>
    <ProductName># {item.title}</ProductName>
    <ProductSubTitle>{item.sub_title}</ProductSubTitle>
  </div>
);

export default Category;
