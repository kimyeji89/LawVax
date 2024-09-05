/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
function Profile({ profile }) {
  return (
    <Link to="/professional/detail" css={profile_wrap}>
      <img src={profile.image} css={profile_img} alt="profile" />

      <div css={member_info}>
        <p css={member_name}>
          {profile.name}
          <span>(柳成烈)</span>
        </p>
        <p css={member_job}>변호사</p>
        <div css={member_contact}>
          <p>
            <span>T</span>02. 583. 6300
          </p>
          <p>
            <span>E</span>ysl@lawvax.co.kr
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Profile;

const profile_wrap = css`
  width: 134px;
`;

const profile_img = css`
  width: 129px;
  height: 174px;
`;

const member_info = css`
  padding: 0 0 0 11px;
`;

const member_name = css`
  width: 104px;
  height: 26px;
  padding: 12px 0 8px 0;

  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: var(--mono-gray-txt-dark);

  span {
    font-size: 14px;
    line-height: 26px;
    color: var(--mono-gray-txt-light);
  }
`;

const member_job = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: var(--mono-gray-txt-light);
  padding: 0 0 14px 0;
`;

const member_contact = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
  span {
    font-size: 14px;
    font-weight: 700;
    color: var(--mono-gray-txt-dark);
    margin-right: 6px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    margin: 0;
    text-decoration: none;
    text-decoration-line: none;
  }

  a {
    text-decoration: none;
  }
`;
