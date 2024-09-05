/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import openIcon from "@images/field/open-btn.svg";
import closeIcon from "@images/field/close-btn.svg";
import { useState } from "react";

function FieldList({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={field_wrap(isOpen)}>
      <div
        css={isOpen ? field_list_wrap_open : field_list_wrap}
        onClick={toggleAccordion}
      >
        <span css={item_title}>{title}</span>
        {isOpen ? (
          <img src={closeIcon} alt="close" />
        ) : (
          <img src={openIcon} alt="open" />
        )}
      </div>
      {isOpen && <div css={field_item_wrap}>{children}</div>}
    </div>
  );
}

export default FieldList;

const field_wrap = (isOpen) => css`
  width: 100%;
  height: ${isOpen ? "100%" : "87px"};
  box-sizing: border-box;
  border-bottom: 1px solid #c2c7cd;
  background-color: ${isOpen ? "#F3F4F8" : "var(--mono-white"};
`;

const field_list_wrap = css`
  padding: 25.5px 25.5px 25.5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const field_list_wrap_open = css`
  ${field_list_wrap};
  border-bottom: 1px solid #c2c7cd;
`;

const item_title = css`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  color: #121619;
`;

const field_item_wrap = css`
  padding: 24px 16px;
  height: 100%;
  background-color: var(--mono-white);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px;

  @media (min-width: 600px) {
    justify-content: start;
    gap: 36px;
  }
`;
