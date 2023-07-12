import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid lightgrey;
  background-color: white;
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: grey;
  margin: 10px 0;
`;

const StyledDiv = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  color: grey;

  &:hover {
    color: black;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <StyledFooter>
        <StyledDiv>개인정보 처리방침 | 이용 약관</StyledDiv>
        <StyledDiv>All rights reserved @ Codestates</StyledDiv>
      </StyledFooter>
    </FooterContainer>
  );
}

export default Footer;
