import bookmarkOff from "./bookmarkOff.png";
import bookmarkOn from "./bookmarkOn.png";
import { useState } from "react";

import styled, { keyframes } from "styled-components";

const StyledButton = styled.img`
  position: absolute;
  bottom: 20px;
  right: 15px;
  width: 30px;
`;

const fadeIn = keyframes`
  0% { bottom: 0; opacity: 0; }
  50% { bottom: 30px; opacity: 1; }
  100% { bottom: 30px; opacity: 1; }
`;

const fadeOut = keyframes`
  0% { bottom: 30px; opacity: 1; }
  50% { bottom: 60px; opacity: 0; }
  100% { bottom: 60px; opacity: 0; }
`;

const StyledToast = styled.div`
  position: absolute;
  bottom: 30px;
  right: 15px;
  background: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2s;
  animation-fill-mode: forwards;
`;

function BookmarkButton({ inline = false }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isToastShown, setToastShown] = useState(false);

  const toggleBookmark = (event) => {
    event.stopPropagation();
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      setToastShown(true);
      setTimeout(() => setToastShown(false), 2500);
    }
  };

  return (
    <>
      <StyledButton
        src={isBookmarked ? bookmarkOn : bookmarkOff}
        onClick={toggleBookmark}
        alt="북마크 버튼"
        inline={inline}
      />
      {isToastShown && <StyledToast>북마크에 담겼습니다!</StyledToast>}
    </>
  );
}

export default BookmarkButton;
