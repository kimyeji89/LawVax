/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Btn120 } from "@adminComponents/Btns";
import SearchBar from "@adminComponents/SearchBar";
import { ReactComponent as Add } from "@images/add-icon.svg";
import { ReactComponent as Change } from "@images/repeat-outline.svg";
import sampleProfileData from "@data/sampleProfileData.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SuperMember() {
  const [category, setCategory] = useState("전체");
  const [isChange, setIsChange] = useState(false);

  function onSelect(category) {
    setCategory(category);
  }

  function handleChange() {
    let target = document.querySelector("#change");
    if (target) {
      if (target.classList.contains("selected")) {
        target.classList.remove("selected");
      } else {
        target.classList.add("selected");
      }
    }

    setIsChange(!isChange);
  }

  return (
    <main>
      <h2 className="admin-pageTitle">구성원 관리</h2>
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
      <section className="controlCtn" css={controlCtn}>
        <div className="btnCtn" css={btnCtn}>
          <Link to="/admin/super/member/register">
            <Btn120 text="등록하기">
              <Add className="icon" />
            </Btn120>
          </Link>
          <Btn120 text="순서 바꾸기" event={handleChange} id="change">
            <Change className="icon" />
          </Btn120>
          {isChange && <Btn120 text="적용하기" event={handleChange}></Btn120>}
        </div>
        <SearchBar />
      </section>
      <table className="table" css={table}>
        <thead>
          <tr css={tr}>
            <th css={th} className="num">
              번호
            </th>
            <th css={th} className="img">
              이미지
            </th>
            <th css={th} className="position">
              직책
            </th>
            <th css={th} className="name">
              이름
            </th>
            <th css={th} className="email">
              이메일
            </th>
            <th css={th} className="empty"></th>
            <th css={th} className="isPublic">
              공개여부
            </th>
            <th css={th} className="edit">
              수정
            </th>
            <th css={th} className="delete">
              삭제
            </th>
          </tr>
        </thead>
        <tbody>
          {category === "전체" &&
            sampleProfileData.map((item, idx) => (
              <tr css={tr} key={item.name + idx}>
                <td css={td}>{idx + 1}</td>
                <td css={tdImage}>
                  <img css={profileImg} src={item.img} alt="profile image" />
                </td>
                <td css={td}>{item.position}</td>
                <td css={td}>{item.name}</td>
                <td css={td}>{item.email}</td>
                <td css={td}></td>
                <td css={td}>{item.isPublic ? "공개" : "비공개"}</td>
                <td css={td}>
                  <button className="editBtn" css={[tableBtn, edit]}>
                    수정
                  </button>
                </td>
                <td css={td}>
                  <button className="deleteBtn" css={[tableBtn, del]}>
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          {category !== "전체" &&
            sampleProfileData
              .filter((item) => item.position === category)
              .map((item, idx) => (
                <tr css={tr} key={item.name + idx}>
                  <td css={td}>{idx + 1}</td>
                  <td css={tdImage}>
                    <img css={profileImg} src={item.img} alt="profile image" />
                  </td>
                  <td css={td}>{item.position}</td>
                  <td css={td}>{item.name}</td>
                  <td css={td}>{item.email}</td>
                  <td css={td}></td>
                  <td css={td}>{item.isPublic ? "공개" : "비공개"}</td>
                  <td css={td}>
                    <button className="editBtn" css={[tableBtn, edit]}>
                      수정
                    </button>
                  </td>
                  <td css={td}>
                    <button className="deleteBtn" css={[tableBtn, del]}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8" css={tfoot}></td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}

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
        <span className="num">{num}</span>
        <span>명</span>
      </p>
    </div>
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

const controlCtn = css`
  width: 1543px;
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-between;
`;

const btnCtn = css`
  display: flex;
  gap: 20px;
`;

const table = css`
  width: 1543px;
  border-collapse: collapse;
  background-color: var(--mono-white);
  border-top: var(--table-bd);
  border-bottom: var(--table-bd);
  table-layout: auto;
`;

const th = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 64px;
  vertical-align: middle;
  font-weight: 700;
  line-height: 24px;
  opacity: 90%;
  text-align: center;
  &.num {
    width: 129px;
  }
  &.img {
    width: 78.79px;
  }
  &.position {
    width: 160.21px;
  }
  &.name {
    width: 120px;
  }
  &.email {
  }
  &.empty {
    width: 562px;
  }
  &.isPublic {
    width: 100px;
  }
  &.edit,
  &.delete {
    width: 100px;
  }
`;

const tr = css`
  border-bottom: var(--table-bd);
`;

const td = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  line-height: 24px;
  opacity: 90%;
  text-align: center;
  border: none;
  vertical-align: middle;
`;

const tdImage = css`
  padding: 14px 0;
`;

const profileImg = css`
  width: 78.79px;
  height: 100px;
  display: block;
  margin: 0 auto;
`;

const tableBtn = css`
  width: 60px;
  height: 44px;
  padding: 9px 16px;
  border-radius: 8px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

const edit = css`
  background-color: var(--point-color-1);
  color: var(--mono-white);
`;

const del = css`
  background-color: var(--mono-gray-normal);
  color: var(--mono-gray-txt-light);
`;

const tfoot = css`
  padding: 20px 0;
`;
