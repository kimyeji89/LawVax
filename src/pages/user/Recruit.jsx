/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Title from "@components/user/Title";
import { StyledTitleWrap } from "./NewsLetter";
import NewsCategory from "@userComponents/NewsCategory";
import Pagination from "@userComponents/Pagination";
import newsImg1 from "@images/news/news-card-1.png";
import newsImg2 from "@images/news/news-card-2.png";
import newsImg3 from "@images/news/news-card-3.png";
import newsImg4 from "@images/news/news-card-4.png";
import newsImg5 from "@images/news/news-card-5.png";
import NewsItem from "@userComponents//NewsItem";

const newsItems = [
  {
    image: newsImg1,
    title: `[인재]글로벌 항공우주산업 학회 세미나 개최`,
    date: "2024.06.24",
    link: "/lawNews/detail",
  },
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

function Recruit() {
  return (
    <>
      <StyledTitleWrap>
        <Title subTitle={"About Us"} titleFirst="N" title="EWS" />
      </StyledTitleWrap>

      <NewsCategory enableRouting={true} />

      <div css={news_wrap}>
        {newsItems.map((news, index) => (
          <NewsItem
            key={index}
            imgSrc={news.image}
            title={news.title}
            date={news.date}
            link={news.link}
          />
        ))}
      </div>

      <Pagination />
    </>
  );
}

export default Recruit;

const news_wrap = css`
  padding: 0 16px;
`;
