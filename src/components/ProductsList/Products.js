import BookmarkButton from "../Buttons/BookmarkButton";
import Styled from "styled-components";

const ImageContainer = Styled.div`
  position: relative;
  display: inline-block;
`;

const StyledImage = Styled.img`
  width: 200px;
  height: 200px;
  
`;

const Products = ({ item }) => (
  <div>
    <ImageContainer>
      <StyledImage src={item.image_url} alt={item.title} />
      <BookmarkButton />
    </ImageContainer>
    <h2>{item.title}</h2>
    <p>{item.price}</p>
    <p>{item.discountPercentage}</p>
  </div>
);

export default Products;
