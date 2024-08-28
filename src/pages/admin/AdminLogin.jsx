/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { ReactComponent as Check } from "@images/check-icon.svg";
import { ReactComponent as EyeOff } from "@images/eye-off-outline.svg";
import { ReactComponent as EyeOn } from "@images/eye-outline.svg";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [errorMassage, setErrorMassage] = useState(null);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
      setErrorMassage("잘못된 아이디입니다.");
    } else {
      setErrorMassage(null);
    }
  };

  return (
    <main css={ctn}>
      <img
        css={logo}
        src="/assets/images/lawvax_signature_en 2.png"
        alt="logo"
        className="logo"
      />
      <form action="POST" css={form}>
        <div css={inputCtn}>
          <label htmlFor="id" css={label}>
            아이디
          </label>
          <input
            type="text"
            name="id"
            id="id"
            css={textInput}
            placeholder="아이디를 입력해주세요."
            required
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            onBlur={() => validateEmail(email)}
          />
          {errorMassage && (
            <span className="error" css={error}>
              잘못된 아이디 입니다.
            </span>
          )}
        </div>
        <div css={inputCtn}>
          <label htmlFor="pw" css={label}>
            비밀번호
          </label>
          <input
            type="password"
            name="pw"
            id="pw"
            css={textInput}
            placeholder="비밀번호를 입력해주세요."
            required
          />
          <EyeOn css={eyeOn} />
          <EyeOff css={eyeOff} />
        </div>
        <div css={checkboxCtn}>
          <label htmlFor="auto" css={checkboxCustom}>
            <input type="checkbox" name="auto" id="auto" css={checkbox} />
            <Check css={checkIcon} />
          </label>
          <span css={checkboxLabel}>자동 로그인</span>
        </div>
        <button css={[btn]} type="submit">
          <p className="text" css={text}>
            로그인
          </p>
        </button>
      </form>
    </main>
  );
}

const ctn = css`
  display: flex;
  gap: 210px;
`;

const logo = css`
  width: 588px;
  height: 174px;
`;

const btn = css`
  width: 602px;
  height: 48px;
  border-radius: 6px;
  box-shadow: var(--btn-bd);
  background-color: var(--point-color-1);
`;

const text = css`
  color: var(--mono-white);
  font-weight: 400;
  line-height: 48px;
`;

const form = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 602px;
`;

const inputCtn = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

const label = css`
  opacity: 70%;
  line-height: 24px;
  color: var(--mono-black-icon-2);
  text-align: left;
`;

const textInput = css`
  position: relative;
  width: 602px;
  height: 48px;
  padding: 14px;
  box-sizing: border-box;
  border-radius: 6px;
  border: none;
  background-color: var(--mono-gray-bg-1);
  box-shadow: 0px -1px 0px 0px #c1c7cd inset;
  color: #6e6e6f;
  &::placeholder {
    color: var(--mono-gray-input-ph);
    opacity: 70%;
    line-height: 24px;
    text-align: left;
  }
  &::invalid,
  &.invalid {
    box-shadow: 0px -1px 0px 0px var(--other-red) inset;
  }
`;

const error = css`
  position: absolute;
  bottom: -4px;
  transform: translateY(100%);
  left: 0;
  opacity: 100%;
  color: var(--other-red);
  font-size: 12px;
  line-height: 12px;
`;

const eyeOn = css`
  top: calc(32px + ((100% - 32px) / 2));
  transform: translateY(-50%);
  right: 14px;
  position: absolute;
`;

const eyeOff = css`
  display: none;
  top: calc(32px + ((100% - 32px) / 2));
  transform: translateY(-50%);
  right: 14px;
  position: absolute;
`;

const checkboxCtn = css`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const checkboxLabel = css`
  color: var(--mono-gray-txt-dark);
  line-height: 24px;
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

const checkIcon = css``;
