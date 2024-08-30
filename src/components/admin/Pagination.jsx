/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Pagination({ currentPage, setCurrentPage, pageAmt }) {
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pages = Array.from({ length: pageAmt }, (_, i) => i + 1);

  return (
    <nav>
      <ul css={ctn}>
        {pages.map((page, idx) => (
          <>
            <li key={page} style={{ margin: "0 5px" }}>
              <button
                onClick={() => handlePageClick(page)}
                css={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "26px",
                  textAlign: "center",
                  color: page === currentPage ? "#1676BC" : "#999999",
                  backgroundColor: "transparent",
                }}
              >
                {page}
              </button>
            </li>
            {pages.length - 1 > idx && <span css={divider}></span>}
          </>
        ))}
      </ul>
    </nav>
  );
}
const ctn = css`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const divider = css`
  width: 2px;
  height: 18px;
  background: #d9d9d9;
`;
