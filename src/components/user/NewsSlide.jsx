/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function NewsSlide({ children }) {
  return (
    <div css={slider_wrapper}>
      <div css={slider_container}>{children}</div>
    </div>
  );
}

export default NewsSlide;

const slider_wrapper = css`
  //   border: 1px solid red;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--point-color-2);
  }

  &::-webkit-scrollbar-track {
    background: var(--mono-gray-line-1);
  }
`;

const slider_container = css`
  height: 242px;
  white-space: nowrap;
  scroll-behavior: smooth;
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    // width: 398px;
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--point-color-2);
  }

  &::-webkit-scrollbar-track {
    background: var(--mono-gray-line-1);
    // width: 398px;
  }
`;
