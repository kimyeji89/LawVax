/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header css={headerStyle}>
      <Link to="/admin/PostManage">
        <h1 css={title}>LawVax</h1>
        <img
          css={logoStyle}
          src="/assets/images/lawvax_signature_en 1.png"
          alt="LawVax logo"
          className="logo"
        />
      </Link>
    </header>
  );
}

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
`;

const title = css`
  display: none;
`;

const logoStyle = css`
  width: 163px;
  height: 48px;
`;
