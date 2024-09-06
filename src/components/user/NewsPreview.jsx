/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function NewsPreview({ title, text, date }) {
  return (
    <div css={item_wrap}>
      <p css={item_title}>{title}</p>
      <p css={item_text}>{text}</p>
      <div css={item_date}>{date}</div>
    </div>
  );
}

export default NewsPreview;

const item_wrap = css`
  border-bottom: 1px solid var(--mono-gray-line-1);
  margin: 0 0 24px 0;
`;

const item_title = css`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);
  margin: 0 0 14px 0;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const item_text = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--mono-gray-icon);

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const item_date = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 24px 0;
  color: var(--mono-gray-txt-normal);
`;
