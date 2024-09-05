/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import profileImg from "@images/member-profile.png";

function ProfileCard({ data }) {
  return (
    <div css={card_wrap}>
      <img src={profileImg} />
      <div>
        <p css={career}>{data.job}</p>
        <p css={pro_name}>{data.name}</p>
      </div>
    </div>
  );
}

export default ProfileCard;

const card_wrap = css`
  padding: 48px 0 0 0;
  display: flex;
  flex-direction: row;

  img {
    width: 74px;
    height: 100px;
  }
`;

const career = css`
  font-size: 8px;
  font-weight: 500;
  color: var(--mono-gray-txt-light);
  padding-bottom: 4px;
`;

const pro_name = css`
  font-size: 16px;
  font-weight: 500;
  min-width: 42px;
  color: var(--mono-black-title-2);
`;
