/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { ManageButton } from "@adminComponents/Buttons";

const navStyle = css`
  position: fixed;
  left: 0;
  width: 238px;
  top: 75px;
  bottom: 0;
  padding: 24px;
  box-sizing: border-box;
  background-color: var(--mono-white);
  border-right: 1px solid #dfdfdf;
`;

export default function SideBar() {
  return (
    <nav css={navStyle}>
      <Link to="/admin/professional">
        <ManageButton />
      </Link>
      <Link to="/admin/post">
        <p>게시글 관리</p>
      </Link>
    </nav>
  );
}
