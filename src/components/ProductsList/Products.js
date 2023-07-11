import BookmarkButton from "../Buttons/BookmarkButton";
import Styled from "styled-components";
import { ImageContainer, ProductName, StyledImage } from "./ProductsStyles";

const ProductContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 287px;
`;

const PriceContainer = Styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const ProductDiscountPercentage = Styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #452CDD;
`;

const ProductPrice = Styled.div`
  font-size: 16px;
`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Products = ({ item }) => (
  <div>
    <ImageContainer>
      <StyledImage src={item.image_url} alt={item.title} />
      <BookmarkButton />
    </ImageContainer>
    <ProductContainer>
      <ProductName>{item.title}</ProductName>
      <PriceContainer>
        <ProductDiscountPercentage>
          {item.discountPercentage} %
        </ProductDiscountPercentage>
        <ProductPrice>{numberWithCommas(item.price)} 원</ProductPrice>
      </PriceContainer>
    </ProductContainer>
  </div>
);

export default Products;
