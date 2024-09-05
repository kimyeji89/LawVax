/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Title from "@userComponents/Title";
import { StyledTitleWrap } from "./NewsLetter";
import SearchBar from "@userComponents/SearchBar";
import ProfileItem from "@userComponents/ProfileItem";
import profileData from "@data/profileData.json";
import forwardIcon from "@images/chevron-forward-blue.svg";
import nextIcon from "@images/chevron-next-blue.svg";

function ProfessionalSearch() {
  return (
    <>
      <StyledTitleWrap>
        <Title titleFirst="P" title="ROFESSIONAL " />
      </StyledTitleWrap>

      <SearchBar />

      <div css={profile_container}>
        {profileData.map((profile, index) => (
          <div key={index} css={profile_item_wrap}>
            <div css={gray_back}></div>
            <ProfileItem profile={profile} />
          </div>
        ))}
      </div>

      <div css={pagination_wrap}>
        <button>
          <img src={forwardIcon} />
        </button>

        <span css={page_active}>1</span>
        <span css={divide_line} />
        <span css={page_end}>10</span>

        <button>
          <img src={nextIcon} />
        </button>
      </div>
    </>
  );
}

export default ProfessionalSearch;

const profile_container = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const profile_item_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 100%;
  padding: 24px 0 0 0;
  margin: 0 0 48px 0;

  img {
    display: absolute;
    background-color: #f9f9f9;
    width: 100%;
    box-sizing: border-box;
  }
`;

const gray_back = css`
  height: 198px;
  position: absolute;
  top: 0;
  background-color: #f9f9f9;
  width: 100%;
  z-index: -1;
`;

const pagination_wrap = css`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 0 0 130px;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`;

const divide_line = css`
  width: 2px;
  height: 18px;
  background-color: var(--mono-gray-line-1);
`;

const page_active = css`
  color: var(--point-color-2);
`;

const page_end = css`
  color: var(--mono-gray-txt-light);
`;
