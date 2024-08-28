/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SearchBar from "@adminComponents/SearchBar";
import { ReactComponent as Add } from "@images/add-icon.svg";
import sampleData from "@data/sampleData.json";

export default function ProfessionalManage() {
  return (
    <main>
      <h2 css={pageTitle}>구성원 관리</h2>
      <section className="cardCtn" css={cardCtn}>
        <div css={card}>
          <p css={cardTitle} className="cardTitle">
            전체
          </p>
          <p css={cardContent} className="cardContent">
            <span className="num">16</span>
            <span>명</span>
          </p>
        </div>
        <div css={card} className="selected">
          <p css={cardTitle} className="cardTitle">
            대표 변호사
          </p>
          <p css={cardContent} className="cardContent">
            <span className="num">5</span>
            <span>명</span>
          </p>
        </div>
        <div css={card}>
          <p css={cardTitle} className="cardTitle">
            파트너 변호사
          </p>
          <p css={cardContent} className="cardContent">
            <span className="num">3</span>
            <span>명</span>
          </p>
        </div>
        <div css={card}>
          <p css={cardTitle} className="cardTitle">
            변호사
          </p>
          <p css={cardContent} className="cardContent">
            <span className="num">8</span>
            <span>명</span>
          </p>
        </div>
        <div css={card}>
          <p css={cardTitle} className="cardTitle">
            고문
          </p>
          <p css={cardContent} className="cardContent">
            <span className="num">-</span>
            <span>명</span>
          </p>
        </div>
      </section>
      <section className="controlCtn" css={controlCtn}>
        <div className="btnCtn" css={btnCtn}>
          <button type="button" css={btn}>
            <Add className="icon" />
            <p className="text" css={btnText}>
              등록하기
            </p>
          </button>
          <button type="button" css={btn}>
            <Add className="icon" />
            <p className="text" css={btnText}>
              순서 바꾸기
            </p>
          </button>
        </div>

        <SearchBar />
      </section>
      <table className="table" css={table}>
        <thead>
          <tr css={tr}>
            <th css={th}>번호</th>
            <th css={th}>이미지</th>
            <th css={th}>직책</th>
            <th css={th}>이름</th>
            <th css={th}>이메일</th>
            <th css={th}>공개여부</th>
            <th css={th}>수정</th>
            <th css={th}>삭제</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, idx) => (
            <tr css={tr}>
              <td css={td}>{idx + 1}</td>
              <td css={tdImage}>
                <img css={profileImg} src={item.img} alt="profile image" />
              </td>
              <td css={td}>{item.position}</td>
              <td css={td}>{item.name}</td>
              <td css={td}>{item.email}</td>
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
            <td colspan="8" css={tfoot}></td>
          </tr>
        </tfoot>
      </table>
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

const cardCtn = css`
  display: flex;
  gap: 30px;
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

const controlCtn = css`
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-between;
`;

const btnCtn = css`
  display: flex;
  gap: 20px;
`;

const btn = css`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 44px;
  background-color: var(--point-color-1);
  border-radius: 8px;
`;

const btnText = css`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: var(--mono-white);
`;

const table = css`
  width: 100%;
  border-collapse: collapse;
  background-color: var(--mono-white);
  border-top: var(--table-bd);
  border-bottom: var(--table-bd);
  table-layout: auto;
`;

const th = css`
  padding: 20px 40px;
  font-weight: 700;
  line-height: 24px;
  opacity: 90%;
  text-align: center;
`;

const tr = css`
  border-bottom: var(--table-bd);
`;

const td = css`
  padding: 14px 0;
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
