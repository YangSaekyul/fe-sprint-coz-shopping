import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: grey;
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
    <StyledFooter>
      <StyledDiv>개인정보 처리방침 | 이용 약관</StyledDiv>
      <StyledDiv>All rights reserved @ Codestates</StyledDiv>
    </StyledFooter>
  );
}

export default Footer;
