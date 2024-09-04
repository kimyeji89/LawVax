/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function NewsCategory() {
  const [activeCategory, setActiveCategory] = useState("법인소식");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div css={news_list}>
      {["법인소식", "언론보도", "인재영입"].map((category) => (
        <span
          key={category}
          css={activeCategory === category ? news_item_active : news_item}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
}
export default NewsCategory;

const news_list = css`
  width: 264px;
  padding: 0 0 48px 0;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  margin: 0 auto;

  span {
    font-size: 16px;
    cursor: pointer;
  }
`;

const news_item = css`
  color: var(--mono-gray-txt-light);
`;

const news_item_active = css`
  color: var(--mono-gray-txt-dark);
  font-weight: 700;

  position: relative;
  padding-bottom: 8px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: var(--mono-gray-txt-dark);
  }
`;
