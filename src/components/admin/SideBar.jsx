/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import {
  ProfessionalManageBtn,
  PostManageBtn,
  SettingsBtn,
  LogoutBtn,
} from "@adminComponents/SideBtns";

export default function SideBar() {
  return (
    <nav css={nav}>
      <div className="top" css={top}>
        <Link to="/admin/professional">
          <ProfessionalManageBtn />
        </Link>
        <Link to="/admin/post">
          <PostManageBtn />
        </Link>
      </div>
      <span className="divider" css={divider}></span>
      <div className="bottom" css={bottom}>
        <SettingsBtn />
        <LogoutBtn />
      </div>
    </nav>
  );
}

const nav = css`
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

const top = css`
  height: calc(100% - 214px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const bottom = css`
  padding-top: 16px;
  height: 214px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const divider = css`
  position: absolute;
  left: 0;
  bottom: 238px;
  width: 100%;
  border: 0.6px solid #e0e0e0;
`;
