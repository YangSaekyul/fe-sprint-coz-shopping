import bookmarkOff from "./bookmarkOff.png";
import bookmarkOn from "./bookmarkOn.png";
import { useState } from "react";

import styled from "styled-components";
import { css } from "styled-components";

const StyledButton = styled.img`
  position: absolute;
  bottom: 20px;
  right: 15px;
  width: 30px;
  ${({ inline }) =>
    inline &&
    css`
      position: static;
    `}
`;

function BookmarkButton({ inline = false }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <StyledButton
      src={isBookmarked ? bookmarkOn : bookmarkOff}
      onClick={toggleBookmark}
      alt="북마크 버튼"
      inline={inline}
    />
  );
}

export default BookmarkButton;
