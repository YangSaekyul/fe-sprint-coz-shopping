import BookmarkButton from "../../assets/BookmarkButton";
import Styled from "styled-components";
import {
  ImageContainer,
  FontSize16Weight800,
  StyledImage,
  ListContainer,
} from "./StyledProductsList";
import Modal from "../Modal";
import { useState } from "react";

const ProductContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 287px;
`;

const Category = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ListContainer onClick={() => setShowModal(true)}>
      <ImageContainer>
        <StyledImage src={item.image_url} alt={item.title} />
        <BookmarkButton />
      </ImageContainer>
      <ProductContainer>
        <FontSize16Weight800># {item.title}</FontSize16Weight800>
      </ProductContainer>
      {showModal && <Modal item={item} close={() => setShowModal(false)} />}
    </ListContainer>
  );
};

export default Category;
