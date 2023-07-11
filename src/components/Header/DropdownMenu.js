import styled from "styled-components";
import gift from "./gift.png";
import bookmark from "./bookmark.png";

const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;

const StyledUl = styled.ul`
  padding: 10px;
`;

const StyledLi = styled.li`
  display: flex;
  padding: 15px;
  list-style: none;

  // 위, 아래 테두리 지정
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

function DropdownMenu() {
  return (
    <>
      <StyledDropdownMenu>
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
