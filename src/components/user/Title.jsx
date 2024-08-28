/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import moreRec from "@images/more-rectangle.svg";

function Title({ titleFirst, title, subTitle, showMore }) {
  return (
    <div css={fontImport}>
      <p css={sub_title}>{subTitle}</p>
      <h1 css={main_title}>{titleFirst}</h1>
      <span css={main_span}>{title}</span>
      {showMore && (
        <span css={more_btn}>
          <p css={more_p}>more</p>
          <img src={moreRec} css={more_bg} />
        </span>
      )}
    </div>
  );
}

export default Title;

const fontImport = css`
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
`;

const main_span = css`
  font-size: 32px;
  font-family: "Prata";
  color: #222222;
  margin: 0;
`;

const more_btn = css`
  position: relative;
  margin-left: 18px;
  z-index: 1;

  display: flex-inline;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 44px;
  height: 7px;

  text-align: center;
`;

const more_p = css`
  display: inline-block;
  width: 44px;
  height: 14px;
  font-size: 14px;
  font-family: "Prata", serif;
  color: var(--mono-gray-txt-light);
`;

const more_bg = css`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(-15%);
  z-index: -1;
  width: 44px;
  height: 7px;
`;
