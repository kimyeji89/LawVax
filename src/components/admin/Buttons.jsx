/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as People } from "@images/people-outline.svg";

const manageButtonStyle = css`
  display: flex;
  width: 190px;
  height: 52px;
  padding: 14px 16px 14px 16px;
  box-sizing: border-box;
  gap: 10px;
  background-color: var(--point-color-1);
  border-radius: 8px;
  border: none;
  color: var(--mono-white);
`;

function ManageButton() {
  return (
    <button css={manageButtonStyle}>
      <div className="ctn">
        <People className="icon" fill="white" />
        <p>구성원 관리</p>
      </div>
    </button>
  );
}

export { ManageButton };
