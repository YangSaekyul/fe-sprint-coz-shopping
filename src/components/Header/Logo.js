import styled from "styled-components";

const StyledLogo = styled.svg`
  width: 111;
  height: 29;
`;

function Logo() {
  return (
    <>
      <StyledLogo
        width="111"
        height="29"
        viewBox="0 0 111 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="general-header__content--logo--small"
      >
        <path
          d="M31.9 0.5L29 3.4V9L31.9 11.9H47.8L50.7 9V3.5L47.8 0.6H31.9V0.5Z"
          fill="#452CDD"
        ></path>
        <path
          d="M19.2999 17L16.3999 19.9V25.5L19.2999 28.4H47.6999L50.5999 25.5V19.9L47.6999 17H19.2999Z"
          fill="#0D2259"
        ></path>
        <path
          d="M2.9 17L0 19.9V25.5L2.9 28.4H8.5L11.4 25.5V19.9L8.5 17H2.9Z"
          fill="#0D2259"
        ></path>
      </StyledLogo>
    </>
  );
}

export default Logo;
