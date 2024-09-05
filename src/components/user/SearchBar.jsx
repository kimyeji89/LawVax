/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { ReactComponent as DropDown } from "@images/chevron-down-black.svg";

const selectOptionData = [
  { text: "기업 감사/내부통제", value: "기업 감사/내부통제" },
  { text: "기술보호", value: "기술보호" },
  { text: "금융/가상자산", value: "금융/가상자산" },
  { text: "건설/부동산", value: "건설/부동산" },
];

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelectView = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e) => {
    setSelected(e.currentTarget.dataset.value);
  };

  return (
    <div css={search_wrap}>
      <div css={search_container}>
        <div
          className="selectBox"
          onClick={handleSelectView}
          css={selectBoxCtn}
        >
          {selected === null ? (
            <p css={placeholder}>업무분야 선택</p>
          ) : (
            <p css={value}>{selected}</p>
          )}
          <DropDown css={dropDown} />
          {isOpen && (
            <ul css={optionCtn}>
              {selectOptionData.map((item, idx) => (
                <li
                  key={item.value + idx}
                  onClick={handleSelect}
                  data-value={item.value}
                  css={option}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>
        <input placeholder="성함을 입력해주세요." css={input} type="text" />
      </div>
    </div>
  );
}
export default SearchBar;

const input = css`
  color: var(--mono-gray-txt-dark);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  width: calc(100% - 165px);
  background-color: transparent;

  @media (max-width: 370px) {
    font-size: 14px;
  }

  &::placeholder {
    color: var(--mono-gray-txt-light);
  }
`;

const option = css`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: #111111;
  text-align: center;
  white-space: nowrap;

  &:not(:last-child) {
    margin-bottom: 11px;
  }
  &:not(:last-child):after {
    position: absolute;
    display: block;
    content: "";
    width: 109px;
    height: 1px;
    background-color: #d9d9d9;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 370px) {
    font-size: 14px;
  }
`;

const optionCtn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  box-sizing: border-box;
  width: 145px;
  border-left: 2px solid #d9d9d9;
  border-right: 2px solid #d9d9d9;
  border-bottom: 2px solid #d9d9d9;
  background-color: var(--mono-white);
  position: absolute;
  bottom: 0;
  z-index: 0;
  left: 0;
  transform: translateY(100%);
`;

const placeholder = css`
  width: 87px;
  overflow: hidden;
  line-height: 24px;
  color: #999999;

  @media (max-width: 370px) {
    font-size: 14px;
  }
`;

const dropDown = css`
  position: absolute;
  right: 0;
  top: 12px;
  transform: translateX(-50%);
`;

const value = css`
  width: 87px;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 24px;
  color: #111111;
  white-space: nowrap;

  @media (max-width: 370px) {
    font-size: 14px;
  }
`;

const selectBoxCtn = css`
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 149px;
  padding: 12px 16px;
  box-sizing: border-box;
`;

const search_wrap = css`
  background-color: #f9f9f9;
  padding: 24px 16px;
  margin: 0 0 48px 0;
`;

const search_container = css`
  width: 100%;
  display: flex;
  align-items: center;
  height: 48px;
  box-shadow: 0 0 0 2px var(--mono-gray-txt-light) inset;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--mono-gray-txt-light);
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
`;
