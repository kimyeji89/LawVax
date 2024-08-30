/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import openIcon from "@images/open-btn.svg";
import closeIcon from "@images/close-btn.svg";
import { useState } from "react";

function FieldList({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={field_wrap(isOpen)}>
      <div css={field_list_wrap} onClick={toggleAccordion}>
        <span css={item_title}>{title}</span>
        {isOpen ? <img src={closeIcon} /> : <img src={openIcon} />}
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
  background-color: ${isOpen ? "#F3F4F8" : "#fff"};
`;

const field_list_wrap = css`
  padding: 25.5px 25.5px 25.5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: #fff;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;
