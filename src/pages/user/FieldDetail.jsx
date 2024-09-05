/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Title from "@components/user/Title";
import { StyledTitleWrap } from "@userPages/NewsLetter";
import ProfileItem from "@userComponents/ProfileItem";
import ProfileList from "@userComponents/ProfileList";
import ToggleContentBtn from "@userComponents/ToggleContentBtn";
import SlideNewsLetter from "@userComponents/SlideNewsLetter";
import workImg from "@images/field/field-work.png";
import bulletIcon from "@images/field/bullet-point.svg";
import profileData from "@data/profileData.json";

function FieldDetail() {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialVisibleCount = window.innerWidth >= 1280 ? 4 : 2;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const totalProfiles = profileData.length;

  const [activeTab, setActiveTab] = useState("소개");
  const navHeight = 64;

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "소개") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(tabName);
      if (section) {
        const offsetTop = section.offsetTop - navHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  const handleMoreClick = () => {
    if (isExpanded) {
      setVisibleCount(initialVisibleCount);
    } else {
      setVisibleCount(totalProfiles);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <StyledTitleWrap>
        <Title
          titleFirst="F"
          title={
            <>
              IELD
              <br />
              OF WORK
            </>
          }
        />
      </StyledTitleWrap>

      <nav css={nav}>
        <ul css={nav_list}>
          {["소개", "주요업무분야", "대표사례", "주요 구성원", "최근소식"].map(
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

      <section id="소개" css={work}>
        <h1>업무분야</h1>
        <img src={workImg} />
        <p>
          LawVax의 대표변호사들은 대기업 등의 분식회계, 횡령, 배임, 탈세,
          자본시장법위반 등 회계 비리와 관련된 수많은 사건의 수사나 변론에
          관여한 특별한 경력을 가지고 있습니다. 또한 LawVax는 우수한 역량을
          보유한회계·세무법인과도 업무 협력 체계를 구축해 놓고 있으며, 앞으로
          회계, 조세 분야 전문가를 추가로 영입할 계획입니다. 따라서 LawVax는
          회계, 횡령, 배임, 탈세 등 회계 관련 법률 리스크에 대하여 누구보다도
          탁월한 법적 조언을 드릴 수 있을 것입니다.
        </p>
      </section>

      <section id="주요업무분야" css={work_main}>
        <h1>주요업무분야</h1>
        <div css={work_list_wrap}>
          <div css={work_list_container}>
            <h2>업무분야 키워드 작성란</h2>
            <ul css={work_list}>
              <li>
                <img src={bulletIcon} />
                업무분야 키워드 내용 설명 작성란
              </li>
              <li>
                <img src={bulletIcon} />
                업무분야 키워드 내용 설명 작성란
              </li>
              <li>
                <img src={bulletIcon} />
                업무분야 키워드 내용 설명 작성란
              </li>
            </ul>
          </div>

          <div css={work_list_container}>
            <h2>업무분야 키워드 작성란</h2>
            <ul css={work_list}>
              <li>
                <img src={bulletIcon} />
                업무분야 키워드 내용 설명 작성란
              </li>
              <li>
                <img src={bulletIcon} />
                업무분야 키워드 내용 설명 작성란
              </li>
              <li>
                <img src={bulletIcon} />
                업무분야 키워드 내용 설명 작성란
              </li>
            </ul>
          </div>

          <div css={work_list_container}>
            <h2>업무분야 키워드 작성란</h2>
            <ul css={work_list}>
              <li>
                <img src={bulletIcon} />
                업무분야 키워드 내용 설명 작성란
              </li>
              <li>
                <img src={bulletIcon} />
                업무분야 키워드 내용 설명 작성란
              </li>
              <li>
                <img src={bulletIcon} />
                업무분야 키워드 내용 설명 작성란
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="대표사례" css={work_case}>
        <h1>대표사례</h1>
        <div css={work_case_wrap}>
          <ul css={work_list}>
            <li>
              <img src={bulletIcon} />
              대표 사례 내용 작성란
            </li>
            <li>
              <img src={bulletIcon} />
              대표 사례 내용 작성란
            </li>
            <li>
              <img src={bulletIcon} />
              대표 사례 내용 작성란
            </li>
            <li>
              <img src={bulletIcon} />
              대표 사례 내용 작성란
            </li>
            <li>
              <img src={bulletIcon} />
              대표 사례 내용 작성란
            </li>
          </ul>
        </div>
      </section>

      <section id="주요 구성원" css={members}>
        <h1>주요 구성원</h1>
        <ProfileList>
          {profileData.slice(0, visibleCount).map((profile, index) => (
            <ProfileItem key={index} profile={profile} />
          ))}
        </ProfileList>

        {totalProfiles > 2 && (
          <ToggleContentBtn onClick={handleMoreClick} isExpanded={isExpanded} />
        )}
      </section>

      <section id="최근소식" css={news}>
        <SlideNewsLetter />
      </section>
    </>
  );
}

export default FieldDetail;

const nav = css`
  border-top: 1px solid #c2c7cd;
  border-bottom: 1px solid #c2c7cd;
  padding: 24px 16px;
  box-sizing: border-box;
  height: 64px;

  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1100;
`;

const nav_list = css`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (max-width: 430px) {
    justify-content: space-between;
    gap: 10px;
  }
`;

const navItem = (isActive) => css`
  cursor: pointer;
  color: ${isActive ? "var(--point-color-2)" : "var(--mono-gray-icon"};
  font-weight: ${isActive ? "700" : "500"};
  font-size: 16px;
  line-height: 16px;

  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const work = css`
  padding: 48px 16px;

  h1 {
    font-size: 45px;
    font-weight: 500;
    line-height: 45px;
    color: var(--mono-gray-txt-dark);
  }

  img {
    width: 100%;
    height: 398px;
    padding: 24px 0;

    @media (min-width: 1024px) {
      height: 700px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
  }
`;

const work_main = css`
  height: 478px;
  background-color: #f6f8fa;
  padding: 48px 16px 28px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    color: var(--mono-black-icon-2);
  }
`;

const work_case = css`
  padding: 48px 16px;
  background-color: #f6f8fa;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    color: var(--mono-black-icon-2);
  }
`;

const work_list_wrap = css`
  padding: 36px 0 0 26px;
`;

const work_list_container = css`
  h2 {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    color: var(--mono-black-icon-2);
    margin: 0 0 20px 0;
  }
`;

const work_list = css`
  li {
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;
    color: var(--mono-gray-txt-dark);

    img {
      margin-right: 8px;
    }
  }
`;

const work_case_wrap = css`
  padding: 56px 26px 0;
`;

const members = css`
  padding: 48px 16px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    color: var(--mono-black-icon-2);
    padding: 0 0 40px;
  }
`;

const news = css`
  padding: 0 0 130px 16px;
`;
