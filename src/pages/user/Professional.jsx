/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Title from "@components/user/Title";
import { StyledTitleWrap } from "./NewsLetter";
import SearchBar from "@userComponents/SearchBar";
import ProfileCard from "../../components/user/ProfileCard";
import profileData from "@data/profileData.json";
import { useState } from "react";
import ToggleContentBtn from "@userComponents/ToggleContentBtn";
import { SlideProfessional } from "../../components/user/SlideProfessional";

function Professional() {
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
    <div>
      <StyledTitleWrap>
        <Title titleFirst="P" title="ROFESSIONAL " />
      </StyledTitleWrap>
      <SearchBar />
      {/* <SlideProfessional /> 필요시 주석 해제*/}
      <div css={profile_container}>
        {profileData.slice(0, visibleCount).map((profile, index) => (
          <div key={index} css={profile_item_wrap}>
            <div css={gray_back}></div>
            <ProfileCard profile={profile} data={profile} />
          </div>
        ))}
      </div>

      <div css={btn_wrap}>
        {totalProfiles > 6 && (
          <ToggleContentBtn onClick={handleMoreClick} isExpanded={isExpanded} />
        )}
      </div>
    </div>
  );
}

export default Professional;

const btn_wrap = css`
  padding: 10px 16px 138px 16px;
`;

const profile_container = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const profile_item_wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const gray_back = css`
  height: 56px;
  position: absolute;
  bottom: 0;

  background-color: #f9f9f9;
  width: 100%;
  z-index: -1;
`;
