/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Pagination from "@adminComponents/Pagination";
import sampleProfileData from "@data/sampleProfileData.json";
import { Link } from "react-router-dom";

export default function MemberTable({ level, category }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageAmt = 5;
  return (
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
            공개유무
          </th>
          {level === "super" && (
            <>
              <th css={th} className="edit">
                수정
              </th>
              <th css={th} className="delete">
                삭제
              </th>
            </>
          )}
          {level === "general" && (
            <th css={th} className="view">
              보기
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {category === "전체" &&
          sampleProfileData.map((item, idx) => (
            <tr css={tr} key={item.name + idx}>
              <td css={td}>{idx + 1}</td>
              <td css={tdImage}>
                <img css={profileImg} src={item.image} alt="profile" />
              </td>
              <td css={td}>{item.position}</td>
              <td css={td}>{item.name}</td>
              <td css={td}>{item.email}</td>
              <td css={td}></td>
              <td css={td}>{item.isPublic ? "공개" : "비공개"}</td>
              {level === "super" && (
                <>
                  <td css={td}>
                    <button className="editBtn" css={[tableBtn, blue]}>
                      수정
                    </button>
                  </td>
                  <td css={td}>
                    <button className="deleteBtn" css={[tableBtn, gray]}>
                      삭제
                    </button>
                  </td>
                </>
              )}
              {level === "general" && (
                <td css={td}>
                  <Link to="/admin/general/view">
                    <button className="editBtn" css={[tableBtn, blue]}>
                      보기
                    </button>
                  </Link>
                </td>
              )}
            </tr>
          ))}
        {category !== "전체" &&
          sampleProfileData
            .filter((item) => item.position === category)
            .map((item, idx) => (
              <tr css={tr} key={item.name + idx}>
                <td css={td}>{idx + 1}</td>
                <td css={tdImage}>
                  <img css={profileImg} src={item.image} alt="profile" />
                </td>
                <td css={td}>{item.position}</td>
                <td css={td}>{item.name}</td>
                <td css={td}>{item.email}</td>
                <td css={td}></td>
                <td css={td}>{item.isPublic ? "공개" : "비공개"}</td>
                {level === "super" && (
                  <>
                    <td css={td}>
                      <button className="editBtn" css={[tableBtn, blue]}>
                        수정
                      </button>
                    </td>
                    <td css={td}>
                      <button className="deleteBtn" css={[tableBtn, gray]}>
                        삭제
                      </button>
                    </td>
                  </>
                )}
                {level === "general" && (
                  <td css={td}>
                    <Link to="/admin/general/view">
                      <button className="editBtn" css={[tableBtn, blue]}>
                        보기
                      </button>
                    </Link>
                  </td>
                )}
              </tr>
            ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="8" css={level === "super" ? tfootSuper : tfootGeneral}>
            {level === "general" && (
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageAmt={pageAmt}
              />
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
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
  &.delete,
  &.view {
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

const blue = css`
  background-color: var(--point-color-1);
  color: var(--mono-white);
`;

const gray = css`
  background-color: var(--mono-gray-normal);
  color: var(--mono-gray-txt-light);
`;

const tfootSuper = css`
  padding: 20px 0;
`;

const tfootGeneral = css`
  padding: 40px 0 60px 0;
`;
