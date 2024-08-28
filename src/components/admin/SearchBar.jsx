/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Search } from "@images/search-outline.svg";

export default function SearchBar() {
  return (
    <form action="GET" css={searchForm}>
      <button type="submit" css={searchBtn}>
        <Search />
      </button>
      <label htmlFor="search" css={searchLabel}>
        <p>검색</p>
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        css={searchInput}
      />
    </form>
  );
}

const searchBtn = css`
  padding: 0;
  background-color: transparent;
`;

const searchForm = css`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const searchLabel = css`
  display: none;
`;

const searchInput = css`
  height: 44px;
  width: 263px;
  background: var(--mono-white);
  border: 1px solid #d9d9d9;
  padding: 10px 14px;
  box-sizing: border-box;
  color: #6e6e6f;
  &::placeholder {
    color: var(--mono-gray-input-ph);
    line-height: 24px;
  }
`;
