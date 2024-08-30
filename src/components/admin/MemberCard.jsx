/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Card({ title, num, IsSelected, onSelect }) {
  function handleCategory(e) {
    let target = e.currentTarget.querySelector(".cardTitle");
    if (target) {
      onSelect(target.innerText);
    }
  }
  return (
    <div
      css={card}
      className={IsSelected && "selected"}
      onClick={handleCategory}
    >
      <p css={cardTitle} className="cardTitle">
        {title}
      </p>
      <p css={cardContent} className="cardContent">
        <span className="num">{num > 0 ? num : "-"}</span>
        <span>명</span>
      </p>
    </div>
  );
}

export default function MemberCard({ onSelect, category }) {
  return (
    <section className="cardCtn" css={cardCtn}>
      <Card
        title="전체"
        num="16"
        onSelect={onSelect}
        IsSelected={category === "전체" ? true : false}
      />
      <Card
        title="대표 변호사"
        num="5"
        onSelect={onSelect}
        IsSelected={category === "대표 변호사" ? true : false}
      />
      <Card
        title="파트너 변호사"
        num="3"
        onSelect={onSelect}
        IsSelected={category === "파트너 변호사" ? true : false}
      />
      <Card
        title="변호사"
        num="8"
        onSelect={onSelect}
        IsSelected={category === "변호사" ? true : false}
      />
      <Card
        title="고문"
        num="0"
        onSelect={onSelect}
        IsSelected={category === "고문" ? true : false}
      />
    </section>
  );
}

const cardCtn = css`
  display: flex;
  gap: 30px;
  width: 1543px;
`;

const card = css`
  cursor: pointer;
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
