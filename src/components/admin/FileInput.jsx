/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

export default function FileInput({ onChange }) {
  const [fileName, setFileName] = useState("");
  function handleFile(e) {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
      setFileName(file.name);
    } else {
      setFileName("");
    }
  }
  return (
    <>
      <p css={textInputLabelPost}>첨부파일</p>
      <label htmlFor="file" css={customFileInput}>
        <span css={btn}>파일 찾기</span>
        <span css={fileName}>{fileName}</span>
      </label>
      <input
        type="file"
        name="file"
        id="file"
        css={fileInput}
        onChange={handleFile}
      />
    </>
  );
}

const textInputLabelPost = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
  color: var(--mono-gray-txt-dark);
  margin-bottom: 6px;
  white-space: nowrap;
  display: block;
`;

const fileInput = css`
  display: none;
`;

const btn = css`
  padding: 2px 4px;
  box-sizing: border-box;
  width: 60px;
  height: 20px;
  background-color: #eeeeee;
  box-shadow: 0 0 0 1px var(--mono-gray-txt-light) inset;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: var(--mono-gray-txt-dark);
`;

const customFileInput = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 1430px;
  padding: 2px;
  box-sizing: border-box;
  height: 24px;
  background-color: var(--mono-white);
  box-shadow: var(--input-bd-inner-1);
  border-radius: 4px;
`;
