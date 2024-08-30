/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import linkBtn from "@images/chevron-next-black.svg";
import { Link } from "react-router-dom";

function FieldItem({ title, link }) {
  return (
    <div css={field_item}>
      {title}
      <Link to={link}>
        <img src={linkBtn} css={link_icon} />
      </Link>
    </div>
  );
}

export default FieldItem;

const field_item = css`
  width: 152px;
  height: 44px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  @media (max-width: 390px) {
    width: 134px;
    padding: 10px;
  }
`;

const link_icon = css`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
