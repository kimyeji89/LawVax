/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function NewsCategory() {
  return (
    <div css={news_list}>
      <span css={news_item_active}>법인소식</span>
      <span css={news_item}>언론보도</span>
      <span css={news_item}>인재영입</span>
    </div>
  );
}
export default NewsCategory;

const news_list = css`
  width: 264px;
  padding: 0 0 48px 0;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  margin: 0 auto;

  span {
    font-size: 16px;
  }
`;

const news_item = css`
  color: var(--mono-gray-txt-light);
`;

const news_item_active = css`
  color: var(--mono-gray-txt-dark);
  font-weight: 700;

  position: relative;
  padding-bottom: 8px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: var(--mono-gray-txt-dark);
  }
`;
