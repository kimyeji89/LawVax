/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import dropIcon from "../../assets/images/chevron-down-black.svg";

function SearchBar() {
  return (
    <div css={search_wrap}>
      <div css={search_container}>
        <select>
          <option disabled hidden selected>
            업무분야 선택
          </option>
          <option>기업 분야</option>
          <option>업무 분야2</option>
          <option>업무 분야3</option>
        </select>
        <input placeholder="성함을 입력해주세요." />
      </div>
    </div>
  );
}

export default SearchBar;

const search_wrap = css`
  background-color: #f9f9f9;
  padding: 24px 16px;
  margin: 0 0 48px 0;
`;

const search_container = css`
  display: flex;
  align-items: center;
  height: 48px;
  border: 2px solid var(--mono-gray-txt-light);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--mono-gray-txt-light);
  box-sizing: border-box;
  background-color: #fff;

  position: relative;

  select {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    width: 149px;
    padding: 12px;
    background-color: #fff;
    border: none;
    color: var(--mono-gray-txt-light);
    border-radius: 0px;
    outline: none;

    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background: url(${dropIcon}) no-repeat right 10px center;
    background-size: 24px 24px;

    option {
      color: var(--mono-gray-txt-dark);
      width: 149px;

      font-size: 16px;
    }

    select:focus {
      outline: none;
    }

    @media (max-width: 370px) {
      width: 130px;
      font-size: 14px;
      background-size: 18px 18px;
    }
  }

  input {
    color: var(--mono-gray-txt-dark);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    border: none;

    width: 50%;

    @media (max-width: 370px) {
      font-size: 14px;
    }
  }

  input::placeholder {
    color: var(--mono-gray-txt-light);
  }
`;
