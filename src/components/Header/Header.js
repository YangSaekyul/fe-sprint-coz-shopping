import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const HeaderBar = styled.header`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 0 1rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBar>
        <Left>
          <Logo />
          <h1>COZ Shopping</h1>
        </Left>
        <Nav></Nav>
      </HeaderBar>
    </>
  );
};

export default Header;
