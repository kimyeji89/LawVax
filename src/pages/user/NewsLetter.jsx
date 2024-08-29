/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Title from "@components/user/Title";
import NewsSlide from "../../components/user/NewsSlide";
import SlideCard from "../../components/user/SlideCard";
import { slideData } from "./Home";
import NewsItem from "../../components/user/NewsItem";
import Pagination from "./Pagination";

const newsItems = [
  {
    title: `AI 활용 극대화할 “데이터 관리·인사이트·보안” 혁신 전략 제시…”DISS 2024” 3월 21일 개최`,
    date: "2024.06.24",
    link: "/newsLetter",
  },
  {
    title: `기업감사 시장 뛰어든 로백스…"엄격한 내부통제 더 중요해져"`,
    date: "2024.06.25",
    link: "/newsLetter",
  },
  {
    title: `김후곤 "KT에 준법경영 자리잡도록 역할을 충실히 하겠다"`,
    date: "2024.06.26",
    link: "/newsLetter",
  },
  {
    title: `김후곤 "KT에 준법경영 자리잡도록 역할을 충실히 하겠다"`,
    date: "2024.06.27",
    link: "/newsLetter",
  },
];

function NewLetter() {
  return (
    <>
      <StyledTitleWrap>
        <Title
          titleFirst="N"
          title={
            <>
              EWS
              <br />
              LETTER
            </>
          }
        />
      </StyledTitleWrap>

      <div css={content_wrap}>
        <NewsSlide>
          {slideData.map((slide, index) => (
            <SlideCard
              key={index}
              category={slide.category}
              title={slide.title}
              date={slide.date}
            />
          ))}
        </NewsSlide>

        <hr css={divide_line} />

        {newsItems.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            date={news.date}
            link={news.link}
          />
        ))}

        <Pagination />
      </div>
    </>
  );
}

export default NewLetter;

export const StyledTitleWrap = styled.div`
  padding: 172px 16px 0 16px;
`;

const content_wrap = css`
  padding: 0 16px;
`;

const divide_line = css`
  margin: 48px 0;
  width: 100%;
  height: 3px;
  background-color: #7e7e7e;
  border: 0;
`;
