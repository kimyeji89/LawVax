/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NewsCategory({
  onCategoryChange,
  enableRouting = false,
  defaultCategory = "법인소식",
}) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathToCategory = {
      "/lawNews": "법인소식",
      "/media": "언론보도",
      "/recruit": "인재영입",
    };

    const currentCategory =
      pathToCategory[location.pathname] || defaultCategory;
    setActiveCategory(currentCategory);
  }, [location.pathname, defaultCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    if (enableRouting) {
      const routes = {
        법인소식: "/lawNews",
        언론보도: "/media",
        인재영입: "/recruit",
      };
      navigate(routes[category]);
    } else {
      if (onCategoryChange) onCategoryChange(category);
    }
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
