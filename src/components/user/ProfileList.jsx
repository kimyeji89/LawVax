/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function ProfileList({ children }) {
  return (
    <Link to="/professional/detail" css={list_wrap}>
      {children}
    </Link>
  );
}

export default ProfileList;

const list_wrap = css`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;

  @media (min-width: 500px) {
    justify-content: center;
    gap: 148px;
  }
`;
