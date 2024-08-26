/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  padding: 12px 48px;
  box-sizing: border-box;
  background-color: var(--mono-white);
  box-shadow: var(--shadow-2);
  z-index: 10;
  .logo {
    width: 163px;
    height: 48px;
  }
`;

export default function Header() {
  return (
    <header css={headerStyle}>
      <Link to="/admin/PostManage">
        <img
          src="/assets/images/lawvax_signature_en 1.png"
          alt="logo"
          className="logo"
        />
      </Link>
    </header>
  );
}
