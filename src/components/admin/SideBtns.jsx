/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function SideBtn({ children, selected }) {
  function handleStyle(e) {
    document.querySelectorAll(".sideBtns").forEach((item) => {
      item.classList.remove("selected");
    });
    e.currentTarget.classList.add("selected");
  }
  return (
    <button
      css={[sidebarBtnStyle]}
      onClick={handleStyle}
      className={selected ? "selected sideBtns" : "sideBtns"}
    >
      <div className="ctn" css={ctn}>
        {children}
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

export { SideBtn };
