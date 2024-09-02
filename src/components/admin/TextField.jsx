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

function TextFieldReadOnly({ id, label, size, value, isSingle }) {
  switch (isSingle) {
    case true:
      return (
        <div>
          <label htmlFor={id} css={textInputLabel} className="label">
            {label}
          </label>
          <input
            className="readOnly"
            type="text"
            name={id}
            id={id}
            css={[textInput, size]}
            value={value}
            readOnly
          />
        </div>
      );
    case false:
      return (
        <>
          <label htmlFor={id} css={textInputLabel} className="label">
            {label}
          </label>
          <input
            className="readOnly"
            type="text"
            name={id}
            id={id}
            css={[textInput, size]}
            value={value}
            readOnly
          />
        </>
      );
    default:
      return (
        <div>
          <label htmlFor={id} css={textInputLabel} className="label">
            {label}
          </label>
          <input
            className="readOnly"
            type="text"
            name={id}
            id={id}
            css={[textInput, size]}
            value={value}
            readOnly
          />
        </div>
      );
  }
}

function TextFieldPost({ id, label, placeholder }) {
  return (
    <div>
      <label htmlFor={id} css={textInputLabelPost} className="label">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        css={[textInputPost]}
        required
        placeholder={placeholder}
      />
    </div>
  );
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

function TextAreaReadOnly({ id, label, value }) {
  return (
    <div css={textAreaCtn}>
      <label htmlFor={id} css={textInputLabel}>
        {label}
      </label>
      <textarea
        className="readOnly"
        name={id}
        id={id}
        rows="10"
        css={[textInput, textArea]}
        value={value}
        readOnly
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

const textInputLabelPost = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
  color: var(--mono-gray-txt-dark);
  margin-bottom: 6px;
  white-space: nowrap;
  display: block;
`;

const textInput = css`
  height: 52px;
  padding: 14px 16px;
  box-sizing: border-box;
  background-color: var(--mono-gray-bg-1);
  box-shadow: var(--input-bd-inner-1);
  border: none;
  border-radius: 8px;
  color: var(--mono-gray-txt-dark);
  font-size: 16px;
  &.readOnly {
    cursor: default;
  }
  &::placeholder {
    font-weight: 400;
    line-height: 24px;
    color: var(--mono-gray-input-ph);
  }
`;

const textInputPost = css`
  width: 1272px;
  height: 28px;
  padding: 4px 8px;
  box-sizing: border-box;
  background-color: var(--mono-white);
  box-shadow: var(--input-bd-inner-2);
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--mono-gray-txt-dark);
  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
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

export {
  TextField,
  TextFieldReadOnly,
  TextFieldPost,
  TextArea,
  TextAreaReadOnly,
};
