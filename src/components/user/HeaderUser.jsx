/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SideBarUser from "./SideBarUser";

function HeaderUser() {
  return (
    <div css={header_wrap}>
      <SideBarUser />
    </div>
  );
}

export default HeaderUser;

const header_wrap = css`
  width: 100%;    
  height 96px;
  background-color: transparent;
  position: fixed; 
  top: 0; 
  display: flex; 
  z-index: 1000;
  align-items: center; 
  justify-content: flex-start; 
`;
