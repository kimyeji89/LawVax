/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Check } from "@images/check-icon.svg";

export default function CheckBox({ label }) {
  return (
    <div css={checkboxCtn}>
      <label htmlFor="auto" css={checkboxCustom}>
        <input type="checkbox" name="auto" id="auto" css={checkbox} />
        <Check />
      </label>
      <span css={checkboxLabel}>{label}</span>
    </div>
  );
}

const checkboxCtn = css`
  position: absolute;
  top: 50%;
  left: calc(50% + 165px);
  transform: translateY(-50%);
  display: flex;
  gap: 10px;
  align-items: center;
`;

const checkboxLabel = css`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);
`;

const checkboxCustom = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #1a6cb5;
  box-shadow: 0 0 0 1px #8fc0ec inset;
`;

const checkbox = css`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
