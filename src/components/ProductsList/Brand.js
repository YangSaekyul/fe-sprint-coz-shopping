import BookmarkButton from "../Buttons/BookmarkButton";
import Styled from "styled-components";
import {
  FontSize16,
  FontSize16Weight800,
  ImageContainer,
  StyledImage,
  NumberContainer,
} from "./ProductsStyles";

const ProductContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 287px;
`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Brand = ({ item }) => (
  <div>
    <ImageContainer>
      <StyledImage src={item.brand_image_url} alt={item.title} />
      <BookmarkButton />
    </ImageContainer>
    <ProductContainer>
      <FontSize16Weight800>{item.brand_name}</FontSize16Weight800>
      <NumberContainer>
        <FontSize16Weight800>관심고객수</FontSize16Weight800>
        <FontSize16>{numberWithCommas(item.follower)}</FontSize16>
      </NumberContainer>
    </ProductContainer>
  </div>
);

export default Brand;
