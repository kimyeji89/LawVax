/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TitleSub from "@userComponents/TitleSub";
import newsData from "@data/newsData.json";
import NewsPreview from "@userComponents/NewsPreview";
import Pagination from "@userComponents/Pagination";

function SearchResultDetail() {
  return (
    <div css={page_wrap}>
      <TitleSub title="법인소식" />
      {newsData.slice(0, 7).map((news, index) => (
        <NewsPreview title={news.title} date={news.date} text={news.text} />
      ))}

      <Pagination />
    </div>
  );
}

export default SearchResultDetail;

const page_wrap = css`
  padding: 172px 16px 0;
`;
