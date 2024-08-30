/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import downArrowIcon from "@images/chevron-down-outline.svg";

function MoreBtn({ onClick }) {
  return (
    <div css={moreButtonStyle}>
      <span css={line}></span>
      <span css={text} onClick={onClick}>
        더보기
        <img src={downArrowIcon} css={arrowIcon} alt="더보기" />
      </span>
      <span css={line}></span>
    </div>
  );
}

export default MoreBtn;

const moreButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0 0 0;
  color: #cccccc;
`;

const line = css`
  flex-grow: 1;
  height: 2px;
  background-color: #dbdbdb;
`;

const text = css`
  display: flex;
  align-items: center;
  margin: 0 18px;
  font-size: 14px;
  font-weight: 700;
  color: var(--mono-gray-txt-light);
`;

const arrowIcon = css`
  margin-left: 6px;
  width: 14px;
  height: 14px;
`;
