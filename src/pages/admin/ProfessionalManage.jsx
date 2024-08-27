/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function ProfessionalManage() {
  return (
    <main>
      <h2 css={pageTitle}>구성원 관리</h2>
      <div css={card} className="selected">
        <p css={cardTitle} className="cardTitle">
          전체
        </p>
        <p css={cardContent} className="cardContent">
          <span className="num">16</span>
          <span>명</span>
        </p>
      </div>
    </main>
  );
}

const pageTitle = css`
  font-family: Nunito Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  color: var(--mono-black-title);
  margin-bottom: 20px;
`;

const card = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 286px;
  height: 100px;
  background-color: var(--mono-white);
  padding: 16px;
  box-sizing: border-box;
  border-radius: 10px;
  &.selected {
    background-color: var(--point-color-1);
    .cardTitle {
      color: var(--mono-white);
    }
    .cardContent * {
      color: var(--mono-white);
    }
  }
`;

const cardTitle = css`
  line-height: 24px;
  text-align: left;
  opacity: 90%;
`;

const cardContent = css`
  text-align: right;
  span {
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
  }
`;
