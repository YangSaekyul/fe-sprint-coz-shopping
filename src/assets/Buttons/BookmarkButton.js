import bookmarkOff from "../Images/bookmarkOff.png";
import bookmarkOn from "../Images/bookmarkOn.png";
import React, { useState } from "react";

import styled, { keyframes } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark, removeBookmark } from "../../features/bookmark";

const StyledButton = styled.img`
  position: ${(props) => (props.inline ? "none" : "absolute")};
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

function BookmarkButton({ id, inline = false }) {
  const dispatch = useDispatch();
  const isBookmarked = useSelector((state) => state.bookmark[id]);

  const [toast, setToast] = useState({
    isShown: false,
    message: "",
  });

  const handleBookmark = (e) => {
    e.stopPropagation();
    let message = "";
    if (!isBookmarked) {
      dispatch(toggleBookmark(id));
      message = "상품이 북마크에 추가되었습니다.";
    } else {
      dispatch(removeBookmark(id));
      message = "상품이 북마크에서 제거되었습니다.";
    }

    setToast({
      isShown: true,
      message,
    });

    setTimeout(() => setToast({ isShown: false, message: "" }), 2500);
  };

  return (
    <>
      <StyledButton
        src={isBookmarked ? bookmarkOn : bookmarkOff}
        onClick={handleBookmark}
        alt="북마크 버튼"
        inline={inline}
      />
      {toast.isShown && <StyledToast>{toast.message}</StyledToast>}
    </>
  );
}

export default BookmarkButton;
