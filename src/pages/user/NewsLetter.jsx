/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Title from "@components/user/Title";
import NewsItem from "@userComponents/NewsItem";
import Pagination from "@userComponents/Pagination";
import SlideNewsLetter from "@userComponents/SlideNewsLetter";
import newsItems from "@data/newsItems.json";

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
        <SlideNewsLetter />
        <div css={innerCtn}>
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
      </div>
    </>
  );
}

export default NewLetter;

export const StyledTitleWrap = styled.div`
  padding: 172px 16px 0 16px;
`;

const content_wrap = css`
  padding-left: 16px;
`;

const innerCtn = css`
  padding-right: 16px;
`;

const divide_line = css`
  margin: 48px 0;
  width: 100%;
  height: 3px;
  background-color: #7e7e7e;
  border: 0;
`;
