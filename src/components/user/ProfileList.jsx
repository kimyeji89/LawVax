/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function ProfileList({ children }) {
  return (
    <div to="/professional/detail" css={list_wrap}>
      {children}
    </div>
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
