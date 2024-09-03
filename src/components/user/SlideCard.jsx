/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function SlideCard({ category, title, date, link }) {
  return (
    <div css={slide_card}>
      <div css={card_category}>{category}</div>
      <div css={card_title}>{title}</div>
      <div css={card_last}>
        <div css={card_date}>{date}</div>
        <div css={card_link}>
          <Link to={link}>자세히 보기</Link>
        </div>
      </div>
    </div>
  );
}

export default SlideCard;

const slide_card = css`
  width: 218px;
  height: 224px;
  border: 2px solid var(--mono-gray-line-1);
  padding: 22px 14px;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const card_category = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 32px;
  margin: 0 0 28px 0;
  background-color: var(--point-color-2);
  color: var(--mono-white);
  font-size: 12px;
  line-height: 24px;
  font-weight: 700;
`;

const card_title = css`
  width: 190px;
  height: 52px;
  margin: 0 0 44px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--mono-gray-txt-dark);

  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const card_date = css`
  font-size: 14px;
  line-height: 24px;
  color: var(--mono-gray-txt-light);
`;

const card_link = css`
  font-size: 14px;
  line-height: 24px;
  text-decoration: underline var(--mono-gray-txt-light);

  a {
    color: var(--mono-gray-txt-light);
  }
`;

const card_last = css`
  display: flex;
  justify-content: space-between;
`;
