/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import SearchBar from "@adminComponents/SearchBar";
import { Btn120, Btn36 } from "@adminComponents/Btns";
import samplePostData from "@data/samplePostData.json";
import Pagination from "@adminComponents/Pagination";
import { ReactComponent as Add } from "@images/add-icon.svg";
import { ReactComponent as Trash } from "@images/trash-outline.svg";
import { ReactComponent as Setting } from "@images/settings-outline.svg";
import { useState } from "react";

function AsideMenuBtn({ title, num, selected, link }) {
  function handleStyle(e) {
    document.querySelectorAll(".asideMenuBtns").forEach((item) => {
      item.classList.remove("selected");
    });
    e.currentTarget.classList.add("selected");
  }
  return (
    <Link to={link}>
      <li
        css={asideMenuBtn}
        className={selected ? "asideMenuBtns selected" : "asideMenuBtns"}
        onClick={handleStyle}
      >
        <p>{title}</p>
        <p>{num === 0 ? "00" : num.toLocaleString()}</p>
      </li>
    </Link>
  );
}

export default function PostManage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageAmt = 5;
  return (
    <main>
      <h2 className="admin-pageTitle">게시글 관리</h2>
      <div css={ctn}>
        <aside css={aside}>
          <p css={asideTitle}>게시글</p>
          <div css={menuCtn}>
            <ul css={menuCtn}>
              <AsideMenuBtn
                title="전체보기"
                num={1253}
                selected={true}
                link="/admin/post"
              />
            </ul>
            <span css={divider}></span>
            <ul css={menuCtn}>
              <AsideMenuBtn
                title="뉴스레터"
                num={0}
                selected={false}
                link="/admin/post"
              />
            </ul>
            <span css={divider}></span>
            <ul css={menuCtn}>
              <AsideMenuBtn
                title="소식"
                num={0}
                selected={false}
                link="/admin/post"
              />
              <AsideMenuBtn
                title="언론보도"
                num={0}
                selected={false}
                link="/admin/post"
              />
              <AsideMenuBtn
                title="인재영입"
                num={0}
                selected={false}
                link="/admin/post"
              />
              <AsideMenuBtn
                title="내가 쓴 글"
                num={0}
                selected={false}
                link="/admin/post"
              />
              <AsideMenuBtn
                title="비공개"
                num={0}
                selected={false}
                link="/admin/post"
              />
            </ul>
          </div>
        </aside>
        <section css={content}>
          <div css={top}>
            <Link to="/admin/post/register">
              <Btn120 text="글쓰기">
                <Add className="icon" />
              </Btn120>
            </Link>
            <SearchBar />
          </div>
          <table css={table}>
            <thead css={thead}>
              <tr>
                <th>작성자</th>
                <th>제목</th>
                <th>작성일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody css={tbody}>
              {samplePostData.map((item, idx) => (
                <tr css={tr} key={item.name + item.title + item.date + idx}>
                  <td className="name" css={td}>
                    {item.name}
                  </td>
                  <td className="title" css={td}>
                    {item.title}
                  </td>
                  <td className="date" css={td}>
                    {item.date}
                  </td>
                  <td className="btns" css={td}>
                    <Btn36>
                      <Setting />
                    </Btn36>
                    <Btn36>
                      <Trash />
                    </Btn36>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageAmt={pageAmt}
          />
        </section>
      </div>
    </main>
  );
}

const ctn = css`
  display: flex;
  gap: 30px;
`;

const aside = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 286px;
  height: 795px;
  padding: 24px 24px 60px 24px;
  box-sizing: border-box;
  background-color: var(--mono-white);
  border-radius: 16px;
  box-shadow: 0 0 0 0.3px #b9b9b9 inset;
`;

const divider = css`
  display: block;
  width: 100%;
  height: 0.6px;
  padding: 0.2px 0;
  background-color: #e0e0e0;
`;

const content = css`
  display: flex;
  flex-direction: column;
  width: 1234px;
  height: 795px;
  background-color: var(--mono-white);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 0 0 0.3px #b9b9b9 inset;
`;

const menuCtn = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const asideTitle = css`
  font-family: Nunito Sans;
  font-weight: 700;
  line-height: 22px;
`;

const asideMenuBtn = css`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
  box-sizing: border-box;
  width: 238px;
  height: 44px;
  border-radius: 6px;

  background-color: var(--mono-white);
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: var(--mono-gray-txt-dark);
  }
  &.selected,
  &:hover {
    background-color: var(--point-color-1);
    p {
      color: var(--mono-white);
    }
  }
`;

const top = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const table = css`
  margin-bottom: 40px;
`;

const thead = css`
  display: none;
`;

const tbody = css`
  border-top: 1px solid #d5d5d5;
`;

const tr = css`
  border-bottom: 1px solid #d5d5d5;
  background-color: var(--mono-white);

  &:hover {
    background-color: #e6eff7;
  }
`;

const td = css`
  height: 64px;
  text-align: left;
  vertical-align: middle;
  &.name {
    padding-left: 24px;
    width: 177px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #666666;
  }
  &.title {
    width: 771px;
    font-weight: 500;
    line-height: 24px;
    color: #333333;
    opacity: 90%;
    cursor: pointer;
  }
  &.date {
    width: 111px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    opacity: 70%;
    color: #666666;
  }
  &.btns {
    padding-right: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 82px;
  }
`;

const pagination = css``;
