import bookmarkOff from "./bookmarkOff.png";
import bookmarkOn from "./bookmarkOn.png";
import { useState } from "react";

import styled from "styled-components";

const StyledButton = styled.img`
  position: absolute;
  bottom: 20px;
  right: 15px;
  width: 30px;
`;

function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <StyledButton
      src={isBookmarked ? bookmarkOn : bookmarkOff}
      onClick={toggleBookmark}
      alt="북마크 버튼"
    />
  );
}

export default BookmarkButton;
