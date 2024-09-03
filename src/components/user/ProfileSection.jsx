/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MoreBtn from "@userComponents/MoreBtn";
import { useState } from "react";

function ProfileSection({ id, title, data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCount = isExpanded ? data.length : 4;

  const handleMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id={title} css={section_wrap}>
      <div css={title_wrap}>
        <div></div>
        <h1>{title}</h1>
      </div>

      <ul css={list_wrap}>
        {data.slice(0, visibleCount).map((item, index) => (
          <li key={index}>
            {title === "저서/활동/기타" ? (
              <p>• {item.description}</p>
            ) : (
              <>
                <div>{item.year}</div>
                <p>{item.description}</p>
              </>
            )}
          </li>
        ))}
      </ul>

      {data.length > 4 ? (
        <MoreBtn isExpanded={isExpanded} onClick={handleMoreClick} />
      ) : (
        <div css={line}></div>
      )}
    </section>
  );
}

export default ProfileSection;

const section_wrap = css`
  padding: 48px 16px 0;
`;

const title_wrap = css`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    width: 8px;
    height: 28px;
    background-color: var(--point-color-2);
  }

  h1 {
    font-size: 28px;
    font-weight: 500;
    color: var(--mono-gray-txt-dark);
  }
`;

const list_wrap = css`
  padding: 20px 20px 8px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 8px;
  }

  div {
    display: flex;
    align-items: center;
    min-width: 74px;
    height: 24px;
    color: var(--mono-gray-txt-light);
  }

  p {
    line-height: 24px;
    color: #666666;
  }
`;

const line = css`
  background-color: #dbdbdb;
  height: 2px;
  margin-top: 28px;
`;
