/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import homeImg1 from "@images/home_img-1.png";
import searchIcon from "@images/search-outline.svg";
import dropDownIcon from "@images/drop-down-icon.svg";
import ellipse from "@images/news-ellipse-28.png";
import ellipseImg from "@images/news-ellipse-26.png";
import Title from "../../components/user/Title";

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div css={container}>
      <section>
        <img src={homeImg1} css={img_1} />
        <div css={overlay}>
          <div css={overlay_contents}>
            <h1>Difference. Experience.</h1>
            <p>
              법률 리스크 예방 및 대응을 위한
              <br />
              기업 금융 IT 분야 로펌
            </p>
            <div css={searchBar}>
              <div css={dropdownContainer}>
                <button css={dropdownButton} onClick={toggleDropdown}>
                  카테고리
                  <img src={dropDownIcon} css={dropdownIconStyle} />
                </button>
                {dropdownOpen && (
                  <ul css={dropdownList}>
                    <li>카테고리1</li>
                    <li>카테고리2</li>
                    <li>카테고리3</li>
                  </ul>
                )}
              </div>
              <span css={vertical_line}></span>
              <img src={searchIcon} css={search_icon} />
              <input type="text" placeholder="키워드를 입력해주세요." />
            </div>
            <div css={buttonContainer}>
              <button css={circleButton_active}>형사</button>
              <button css={circleButton}>형사</button>
              <button css={circleButton}>형사</button>
              <button css={circleButton}>형사</button>
              <button css={circleButton}>형사</button>
              <button css={circleButton}>형사</button>
              <button css={circleButton}>형사</button>
              <button css={circleButton}>형사</button>
              <button css={circleButton}>형사</button>
              <button css={circleButton}>형사</button>
            </div>
          </div>
        </div>
      </section>

      <section css={sec_2}>
        <Title subTitle={"About Us"} titleFirst="N" title="EWS" showMore />
        <div css={news_list}>
          <span css={news_item_active}>법인소식</span>
          <span css={news_item}>언론보도</span>
          <span css={news_item}>인재영입</span>
        </div>

        <div css={news_slide}>
          <div>
            <img src={ellipse} css={ellipse_1} />
            <img src={ellipseImg} css={ellipse_2} />
          </div>

          <div css={news_slide_des}>
            <div css={slide_btn}>1/ 10</div>
            <div css={slide_text}>
              중대재해처벌법 시행
              <br />
              2년,무엇이 달라졌을까
            </div>
            <div css={slide_link}>자세히 보기</div>
          </div>
        </div>
      </section>

      <section css={sec_2}>
        <Title
          showMore
          titleFirst="N"
          title={
            <>
              EWS
              <br />
              LETTER
            </>
          }
        />
      </section>

      <section css={sec_2}>
        <Title titleFirst="P" title="ROFESSIONAL" showMore />
      </section>

      <section css={sec_2}>
        <Title subTitle="Lawvax" titleFirst="M" title="AP" />
      </section>
    </div>
  );
}

export default Home;

const container = css`
  position: relative;
  width: 100%;
  max-width: 1024px;
`;

const img_1 = css`
  height: 872px;
  width: 100%;
  max-width: 1024px;
  object-fit: cover;
`;

const overlay = css`
  position: absolute;
  top: 232px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  color: white;
  text-align: center;

  h1 {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 14px;
    color: var(--point-color-3);
  }

  p {
    font-size: 28px;
    line-height: 28px;
    margin-bottom: 48px;
    color: var(--mono-white);
  }
`;

const overlay_contents = css`
  padding: 0 8px;
`;

const searchBar = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 12px 48px 12px 12px;
  position: relative;

  select,
  input {
    border: 0;
    font-size: 16px;
    background-color: transparent;
  }

  input {
    flex-grow: 1;
  }

  @media (max-width: 420px) {
    padding: 12px 0px 12px 12px;
  }
`;

const dropdownContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const dropdownButton = css`
  background: none;
  border: none;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const dropdownIconStyle = css`
  margin: 0 14px;
`;

const dropdownList = css`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100px;
  color: black;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 8px 0;
  margin: 0;

  li {
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const vertical_line = css`
  width: 2px;
  height: 24px;
  background-color: #cccccc;
  margin-right: 14px;
`;

const search_icon = css`
  margin-right: 14px;
`;

const buttonContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  background-color: white;
  padding: 26px 18px;

  @media (max-width: 420px) {
    gap: 14px;
  }
`;

const circleButton = css`
  width: 54px;
  height: 32px;
  font-size: 16px;

  border: 2px solid var(--point-color-2);
  border-radius: 20px;
  background-color: var(--mono-white);
  color: var(--point-color-2);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const circleButton_active = css`
  width: 54px;
  height: 32px;
  font-size: 16px;

  border: 2px solid var(--point-color-2);
  border-radius: 20px;
  background-color: var(--point-color-2);
  color: var(--mono-white);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const sec_2 = css`
  padding: 0 16px;
  // border: 1px solid orange;
  margin: 130px 0;
`;

const news_list = css`
  width: 264px;
  padding: 48px 0;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  margin: 0 auto;

  span {
    font-size: 16px;
  }
`;

const news_item = css`
  color: var(--mono-gray-txt-light);
`;

const news_item_active = css`
  color: var(--mono-gray-txt-dark);
  font-weight: 700;

  position: relative;
  padding-bottom: 8px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: var(--mono-gray-txt-dark);
  }
`;

const news_slide = css`
  position: relative;
  height: 179px;
  display: flex;
  justify-content: space-between;
`;

const ellipse_1 = css`
  width: 178px;
`;

const ellipse_2 = css`
  position: absolute;
  left: 66px;
  bottom: 0;
  width: 150px;
`;

const news_slide_des = css`
  width: 166px;
`;

const slide_btn = css`
  width: 111px;
  font-size: 14px;
  line-height: 28px;
  color: var(--point-color-2);
  margin: 37px 0px 16px 0px;
`;

const slide_text = css`
  margin: 0 0 26px 0;
  width: 166px;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);
`;

const slide_link = css`
  font-size: 14px;
  font-weight: 500;
  color: var(--mono-gray-txt-light);
  text-decoration: underline var(--mono-gray-txt-light);
`;
