/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function TextField({ id, label, size, placeholder, isSingle }) {
  switch (isSingle) {
    case true:
      return (
        <div>
          <label htmlFor={id} css={textInputLabel} className="label">
            {label}
          </label>
          <input
            type="text"
            name={id}
            id={id}
            css={[textInput, size]}
            required
            placeholder={placeholder}
          />
        </div>
      );
    case false:
      return (
        <>
          <label htmlFor={id} css={textInputLabel}>
            {label}
          </label>
          <input
            type="text"
            name={id}
            id={id}
            css={[textInput, size]}
            required
            placeholder={placeholder}
          />
        </>
      );
    default:
      return (
        <div>
          <label htmlFor={id} css={textInputLabel}>
            {label}
          </label>
          <input
            type="text"
            name={id}
            id={id}
            css={[textInput, size]}
            required
            placeholder={placeholder}
          />
        </div>
      );
  }
}

function TextArea({ id, label, placeholder }) {
  return (
    <div css={textAreaCtn}>
      <label htmlFor={id} css={textInputLabel}>
        {label}
      </label>
      <textarea
        name={id}
        id={id}
        rows="10"
        css={[textInput, textArea]}
        required
        placeholder={placeholder}
      />
    </div>
  );
}

const textInputLabel = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: var(--mono-gray-txt-dark);
  margin-bottom: 10px;
  white-space: nowrap;
  display: block;
`;

const textInput = css`
  height: 52px;
  padding: 14px 16px;
  box-sizing: border-box;
  background-color: var(--mono-gray-bg-1);
  box-shadow: 0 0 0 0.6px #d5d5d5 inset;
  border: none;
  border-radius: 8px;
  color: var(--mono-gray-txt-dark);
  &::placeholder {
    font-weight: 400;
    line-height: 24px;
    color: var(--mono-gray-input-ph);
  }
`;

const textAreaCtn = css`
  height: 275px;
`;

const textArea = css`
  width: 780px;
  height: 248px;
  resize: none;
`;

export { TextField, TextArea };
