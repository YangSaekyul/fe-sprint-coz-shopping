import BookmarkButton from "../Buttons/BookmarkButton";
import Styled from "styled-components";
import { ImageContainer, ProductName, StyledImage } from "./ProductsStyles";

const ProductContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 287px;
`;

const Category = ({ item }) => (
  <div>
    <ImageContainer>
      <StyledImage src={item.image_url} alt={item.title} />
      <BookmarkButton />
    </ImageContainer>
    <ProductContainer>
      <ProductName># {item.title}</ProductName>
    </ProductContainer>
  </div>
);

export default Category;
