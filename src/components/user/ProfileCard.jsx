/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
function ProfileCard({ data }) {
  return (
    <Link to="/professional/detail" css={card_wrap}>
      <img src={data.image} alt="profile" />
      <div>
        <p css={pro_name}>{data.name}</p>
      </div>
    </Link>
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

const pro_name = css`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  min-width: 42px;
  color: #222222;
`;
