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
  overflow-x: auto;
  white-space: nowrap;

  padding: 0 16px 0 0;

  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--point-color-2);
    margin: 16px !important;
    padding: 16px !important;
  }

  &::-webkit-scrollbar-track {
    background: var(--mono-gray-line-1);
    margin: 16px !important;
    padding: 16px !important;
  }

  &::before,
  &::after {
    content: "";
    width: 16px;
    flex-shrink: 0;
  }
`;

const slider_container = css`
  height: 242px;
  white-space: nowrap;
  scroll-behavior: smooth;
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 2px;
    width: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--point-color-2);
  }

  &::-webkit-scrollbar-track {
    background: var(--mono-gray-line-1);
  }

  & > *:last-of-type {
    margin-right: 0; /* 마지막 슬라이드 오른쪽 마진 제거 */
  }
`;
