import BookmarkButton from "../Buttons/BookmarkButton";
import {
  ImageContainer,
  FontSize16Weight800,
  StyledImage,
  FontSize16,
  ListContainer,
} from "./ProductsStyles";

const Exhibition = ({ item }) => (
  <ListContainer>
    <ImageContainer>
      <StyledImage src={item.image_url} alt={item.title} />
      <BookmarkButton />
    </ImageContainer>
    <FontSize16Weight800># {item.title}</FontSize16Weight800>
    <FontSize16>{item.sub_title}</FontSize16>
  </ListContainer>
);

export default Exhibition;
