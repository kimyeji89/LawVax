/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import saveIcon from "@images/save.svg";
import uniIcon from "@images/uni.svg";
import lawyerImg from "@images/lawyer-img2.png";
import { useState } from "react";
import ProfileSection from "@userComponents/ProfileSection";
import profileData from "@data/professionalDetail.json";

function ProfessionalDetail() {
  const [activeTab, setActiveTab] = useState("주요 처리사례");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const section = document.getElementById(tabName);
    if (section) {
      const offsetTop = section.offsetTop - 25;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

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

      <nav css={nav}>
        <ul>
          {["주요 처리사례", "학력", "경력", "저서/활동/기타"].map(
            (tabName) => (
              <li
                key={tabName}
                css={navItem(activeTab === tabName)}
                onClick={() => handleTabClick(tabName)}
              >
                {tabName}
              </li>
            )
          )}
        </ul>
      </nav>

      <div css={section_wrap}>
        <ProfileSection title="주요 처리사례" data={profileData.case} />
        <ProfileSection title="학력" data={profileData.edu} />
        <ProfileSection title="경력" data={profileData.career} />
        <ProfileSection title="저서/활동/기타" data={profileData.etc} />
      </div>
    </>
  );
}

export default ProfessionalDetail;

const profile_main = css`
  // border: 1px solid red;
  padding: 172px 16px 0;
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

      @media (min-width: 360px) {
        font-size: 12px;
      }
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

  @media (min-width: 360px) {
    width: 146px;
    height: 40px;
    // padding: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
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

  @media (max-width: 380px) {
    img {
      width: 176px;
      height: 280px;
    }
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

    @media (max-width: 380px) {
      padding: 10px;
      font-size: 12px;
    }
  }

  @media (min-width: 525px) {
    width: 50%;
]
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

  @media (min-width: 360px) {
    p {
      font-size: 13px;
    }
  }
`;

const introduce = css`
  // border: 1px solid green;
  padding: 30px 0;
  border-bottom: 2px solid #7e7e7e;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #666666;
  }
`;

const nav = css`
  padding: 0 16px;

  ul {
    padding: 24px 16px;
    border-bottom: 2px solid #dbdbdb;
    display: flex;
    justify-content: space-between;

    // li {
    //   font-size: 16px;
    //   font-weight: 500;
    //   color: #666666;
    // }
  }
`;

const navItem = (isActive) => css`
  cursor: pointer;
  color: ${isActive ? "var(--point-color-2)" : "#666666"};
  font-weight: ${isActive ? "700" : "500"};
  font-size: 16px;
  line-height: 16px;

  // @media (max-width: 430px) {
  //   font-size: 14px;
  // }
`;

const section_wrap = css`
  margin-bottom: 130px;
`;
