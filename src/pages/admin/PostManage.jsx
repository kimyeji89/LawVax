/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SearchBar from "@adminComponents/SearchBar";
import { Link } from "react-router-dom";

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
        <section css={content}></section>
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
  padding: 24px;
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

const content = css``;

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
