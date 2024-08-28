/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import homeImg1 from "@images/home_img-1.png";
import searchIcon from "@images/search-outline.svg";
import searchBlack from "@images/search-outline-black.svg";
import dropDownIcon from "@images/drop-down-icon.svg";
import ellipse from "@images/news-ellipse-28.png";
import ellipseImg from "@images/news-ellipse-26.png";
import Title from "@components/user/Title";
import mapImg from "@images/map-img.png";
import deleteIcon from "@images/x-icon.svg";
import shareIcon from "@images/share-social-outline.svg";
import copyIcon from "@images/copy-outline.svg";
import receiptIcon from "@images/receipt-outline.svg";
import callIcon from "@images/call-outline.svg";
import busIcon1 from "@images/bus-outline.svg";
import busIcon2 from "@images/bus-outline-green.svg";
import subwayIcon from "@images/subway-3.svg";
import forwardIcon from "@images/chevron-forward-outline.svg";
import nextIcon from "@images/chevron-next-outline.svg";

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

        <div css={new_list_wrap}>
          <div css={news_slide}>
            <div css={new_slide_img}>
              <img src={ellipse} css={ellipse_1} />
              <img src={ellipseImg} css={ellipse_2} />
            </div>

            <div css={news_slide_des}>
              <div css={slide_btn}>
                <img src={forwardIcon} />
                <span>1/10</span>
                <img src={nextIcon} />
              </div>
              <div css={slide_text}>
                중대재해처벌법 시행
                <br />
                2년,무엇이 달라졌을까
              </div>
              <div css={slide_link}>자세히 보기</div>
            </div>
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

      <section css={sec_5}>
        <Title subTitle="Lawvax" titleFirst="M" title="AP" />
        <p css={map_text}>경로 탐색</p>
        <div css={map_search}>
          <div css={map_search_inner}>
            <img src={searchBlack} />
            <input placeholder="출발지를 입력해주세요." />
            <img src={deleteIcon} />
          </div>
        </div>
        <img src={mapImg} alt="로백스 지도 이미지" css={map_img} />

        <div css={share_btn_wrap}>
          <button css={share_btn}>
            <img src={shareIcon} />
            공유하기
          </button>
        </div>

        <div css={map_des}>
          <div css={map_address}>
            <h3>주소</h3>
            <div css={map_address_des}>
              <span>지번: 서울특별시 서초구 서초동 1596-3</span>
              <img src={copyIcon} />
            </div>
            <p>서울특별시 서초구 사임당로 18 석오빌딩 3층, 9층</p>
          </div>

          <h3>연락처</h3>
          <div css={contact}>
            <span css={contact_inner}>
              <img src={callIcon} />
              <span>대표번호</span>
              <span>02-583-6300</span>
            </span>
            <span css={contact_inner}>
              <img src={receiptIcon} />
              <span>팩스</span>
              <span>02-583-6303</span>
            </span>
          </div>

          <div css={map_transport}>
            <h3>대중교통</h3>
            <p>
              <img src={busIcon1} />
              <span>350, 742 서울교대사거리 정류장 22160</span>
            </p>
            <p>
              <img src={busIcon2} />
              서초21청호나이스 정류장 22935
            </p>
            <p>
              <img src={subwayIcon} />
              남부터미널역 6번 출구 하차
            </p>
          </div>
        </div>
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

  @media (max-width: 420px) {
    p {
      font-size: 26px;
    }
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
    select,
    input {
      font-size: 14px;
    }
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

  @media (max-width: 375px) {
    width: 50px;
    height: 30px;
    font-size: 14px;
  }
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

  @media (max-width: 375px) {
    width: 50px;
    height: 30px;
    font-size: 14px;
  }
`;

const sec_2 = css`
  padding: 0 16px;
  margin: 130px 0;
`;

const news_list = css`
  width: 264px;
  padding: 0 0 48px 0;
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

const new_list_wrap = css`
  display: flex;
  // justify-content: center;
`;

const news_slide = css`
  position: relative;
  height: 179px;
  display: flex;
`;

const new_slide_img = css`
  display: flex;
  align-items: end;
`;

const ellipse_1 = css`
  width: 178px;
  margin-right: 54px;

  @media (max-width: 420px) {
    width: 166px;
    margin-right: 44px;
  }

  @media (max-width: 375px) {
    width: 152px;
    margin-right: 36px;
  }
`;

const ellipse_2 = css`
  position: absolute;
  left: 66px;
  bottom: 0;
  width: 150px;

  @media (max-width: 420px) {
    width: 130px;
  }

  @media (max-width: 375px) {
    width: 120px;
    left: 58px;
  }
`;

const news_slide_des = css`
  width: 166px;

  @media (max-width: 420px) {
    width: 120px;
  }

  @media (max-width: 375px) {
    width: 90px;
  }
`;

const slide_btn = css`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  width: 111px;
  height: 28px;
  font-size: 14px;
  line-height: 28px;
  margin: 37px 0px 16px 0px;

  span {
    color: var(--point-color-2);
  }
`;

const slide_text = css`
  margin: 0 0 26px 0;
  width: 164px;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);

  @media (max-width: 375px) {
    width: 150px;
    font-size: 14px;
  }
`;

const slide_link = css`
  font-size: 14px;
  font-weight: 500;
  color: var(--mono-gray-txt-light);
  text-decoration: underline var(--mono-gray-txt-light);
`;

const sec_5 = css`
  padding: 0 16px;
  margin: 130px 0;
`;

const map_text = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: var(--mono-gray-txt-dark);
  padding: 0 0 12px 0;
`;

const map_search = css`
  width: 100%;
  height: 48px;
  border: 2px solid var(--mono-gray-txt-light);
  margin: 0 0 16px 0;
  box-sizing: border-box;
`;

const map_search_inner = css`
  height: 24px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;

  img {
    height: 24px;
  }

  input {
    width: 100%;
    border: 0;
    font-size: 16px;
  }

  input::placeholder {
    color: var(--mono-gray-txt-light);
  }
`;

const map_img = css`
  width: 100%;
`;

const share_btn_wrap = css`
  display: flex;
  justify-content: end;
`;

const share_btn = css`
  margin: 24px 0;
  width: 106px;
  height: 40px;
  border: 2px solid var(--point-color-2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--point-color-2);
  background-color: var(--mono-white);
  cursor: pointer;
  margin-right: 0;
`;

const map_des = css`
  color: var(--mono-gray-txt-dark);

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 6px 0;
  }

  p {
    font-size: 16px;
    height: 24px;
  }
`;

const map_address = css`
  margin: 0 0 12px 0;
`;

const map_address_des = css`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 0 0 6px 0;

  span {
    margin: 0 12px 0px 0;
    color: var(--mono-gray-txt-light);
    font-size: 16px;
    font-weight: 400;
  }
`;

const contact = css`
  display: flex;
  align-items: center;
  margin: 0 0 12px 0;

  img {
    height: 24px;
  }

  @media (max-width: 420px) {
    display: block;
    margin: 0 0 12px 0;

    & > span {
      margin-bottom: 4px;
    }
  }
`;

const contact_inner = css`
  display: flex;
  align-items: center;
  margin: 0 12px 0 0;
  gap: 8px;
`;

const map_transport = css`
  p {
    display: flex;
    align-items: center;
    margin: 0 0 6px 0;
  }
`;
