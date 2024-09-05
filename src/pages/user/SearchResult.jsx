/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import TitleSub from "@userComponents/TitleSub";
import ProfileItem from "@userComponents/ProfileItem";
import ToggleContentBtn from "@userComponents/ToggleContentBtn";
import profileData from "@data/profileData.json";
import NewsPreview from "@userComponents/NewsPreview";
import newsData from "@data/newsData.json";
import SlideNewsLetter from "@userComponents/SlideNewsLetter";

function SearchResult() {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialVisibleCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const totalProfiles = profileData.length;

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
      <section css={sec_member}>
        <TitleSub title="구성원" />

        <div css={profile_container}>
          {profileData.slice(0, visibleCount).map((profile, index) => (
            <ProfileItem key={index} profile={profile} />
          ))}
        </div>

        {totalProfiles > 6 && (
          <ToggleContentBtn onClick={handleMoreClick} isExpanded={isExpanded} />
        )}
      </section>

      <section css={sec_field}>
        <TitleSub title="업무분야" />
        <hr css={hr} />
        <ul css={field_list}>
          {[...Array(15)].map((_, index) => (
            <li key={index}>업무분야</li>
          ))}
        </ul>
      </section>

      <section css={sec_law}>
        <TitleSub title="법인소식" showMore />
        <hr css={hr} />
        {newsData.slice(0, 3).map((news, index) => (
          <NewsPreview title={news.title} date={news.date} text={news.text} />
        ))}
      </section>

      <section css={sec_news}>
        <TitleSub title="언론보도" showMore />
        <hr css={hr} />
        {newsData.slice(0, 3).map((news, index) => (
          <NewsPreview title={news.title} date={news.date} text={news.text} />
        ))}
      </section>

      <section css={sec_newsletter}>
        <TitleSub title="뉴스레터" showMore />
        <hr css={hr_2} />
      </section>
      <div css={slide_wrap}>
        <SlideNewsLetter />
      </div>
    </>
  );
}

export default SearchResult;

const profile_container = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 24px 0 0 0;
  justify-items: center;
  align-items: center;
  gap: 24px;

  @media (min-width: 765px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const sec_member = css`
  padding: 172px 16px 64px;
`;

const sec_field = css`
  padding: 24px 16px;
  background-color: #f9f9f9;
`;

const hr = css`
  margin: 0 0 24px 0;
  border: none;
  background-color: #dbdbdb;
  height: 1px;
`;

const hr_2 = css`
  padding: 0 16px 0 0;
  margin: 0 0 24px 0;
  border: none;
  background-color: #dbdbdb;
  height: 1px;
`;

const field_list = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  list-style-type: disc;
  padding-left: 20px;

  li {
    padding: 0 0 0 2px;
    font-size: 14px;
    line-height: 20px;
    color: #666666;
  }

  @media (max-width: 380px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 330px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const sec_law = css`
  padding: 48px 16px 24px;
`;

const sec_news = css`
  padding: 24px 16px;
  background-color: #f9f9f9;
`;

const sec_newsletter = css`
  padding: 48px 16px 0 16px;
`;

const slide_wrap = css`
  padding: 0 0 130px 16px;
`;
