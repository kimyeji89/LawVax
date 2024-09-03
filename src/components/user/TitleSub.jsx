/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import moreRec from "@images/more-rectangle.svg";
import { Link } from "react-router-dom";
function TitleSub({ title, showMore, link }) {
  return (
    <div css={title_wrap}>
      <span>{title}</span>

      {showMore && (
        <span css={more_btn}>
          <p css={more_p}>
            <Link to={link}>more </Link>
          </p>

          <img src={moreRec} css={more_bg} />
        </span>
      )}
    </div>
  );
}

export default TitleSub;

const title_wrap = css`
  span {
    font-size: 28px;
    font-weight: 500;
    color: var(--mono-gray-txt-dark);
  }
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

  a {
    font-size: 14px;
    font-family: "Prata", serif;
    color: var(--mono-gray-txt-light);
  }
`;

const more_bg = css`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(-55%);
  z-index: -1;
  width: 44px;
  height: 7px;
`;
