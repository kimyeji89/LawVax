/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import useLocationControl from "@hooks/useLocationControl";

export default function AsideMenu({ level }) {
  const { checkLocation } = useLocationControl();
  return (
    <aside css={aside}>
      <p css={asideTitle}>게시글</p>
      <div css={menuCtn}>
        <ul css={menuCtn}>
          <AsideMenuBtn
            title="전체보기"
            num={"1253"}
            selected={checkLocation([
              "/admin/super/post",
              "/admin/general/post",
            ])}
            link="/admin/super/post"
          />
          {level === "general" && (
            <AsideMenuBtn
              title="즐겨찾기"
              num={"000"}
              selected={checkLocation([
                "/admin/super/post",
                "/admin/general/post",
              ])}
              link="/admin/super/post"
            />
          )}
        </ul>
        <span css={divider}></span>
        <ul css={menuCtn}>
          <AsideMenuBtn title="뉴스레터" num={"00"} selected={false} />
        </ul>
        <span css={divider}></span>
        <ul css={menuCtn}>
          {level === "super" && (
            <AsideMenuBtn title="소식" num={"00"} selected={false} />
          )}
          <AsideMenuBtn title="언론보도" num={"00"} selected={false} />
          <AsideMenuBtn title="인재영입" num={"00"} selected={false} />
          <AsideMenuBtn
            title="내가 쓴 글"
            num={"00"}
            selected={checkLocation(["/admin/general/post/my"])}
            link="/admin/general/post/my"
          />
          <AsideMenuBtn title="비공개" num={"00"} selected={false} />
        </ul>
      </div>
    </aside>
  );
}

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
        id={title === "전체보기" ? "all" : ""}
        className={selected ? "asideMenuBtns selected" : "asideMenuBtns"}
        onClick={handleStyle}
      >
        <p className="title">{title}</p>
        <p className="num">{num}</p>
      </li>
    </Link>
  );
}

const menuCtn = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  &#all .title {
    font-weight: 700;
  }
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
  box-shadow: var(--ctn-bd-inner);
`;

const divider = css`
  display: block;
  width: 100%;
  height: 0.6px;
  padding: 0.2px 0;
  background-color: var(--mono-gray-line-3);
`;
const asideTitle = css`
  font-family: Nunito Sans;
  font-weight: 700;
  line-height: 22px;
  color: #202224;
`;
