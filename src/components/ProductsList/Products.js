import BookmarkButton from "../Buttons/BookmarkButton";
import Styled from "styled-components";
import {
  ImageContainer,
  FontSize16Weight800,
  NumberContainer,
  StyledImage,
  FontSize16,
} from "./ProductsStyles";

const ProductContainer = Styled.div`
`;

const InfoContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 287px;
`;

const ProductDiscountPercentage = Styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #452CDD;
`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Products = ({ item }) => (
  <ProductContainer>
    <ImageContainer>
      <StyledImage src={item.image_url} alt={item.title} />
      <BookmarkButton />
    </ImageContainer>
    <InfoContainer>
      <FontSize16Weight800>{item.title}</FontSize16Weight800>
      <NumberContainer>
        <ProductDiscountPercentage>
          {item.discountPercentage}%
        </ProductDiscountPercentage>
        <FontSize16>{numberWithCommas(item.price)}원</FontSize16>
      </NumberContainer>
    </InfoContainer>
  </ProductContainer>
);

export default Products;
