import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Btn274({ text, event }) {
  return (
    <button type="submit" css={btn274} onClick={event}>
      <p>{text}</p>
    </button>
  );
}

function Btn120({ text, children, event, id }) {
  return (
    <button type="button" css={btn120} onClick={event} id={id}>
      {children}
      <p className="text" css={btnText}>
        {text}
      </p>
    </button>
  );
}

function Btn36({ children, event }) {
  return (
    <button type="button" css={btn36} onClick={event}>
      {children}
    </button>
  );
}

const btn274 = css`
  width: 274px;
  height: 56px;
  background-color: var(--point-color-1);
  border-radius: 8px;
  p {
    font-weight: 700;
    font-size: 18px;
    color: var(--mono-white);
  }
`;

const btn120 = css`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 44px;
  background-color: var(--point-color-1);
  border-radius: 8px;
  &.selected {
    background-color: var(--mono-white);
    border: 2px solid var(--point-color-1);
    .icon * {
      fill: var(--point-color-1);
    }
    .text {
      color: var(--point-color-1);
    }
  }
`;

const btn36 = css`
  width: 36px;
  height: 36px;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: var(--mono-gray-bg-1);
  box-shadow: 0 0 0 0.6px #d5d5d5 inset;
  svg * {
    fill: #666666;
  }
`;

const btnText = css`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: var(--mono-white);
`;

export { Btn120, Btn36, Btn274 };
