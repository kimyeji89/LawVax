/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { ReactComponent as MoreIcon } from "@images/rectangle-blue.svg";

function MoreBtn({ link, translateY = "-55%" }) {
  return (
    <span css={more_btn}>
      <p css={more_p}>
        <Link to={link}>more</Link>
      </p>
      <MoreIcon css={more_bg(translateY)} />
    </span>
  );
}

export default MoreBtn;

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
    font-weight: 400;
    font-family: "Prata", serif;
    color: var(--mono-gray-txt-light);
  }
`;

const more_bg = (translateY) => css`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(${translateY});
  z-index: -1;
  width: 44px;
  height: 7px;
`;
