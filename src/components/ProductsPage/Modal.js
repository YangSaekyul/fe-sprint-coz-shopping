import Styled from "styled-components";
import closeButton from "./ic_round-close.png";

import { ImageContainer } from "../ProductsList/ProductsStyles";
import BookmarkButton from "../Buttons/BookmarkButton";

const ModalBackground = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  
  cursor: default;
`;

const ModalContainer = Styled.div`
  position: relative;
  border-radius: 8px;
`;

const ItemImage = Styled.img`
  width: 800px;
  height: 456px;
  border-radius: 2%;
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.5);
`;

const CloseButton = Styled.img`
  position: absolute;
  top: -210px;
  right: 15px;
  width: 30px;
  cursor: pointer;
`;

const TitleContainer = Styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`;

const Title = Styled.h1`  
  color: white;
  margin-left: 20px;
`;

const Modal = ({ item, close }) => {
  const closeModal = () => {
    close();
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ItemImage src={item.image_url} alt={item.title} />
        <TitleContainer>
          <BookmarkButton inline={true} />
          <Title>{item.title}</Title>
        </TitleContainer>
      </ModalContainer>
      <ImageContainer>
        <CloseButton
          onClick={closeModal}
          src={closeButton}
          alt="닫기 버튼"
        ></CloseButton>
      </ImageContainer>
    </ModalBackground>
  );
};

export default Modal;
