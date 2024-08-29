/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function NewsItem({ title, imgSrc, date, link }) {
  return (
    <div css={item_wrap}>
      {imgSrc && <img src={imgSrc} css={card_img} alt="news-thumbnail" />}
      <p css={item_title}>{title}</p>
      <div css={item_last}>
        <span css={item_date}>{date}</span>
        <span css={item_link}>
          <Link to={link}>자세히 보기</Link>
        </span>
      </div>
    </div>
  );
}

export default NewsItem;

const item_wrap = css`
  border-bottom: 1px solid var(--mono-gray-line-1);
  margin: 0 0 24px 0;
`;

const card_img = css`
  width: 100%;
  height: 160px;
  margin: 0 0 14px 0;

  @media (min-width: 760px) {
    height: 400px;
  }
`;

const item_title = css`
  width: 100%;
  height: 26px;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: var(--mono-gray-txt-dark);
  margin: 0 0 24px 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const item_last = css`
  display: flex;
  justify-content: space-between;
  margin: 0 0 24px 0;

  span {
    line-height: 24px;
    color: var(--mono-gray-txt-light);
  }
`;

const item_date = css`
  font-size: 14px;
  font-weight: 400;
`;

const item_link = css`
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;

  a {
    color: var(--mono-gray-txt-light);
  }
`;
