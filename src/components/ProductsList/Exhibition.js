import BookmarkButton from "../Buttons/BookmarkButton";
import {
  ImageContainer,
  FontSize16Weight800,
  StyledImage,
  FontSize16,
} from "./ProductsStyles";

const Exhibition = ({ item }) => (
  <div>
    <ImageContainer>
      <StyledImage src={item.image_url} alt={item.title} />
      <BookmarkButton />
    </ImageContainer>
    <FontSize16Weight800># {item.title}</FontSize16Weight800>
    <FontSize16>{item.sub_title}</FontSize16>
  </div>
);

export default Exhibition;
