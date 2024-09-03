/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Pagination() {
  return (
    <div css={pagination}>
      <ul css={page_list}>
        <li css={page_active}>1</li>
        <li css={page_number}>2</li>
        <li css={page_number}>3</li>
        <li css={page_number}>4</li>
        <li css={page_number}>5</li>
      </ul>
    </div>
  );
}

export default Pagination;

const pagination = css`
  margin: 48px 0 130px 0;
`;

const page_list = css`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--mono-gray-txt-light);
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  height: 26px;

  li {
    cursor: pointer;
  }

  li:not(:last-of-type)::after {
    content: "";
    position: absolute;
    right: -1px;
    width: 2px;
    height: 18px;
    background-color: var(--mono-gray-line-1);
    top: 50%;
    transform: translateY(-50%);
  }
`;

const page_number = css`
  position: relative;
  padding: 0 8px;
  color: var(--mono-gray-txt-light);
`;

const page_active = css`
  color: var(--point-color-2);
  position: relative;
  padding: 0 8px;
`;
