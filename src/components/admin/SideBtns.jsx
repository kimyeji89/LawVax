/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as People } from "@images/people-outline.svg";
import { ReactComponent as Tray } from "@images/file-tray-full-outline.svg";
import { ReactComponent as Settings } from "@images/settings-outline.svg";
import { ReactComponent as Power } from "@images/power-outline.svg";

function ProfessionalManageBtn() {
  return (
    <button css={[sidebarBtnStyle]} className="selected">
      <div className="ctn" css={ctn}>
        <People className="icon" css={icon} />
        <p className="text" css={text}>
          구성원 관리
        </p>
      </div>
    </button>
  );
}

function PostManageBtn() {
  return (
    <button css={[sidebarBtnStyle]}>
      <div className="ctn" css={ctn}>
        <Tray className="icon" css={icon} />
        <p className="text" css={text}>
          구성원 관리
        </p>
      </div>
    </button>
  );
}

function SettingsBtn() {
  return (
    <button css={[sidebarBtnStyle]}>
      <div className="ctn" css={ctn}>
        <Settings className="icon" css={icon} />
        <p className="text" css={text}>
          설정
        </p>
      </div>
    </button>
  );
}

function LogoutBtn() {
  return (
    <button css={[sidebarBtnStyle]}>
      <div className="ctn" css={ctn}>
        <Power className="icon" css={icon} />
        <p className="text" css={text}>
          로그아웃
        </p>
      </div>
    </button>
  );
}

const sidebarBtnStyle = css`
  display: flex;
  width: 190px;
  height: 52px;
  padding: 14px 16px;
  box-sizing: border-box;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background-color: var(--mono-white);
  &:hover,
  &.selected {
    background-color: var(--point-color-1);
    .ctn {
      .icon * {
        fill: var(--mono-white);
      }
      .text {
        font-weight: 700;
        color: var(--mono-white);
      }
    }
  }
`;

const ctn = css`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const icon = css`
  fill: var(--mono-black-icon-1);
`;
const text = css`
  font-weight: 700;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);
`;

export { ProfessionalManageBtn, PostManageBtn, SettingsBtn, LogoutBtn };
