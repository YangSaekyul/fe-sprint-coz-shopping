import BookmarkButton from "../../assets/Buttons/BookmarkButton";
import Styled from "styled-components";
import {
  ImageContainer,
  FontSize16Weight800,
  NumberContainer,
  StyledImage,
  FontSize16,
  ListContainer,
} from "./StyledProductsList";
import Modal from "../Modal";

import { useState } from "react";

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

const Products = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ListContainer onClick={() => setShowModal(true)}>
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
      {showModal && <Modal item={item} close={() => setShowModal(false)} />}
    </ListContainer>
  );
};

export default Products;
