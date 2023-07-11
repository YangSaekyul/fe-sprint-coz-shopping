import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: grey;
`;

// div 포인터 커서 적용 / 글씨 크기 0.8rem / margin-top 20px / 글씨 색 grey
// 호버 적용 (하이퍼링크같은 형태)
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
