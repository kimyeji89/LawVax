/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { Btn120 } from "@adminComponents/Btns";
import SearchBar from "@adminComponents/SearchBar";
import { ReactComponent as Add } from "@images/add-icon.svg";
import { ReactComponent as Change } from "@images/repeat-outline.svg";

export default function MemberControl({ level, onChange, isChange }) {
  return (
    <section
      className="controlCtn"
      css={level === "super" ? controlCtnSuper : controlCtnGeneral}
    >
      {level === "super" && (
        <div className="btnCtn" css={btnCtn}>
          <Link to="/admin/super/member/register">
            <Btn120 text="등록하기">
              <Add className="icon" />
            </Btn120>
          </Link>
          <Btn120 text="순서 바꾸기" event={onChange} id="change">
            <Change className="icon" />
          </Btn120>
          {isChange && <Btn120 text="적용하기" event={onChange}></Btn120>}
        </div>
      )}
      <SearchBar />
    </section>
  );
}

const controlCtnSuper = css`
  width: 1543px;
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-between;
`;

const controlCtnGeneral = css`
  width: 1543px;
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: flex-end;
`;

const btnCtn = css`
  display: flex;
  gap: 20px;
`;
