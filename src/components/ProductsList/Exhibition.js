import BookmarkButton from "../../assets/BookmarkButton";
import {
  ImageContainer,
  FontSize16Weight800,
  StyledImage,
  FontSize16,
  ListContainer,
} from "./StyledProductsList";
import Modal from "../Modal";

import { useState } from "react";

const Exhibition = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ListContainer onClick={() => setShowModal(true)}>
      <ImageContainer>
        <StyledImage src={item.image_url} alt={item.title} />
        <BookmarkButton />
      </ImageContainer>
      <FontSize16Weight800># {item.title}</FontSize16Weight800>
      <FontSize16>{item.sub_title}</FontSize16>
      {showModal && <Modal item={item} close={() => setShowModal(false)} />}
    </ListContainer>
  );
};

export default Exhibition;
