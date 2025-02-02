import { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";

const StyledNav = styled.svg`
  height: 37.6px;
  margin-right: 40px;
`;

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledNav
        onClick={toggleMenu}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="menu-bar"
      >
        <path
          d="M18.2,12.7H5.8C5.3,12.7,5,12.4,5,12s0.3-0.7,0.7-0.7h12.5c0.4,0,0.7,0.3,0.7,0.7S18.7,12.7,18.2,12.7z M19,7.8
    C19,7.3,18.7,7,18.3,7H5.8C5.3,7,5,7.4,5,7.8s0.3,0.7,0.7,0.7h12.5C18.7,8.5,19,8.2,19,7.8z M19,16.2c0-0.4-0.3-0.7-0.7-0.7H5.8
    c-0.4,0-0.7,0.3-0.7,0.7C5,16.6,5.4,17,5.8,17h12.5C18.7,17,19,16.7,19,16.2z"
        ></path>
      </StyledNav>
      {isOpen && <DropdownMenu open={isOpen} onClose={handleCloseMenu} />}
    </>
  );
}

export default Nav;
