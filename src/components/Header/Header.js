import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  position: sticky;
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  padding: 1px 0;
  margin-bottom: 20px;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 10px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 0 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderBar>
        <Left>
          <Logo />
          <h1>COZ Shopping</h1>
        </Left>
        <Nav />
      </HeaderBar>
    </StyledHeader>
  );
};

export default Header;
