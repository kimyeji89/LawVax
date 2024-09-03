/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Title from "@components/user/Title";
import NewsSlide from "@userComponents/NewsSlide";
import SlideCard from "@userComponents/SlideCard";
import newsSlideData from "@data/newsSlideData.json";
import newsItems from "@data/newsItems.json";
import NewsItem from "@userComponents//NewsItem";
import Pagination from "@userComponents/Pagination";

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
          {newsSlideData.map((slide, index) => (
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
