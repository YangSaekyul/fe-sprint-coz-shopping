import styled from "styled-components";

const HeaderBar = styled.header`
  display: flex;
`;

const Logo = styled.img`
  width: 100px;
`;

const Header = () => {
  return (
    <HeaderBar>
      <Logo src="/images/logo192.png" alt="logo" />
      <h1>COZ Shopping</h1>
    </HeaderBar>
  );
};

export default Header;
