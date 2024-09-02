/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { StyledTitleWrap } from "./NewsLetter";
import saveIcon from "@images/save.svg";
import uniIcon from "@images/uni.svg";
import lawyerImg from "@images/lawyer-img2.png";

function ProfessionalDetail() {
  return (
    <>
      <div css={profile_main}>
        <div css={main_1}>
          <div>
            <h1>
              김기동<span>대표 변호사</span>
            </h1>
            <p css={main_1_uni}>
              <img src={uniIcon} />
              서울대 법대
            </p>
          </div>
          <button css={save_btn}>
            <img src={saveIcon} />
            상세정보 저장하기
          </button>
        </div>

        <div css={main_2}>
          <div>
            <div>
              <div css={h2_wrap}>
                <div css={point} />
                <h2>주요경력</h2>
              </div>

              <div css={career_list}>
                <p>서울대 법대</p>
                <p>부산지검장</p>
                <p>대검 부패범죄특별수사단 단장</p>
              </div>
            </div>

            <div>
              <div css={h2_wrap}>
                <div css={point} />
                <h2>업무분야</h2>
              </div>
              <div css={button_wrap}>
                <button>금융</button>
                <button>가상자산</button>
                <button>형사</button>
                <button>기업감사</button>
              </div>
            </div>
          </div>
          <img src={lawyerImg} />
        </div>

        <div css={introduce}>
          <p>
            검찰 근무 및 변호사 활동 중 공직자 비리, 기업비리 관련 수사 및 변호
            활동을 주로 하였습니다. 최근에는 기업 감사 지원 업무를 수행하여 이
            부분에 많은 경험과 역량이 쌓였습니다. 앞으로 법무법인 로백스의 다른
            변호사님들과 협업하여 보다 적극적으로 규모있는 활동을 하겠습니다.
          </p>
        </div>
      </div>

      <div>네비</div>

      <div>주요처리사례</div>
      <div>학력</div>
      <div>경력</div>
      <div>저서/활동/기타</div>
    </>
  );
}

export default ProfessionalDetail;

const profile_main = css`
  // border: 1px solid red;
  padding: 172px 16px;
`;

const main_1 = css`
  // border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  padding: 0 0 46px 11px;

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: var(--mono-gray-txt-dark);

    span {
      font-size: 16px;
      font-weight: 500;
      color: var(--mono-gray-txt-light);
      margin: 0 0 0 8px;
    }
  }
`;

const save_btn = css`
  width: 170px;
  height: 40px;
  padding: 12px;
  border: 1px solid var(--point-color-2);
  background-color: var(--mono-white);
  display: flex;
  justify-content: space-between;
  align-contents: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: var(--point-color-2);

  img {
    width: 16px;
    height: 16px;
  }
`;

const main_1_uni = css`
  margin: 14px 0 0 0;
  display: flex;
  align-items: center;
  padding: 0;

  img {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }

  font-size: 14px;
  font-weight: 500;
  color: #666666;
`;

const main_2 = css`
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
  border-bottom: 2px solid #7e7e7e;

  h2 {
    font-size: 16px;
    font-weight: 500;
    color: var(--mono-gray-txt-dark);
    display: inline;
  }

  img {
    width: 193px;
    height: 300px;
  }
`;

const button_wrap = css`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0 0 0 11px;

  button {
    padding: 12px;
    border: 1px solid #666666;
    background-color: var(--mono-white);

    font-size: 14px;
    font-weight: 500;
    color: #666666;
  }
`;

const point = css`
  display: inline-block;
  width: 3px;
  height: 16px;
  background-color: var(--point-color-2);
`;

const h2_wrap = css`
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
`;

const career_list = css`
  margin: 0 0 24px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 14px;
    font-weight: 500;
    color: #666666;
  }
`;

const introduce = css`
  // border: 1px solid green;
  padding: 30px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #666666;
`;
