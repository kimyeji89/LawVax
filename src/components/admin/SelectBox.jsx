/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { ReactComponent as DropDown } from "@images/Drop Down.svg";

function SelectBox({
  label,
  placeholder,
  selectedValue,
  size,
  data,
  onSelect,
  id,
  isMulti,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectView = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e) => {
    const value = e.target.getAttribute("data-value");

    onSelect(id, value);
    if (!isMulti) {
      setIsOpen(false);
    }
  };

  const renderSelectedText = () => {
    if (isMulti) {
      if (id === "Task") {
        if (selectedValue.length === 0) return "";
        if (selectedValue.length === 1) return selectedValue[0];
        return `${selectedValue[0]} 외 ${selectedValue.length - 1}개`;
      }
      if (id === "Lang") {
        if (selectedValue.length === 0) return "";
        if (selectedValue.length <= 3)
          return selectedValue.slice(0, 3).join(", ");
        return `${selectedValue.slice(0, 3).join(", ")} 외 ${
          selectedValue.length - 3
        }개`;
      }
    } else {
      return selectedValue || placeholder;
    }
  };

  return (
    <div css={selectBoxCtn}>
      <p css={textInputLabel} className="label">
        {label}
      </p>
      <div css={[selectBoxCustom, size]} onClick={handleSelectView}>
        {selectedValue.length === 0 ? (
          <p className="placeholder">{placeholder}</p>
        ) : (
          <p>{renderSelectedText()}</p>
        )}

        <DropDown css={dropDown} />
      </div>
      {isOpen && (
        <ul css={optionBoxCustom} key={id + "-list"}>
          {data.map((item) => (
            <li
              data-value={item.value || item.text}
              key={id + "-" + item.key}
              onClick={handleSelect}
            >
              {item.text || item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SelectBoxPost({
  label,
  placeholder,
  selectedValue,
  data,
  onSelect,
  id,
  isMulti,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectView = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e) => {
    const value = e.target.getAttribute("data-value");

    onSelect(id, value);
    if (!isMulti) {
      setIsOpen(false);
    }
  };

  const renderSelectedText = () => {
    if (isMulti) {
      if (id === "Task") {
        if (selectedValue.length === 0) return "";
        if (selectedValue.length === 1) return selectedValue[0];
        return `${selectedValue[0]} 외 ${selectedValue.length - 1}개`;
      }
      if (id === "Lang") {
        if (selectedValue.length === 0) return "";
        if (selectedValue.length <= 3)
          return selectedValue.slice(0, 3).join(", ");
        return `${selectedValue.slice(0, 3).join(", ")} 외 ${
          selectedValue.length - 3
        }개`;
      }
    } else {
      return selectedValue || placeholder;
    }
  };

  return (
    <div css={selectBoxCtnPost}>
      <p css={textInputLabelPost} className="label">
        {label}
      </p>
      <div css={[selectBoxCustomPost]} onClick={handleSelectView}>
        {selectedValue.length === 0 ? (
          <p className="placeholder">{placeholder}</p>
        ) : (
          <p css={selectedTextPost}>{renderSelectedText()}</p>
        )}

        <DropDown css={dropDownPost} />
      </div>
      {isOpen && (
        <ul css={optionBoxCustomPost} key={id + "-list"}>
          {data.map((item) => (
            <li
              data-value={item.value || item.text}
              key={id + "-" + item.key}
              onClick={handleSelect}
            >
              {item.text || item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
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

const dropDownPost = css`
  width: 10.69px;
  height: 6.11px;
  * {
    fill: var(--mono-gray-txt-light);
  }
`;

const selectBoxCtnPost = css`
  position: relative;
`;

const selectBoxCustomPost = css`
  cursor: pointer;
  position: relative;
  z-index: 1;
  padding: 4px 8px;
  width: 141px;
  height: 28px;
  box-sizing: border-box;
  background-color: var(--mono-white);
  box-shadow: 0 0 0 1px #d5d5d5 inset;
  border: none;
  border-radius: 4px;
  color: var(--mono-gray-txt-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: var(--mono-gray-input-ph);
  }
  .selectedLang {
    display: none;
  }
`;

const selectedTextPost = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const optionBoxCustomPost = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
  bottom: 0px;
  left: 0;
  width: 141px;
  max-height: 320px;
  overflow-y: auto;
  padding: 4px 0;
  box-shadow: 0 0 0 0.6px #d5d5d5 inset;
  transform: translateY(100%);
  box-sizing: border-box;
  background-color: var(--mono-white);
  border-radius: 4px;
  li {
    width: calc(100% - 1.2px);
    box-sizing: border-box;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 14px;
  }
`;

const textInputLabel = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: var(--mono-gray-txt-dark);
  margin-bottom: 10px;
  white-space: nowrap;
  display: block;
`;

const dropDown = css`
  * {
    fill: var(--mono-gray-txt-light);
  }
`;

const selectBoxCtn = css`
  position: relative;
`;

const selectBoxCustom = css`
  cursor: pointer;
  position: relative;
  z-index: 1;
  padding: 14px 16px;
  box-sizing: border-box;
  background-color: var(--mono-gray-bg-1);
  box-shadow: 0 0 0 0.6px #d5d5d5 inset;
  border: none;
  border-radius: 8px;
  color: var(--mono-gray-txt-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .placeholder {
    font-weight: 400;
    line-height: 24px;
    color: var(--mono-gray-input-ph);
  }
  .selectedLang {
    display: none;
  }
`;

const optionBoxCustom = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 320px;
  overflow-y: auto;
  padding: 8px 0;
  box-shadow: 0 0 0 0.6px #d5d5d5 inset;
  transform: translateY(100%);
  box-sizing: border-box;
  background-color: var(--mono-gray-bg-1);
  border-radius: 8px;

  li {
    width: calc(100% - 1.2px);
    box-sizing: border-box;
    padding: 8px 16px;
    cursor: pointer;
  }
  li.selected {
    color: var(--point-color-1);
  }
`;

export { SelectBoxPost, SelectBox };
