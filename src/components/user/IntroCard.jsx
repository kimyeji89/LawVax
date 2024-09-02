/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function IntroCard({ imgSrc, title, text }) {
  return (
    <>
      <img src={imgSrc} css={intro_img} />
      <h1 css={intro_title}>{title}</h1>
      <p css={intro_text}>{text}</p>
    </>
  );
}

export default IntroCard;

const intro_img = css`
  width: 100%;
`;

const intro_title = css`
  font-weight: 700;
  font-size: 28px;
  height: 28px;
  color: var(--mono-gray-txt-dark);

  margin: 24px 0 14px 0;
`;

const intro_text = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--mono-gray-icon);
  margin: 0 0 84px 0;
`;
