import Styled from "styled-components";

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
  border-radius: 8px;
`;

const ItemImage = Styled.img`
  width: 800px;
  height: 456px;
`;

const Modal = ({ item, close }) => (
  <ModalBackground onClick={close}>
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <ItemImage src={item.image_url} alt={item.title} />
      <h1>{item.title}</h1>
    </ModalContainer>
  </ModalBackground>
);

export default Modal;
