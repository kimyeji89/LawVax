/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import useLocationControl from "@hooks/useLocationControl";
import { ReactComponent as People } from "@images/people-outline.svg";
import { ReactComponent as Tray } from "@images/file-tray-full-outline.svg";
import { ReactComponent as Settings } from "@images/settings-outline.svg";
import { ReactComponent as Power } from "@images/power-outline.svg";
import { SideBtn } from "@adminComponents/SideBtns";

export default function SideBar() {
  const { includeLocation, checkLocation } = useLocationControl();

  return (
    <nav css={nav}>
      <div className="top" css={top}>
        <Link to="/admin/super/">
          <SideBtn
            selected={checkLocation([
              "/admin/super/",
              "/admin/super/register",
              "/admin/general/",
              "/admin/general/view",
            ])}
          >
            <People className="icon" css={icon} />
            <p className="text" css={text}>
              구성원 관리
            </p>
          </SideBtn>
        </Link>
        <Link to="/admin/super/post">
          <SideBtn selected={includeLocation("post")}>
            <Tray className="icon" css={icon} />
            <p className="text" css={text}>
              게시글 관리
            </p>
          </SideBtn>
        </Link>
      </div>
      <span className="divider" css={divider}></span>
      <div className="bottom" css={bottom}>
        {checkLocation([
          "/admin/general/view",
          "/admin/general/post/register",
          "/admin/general/post/my",
        ]) === true ? (
          ""
        ) : (
          <SideBtn>
            <Settings className="icon" css={icon} />
            <p className="text" css={text}>
              설정
            </p>
          </SideBtn>
        )}

        <SideBtn>
          <Power className="icon" css={icon} />
          <p className="text" css={text}>
            로그아웃
          </p>
        </SideBtn>
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
  border: 0.6px solid var(--mono-gray-line-3);
`;

const icon = css`
  fill: var(--mono-black-icon-1);
`;
const text = css`
  font-weight: 700;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);
`;
