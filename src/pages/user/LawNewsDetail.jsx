/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Title from "@components/user/Title";
import { StyledTitleWrap } from "./NewsLetter";
import NewsCategory from "@userComponents/NewsCategory";
import NewsItem from "@userComponents/NewsItem";
import newsImg1 from "@images/news/news-card-1.png";
import newsImg2 from "@images/news/news-card-2.png";
import newsImg3 from "@images/news/news-card-3.png";
import newsImg4 from "@images/news/news-card-4.png";
import newsImg5 from "@images/news/news-card-5.png";
import { ReactComponent as Share } from "@images/share-2.svg";
import { ReactComponent as Printer } from "@images/printer.svg";
import { ReactComponent as List } from "@images/list.svg";
import { Link } from "react-router-dom";

const newsItems = [
  {
    image: newsImg2,
    title: `"경영진 책임 강화 추세…기업 위한 '법률 백신'될 것"`,
    date: "2024.06.25",
    link: "/lawNews/detail",
  },
  {
    image: newsImg3,
    title: `뉴스핌 창간 21주년 기념·제12회 서울이코노믹포럼 참석 인사`,
    date: "2024.06.26",
    link: "/lawNews/detail",
  },
  {
    image: newsImg4,
    title: `AI 활용 극대화할 “데이터 관리·인사이트·보안” 혁신 전략 제시…”DISS 2024” 3월 21일 개최`,
    date: "2024.06.27",
    link: "/lawNews/detail",
  },
  {
    image: newsImg5,
    title: `기업감사 시장 뛰어든 로백스…"엄격한 내부통제 더 중요해져"`,
    date: "2024.06.27",
    link: "/lawNews/detail",
  },
];

function LawNewsDetail() {
  return (
    <>
      <StyledTitleWrap>
        <Title subTitle={"About Us"} titleFirst="N" title="EWS" />
      </StyledTitleWrap>

      <NewsCategory enableRouting={true} />

      <div css={news_wrap}>
        <div css={news_content}>
          <h1>[소식]글로벌 항공우주산업 학회 세미나 개최</h1>
          <div css={news_sub}>
            <span>2024.06.24</span>
            <Share alt="share icon" />
            <Printer alt="printer icon" />
          </div>

          <div css={news_img_wrap}>
            <img src={newsImg1} css={news_img} />
            <p>
              21일 항공박물관에서 열린 글로벌항공우주산업학회 학술 세미나
              참석자들이 기념사진을 찍고 있다. &lt;글로벌항공우주산업학회&gt;
            </p>
          </div>

          <p css={news_text}>
            글로벌항공우주산업학회(회장 신동춘)는 21일 서울시 강서구
            국립항공박물관에서 제14회 학술세미나를 개최했다.
            <br />
            ‘변동하는 환경에 대응하는 항공우주산업의 약진’을 주제로 열린 이번
            세미나에는 신동춘 학회장의 개회사에 이어 김영국 국토교통부
            항공정책실장(대행), 이대성 항공안전기술원장, 윤우 공군발전협회
            항공우주력연구원장, 박정이 밀리테크협회 회장, 정연석 항공정책연구소
            이사장의 축사가 이어졌다.
            <br />
            이번 세미나는 2개 세션으로 진행됐다.
            <br /> <br /> <br /> <br />
            1세션은 ‘항공시장 및 산업의 변화와 전망’을 다뤘다. 세종대 황용식
            교수가 ‘양대 항공사 합병에 따른 항공시장 전망’, 인천공항공사 김영훈
            팀장이 ‘인천국제공항 첨단복합단지 조성과MRO(항공정비) 발전’,
            한화시스템 강동관 부장이 ‘UAM 상용화 등 앞으로의 과제’를 발표했다.
            <br /> <br /> <br />
            황용식 세종대 교수는 “대한항공과 아시아나 합병의 긍정·부정적 측면이
            모두 있지만 현재 합병 이외에 다른 선택지가 없다”는 점을 강조했다.
            <br /> 김영훈 팀장은 “세계적인 수준의 MRO를 갖춰 해외정비로 인한
            외화유출을 막고 외국 항공사들이 대거 인천공항에서 정비를 할 수 있는
            체제를 갖출 계획”이라고 말했다. <br />
            국토교통부 조재익 도심항공교통정책 사무관, 한국항공정책연구소 최성호
            소장, 법무법인 로백스(LawVax) 한세희 변호사, 건국대 김상호 교수가
            토론에 참여했다. <br /> <br /> <br /> 2세션 주제는 ‘우주산업과
            우주안보 역량 강화’다. 과학기술정책연구원 안형준 연구위원이
            ‘우주항공청 시대 개막, 국가우주정책 기대와 과제’ , 한화시스템 최성환
            전문위원의 ‘우주항공청 개청과 국방우주산업의 발전방향’ , 공군본부
            우주센터 임진구 소령이 ‘우주 안보를 위한 공군의 역할’을 발표하고
            토론이 이어졌다. <br /> <br /> <br />
            안형준 과학기술정책연구원 연구위원은 우주항공청 개청 의미와
            우주개발, 국제 우주 협력 등 향후 과제를, 한화시스템 최성환
            전문위원은 우주 안보를 위해 민간과 군이 우주산업 생태계를 구축해
            적의 도발을 분쇄하는 시스템 강화가 필요하다고 강조했다.
          </p>
        </div>

        <div css={view_list_wrap}>
          <div></div>
          <div css={view_list}>
            <List alt="list icon" />
            <Link to={"/lawNews"}>
              <span>목록보기</span>
            </Link>
          </div>
        </div>

        <div css={news_more}>
          <p>관련된 소식</p>
        </div>
        {newsItems.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            date={news.date}
            link={news.link}
          />
        ))}
      </div>
    </>
  );
}

export default LawNewsDetail;

const news_wrap = css`
  padding: 0 16px;
  margin: 0 0 106px 0;
`;

const news_content = css`
  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    padding: 0 0 14px 0;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: var(--mono-gray-txt-light);
  }
`;

const news_img_wrap = css`
  padding: 0 0 48px 0;

  img {
    padding: 0 0 8px 0;
  }

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: var(--mono-gray-icon);

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const news_img = css`
  width: 100%;
  height: 160px;

  @media (min-width: 760px) {
    height: 400px;
  }
`;

const news_text = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);
  padding: 0 0 48px 0;
  border-bottom: 1px solid var(--mono-gray-line-1);
`;

const news_sub = css`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 0 28px; 0
`;

const view_list_wrap = css`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 84px 0;
`;

const view_list = css`
  width: 82px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    color: var(--mono-gray-icon);
    text-decoration: underline;
  }
`;

const news_more = css`
  height: 40px;
  border-bottom: 1px solid var(--mono-gray-line-1);
  margin: 0 0 24px 0;

  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: var(--mono-gray-txt-dark);
`;
