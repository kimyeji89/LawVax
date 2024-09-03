/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "@adminComponents/Pagination";
import { Btn120, Btn36 } from "@adminComponents/Btns";
import samplePostData from "@data/samplePostData.json";
import SearchBar from "@adminComponents/SearchBar";
import { ReactComponent as Add } from "@images/add-icon.svg";
import { ReactComponent as Trash } from "@images/trash-outline.svg";
import { ReactComponent as Setting } from "@images/settings-outline.svg";

export default function PostTable({ level }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageAmt = 5;
  return (
    <section css={content}>
      <div css={top}>
        <Link
          to={
            level === "super"
              ? "/admin/super/post/register"
              : "/admin/general/post/register"
          }
        >
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
  );
}

const content = css`
  display: flex;
  flex-direction: column;
  width: 1234px;
  height: 795px;
  background-color: var(--mono-white);
  border-radius: 16px;
  padding: 24px 24px 60px 24px;
  box-sizing: border-box;
  box-shadow: var(--ctn-bd-inner);
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
  position: relative;
  &:after {
    position: absolute;
    content: "";
    top: 0px;
    left: 0;
    right: 0;
    border-top: var(--table-bd);
    height: 1px;
    width: 100%;
  }
`;

const tr = css`
  position: relative;
  background-color: var(--mono-white);
  &:hover {
    background-color: #e6eff7;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: 0px;
    left: 0;
    right: 0;
    border-bottom: var(--table-bd);
    height: 1px;
    width: 100%;
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
    color: var(--mono-gray-icon);
  }
  &.title {
    width: 771px;
    font-weight: 500;
    line-height: 24px;
    color: var(--mono-gray-txt-dark);
    opacity: 90%;
    cursor: pointer;
  }
  &.date {
    width: 111px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    opacity: 70%;
    color: var(--mono-gray-icon);
  }
  &.btns {
    padding-right: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 82px;
  }
`;
