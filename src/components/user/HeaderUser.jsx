/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SiderBtn from "./SiderBtn";

function HeaderUser() {
  return (
    <div css={header_wrap}>
      <SiderBtn />
    </div>
  );
}

export default HeaderUser;

const header_wrap = css`
  width: 100%;    
  height 96px;
  background-color: transparent;
  position: fixed; /* 헤더를 항상 위에 고정 */
  top: 0; 
//   left: 0; 
  display: flex; 
  align-items: center; 
  justify-content: flex-start; 
`;
