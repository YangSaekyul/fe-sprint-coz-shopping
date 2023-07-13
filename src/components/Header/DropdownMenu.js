import styled, { css, keyframes } from "styled-components";
import gift from "../../assets/Images/gift.png";
import bookmark from "../../assets/Images/bookmark.png";

import { CustomLink } from "./StyledLink";

import { useRef, useEffect } from "react";

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
  transform: translateY(10px);
  background-color: #fff;
  z-index: 9997;
  animation: ${(props) =>
    props.open
      ? css`
          ${fadeIn} 0.5s forwards
        `
      : css`
          ${fadeOut} 0.5s forwards
        `};
`;

const StyledUl = styled.ul`
  padding: 10px;
`;

const StyledLi = styled.li`
  display: flex;
  padding: 15px;
  list-style: none;
  text-decoration: none;
  color: inherit;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

function DropdownMenu({ open, onClose }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <StyledDropdownMenu open={open} ref={dropdownRef}>
      <StyledUl>
        <StyledLi>양새결님, 안녕하세요!</StyledLi>
        <StyledLi>
          <CustomLink to="/product">
            <StyledImg src={gift} alt="상품리스트 페이지 아이콘"></StyledImg>
            상품리스트 페이지
          </CustomLink>
        </StyledLi>
        <StyledLi>
          <CustomLink to="/bookmark">
            <StyledImg src={bookmark} alt="북마크 페이지 아이콘"></StyledImg>
            북마크 페이지
          </CustomLink>
        </StyledLi>
      </StyledUl>
    </StyledDropdownMenu>
  );
}

export default DropdownMenu;
