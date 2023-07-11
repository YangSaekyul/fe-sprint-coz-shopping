import styled, { css, keyframes } from "styled-components";
import gift from "./gift.png";
import bookmark from "./bookmark.png";

// 트랜지션 애니메이션을 위한 keyframes 정의
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0px); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(10px); }
`;

const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
  opacity: 0; // 처음엔 안보이게 설정
  transform: translateY(10px); // 처음 위치 조정
  animation: ${(props) =>
    props.open
      ? css`
          ${fadeIn} 0.5s forwards
        `
      : css`
          ${fadeOut} 0.5s forwards
        `}; // 애니메이션 추가
`;

const StyledUl = styled.ul`
  padding: 10px;
`;

const StyledLi = styled.li`
  display: flex;
  padding: 15px;
  list-style: none;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

function DropdownMenu({ open }) {
  return (
    <>
      <StyledDropdownMenu open={open}>
        <StyledUl>
          <StyledLi>양새결님, 안녕하세요!</StyledLi>
          <StyledLi>
            <StyledImg src={gift} alt="상품리스트 페이지 아이콘"></StyledImg>
            상품리스트 페이지
          </StyledLi>
          <StyledLi>
            <StyledImg src={bookmark} alt="북마크 페이지 아이콘"></StyledImg>
            북마크 페이지
          </StyledLi>
        </StyledUl>
      </StyledDropdownMenu>
    </>
  );
}

export default DropdownMenu;
