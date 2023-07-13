import BookmarkButton from "../../assets/Buttons/BookmarkButton";
import Styled from "styled-components";
import {
  FontSize16,
  FontSize16Weight800,
  ImageContainer,
  StyledImage,
  NumberContainer,
  ListContainer,
} from "./StyledProductsList";
import Modal from "../Modal";

import { useState } from "react";

const ProductContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 287px;
`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Brand = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ListContainer onClick={() => setShowModal(true)}>
      <ImageContainer>
        <StyledImage src={item.brand_image_url} alt={item.title} />
        <BookmarkButton id={item.id} />
      </ImageContainer>
      <ProductContainer>
        <FontSize16Weight800>{item.brand_name}</FontSize16Weight800>
        <NumberContainer>
          <FontSize16Weight800>관심고객수</FontSize16Weight800>
          <FontSize16>{numberWithCommas(item.follower)}</FontSize16>
        </NumberContainer>
      </ProductContainer>
      {showModal && <Modal item={item} close={() => setShowModal(false)} />}
    </ListContainer>
  );
};

export default Brand;
