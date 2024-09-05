/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MoreBtn from "./MoreBtn";

function Title({ titleFirst, title, subTitle, showMore, link }) {
  return (
    <div css={title_wrap}>
      <p css={sub_title}>{subTitle}</p>
      <h1 css={main_title}>{titleFirst}</h1>
      <span css={main_span}>{title}</span>
      {showMore && <MoreBtn link={link} translateY="-15%" />}
    </div>
  );
}

export default Title;

const title_wrap = css`
  padding: 0 0 48px 0;
`;

const sub_title = css`
  font-size: 16px;
  line-height: 30px;
  color: var(--point-color-2);
  margin-bottom: 8px;
  font-family: "Prata", serif;
`;

const main_title = css`
  font-size: 64px;
  line-height: 60px;
  color: var(--point-color-2);
  font-family: "Prata";
  display: inline;
  line-height: 1;

  @media (max-width: 400px) {
    font-size: 58px;
  }

  @media (max-width: 350px) {
    font-size: 54px;
  }
`;

const main_span = css`
  font-size: 32px;
  font-family: "Prata";
  color: var(--mono-black-title-2);
  margin: 0px;

  @media (max-width: 400px) {
    font-size: 28px;
  }

  @media (max-width: 350px) {
    font-size: 26px;
  }
`;
