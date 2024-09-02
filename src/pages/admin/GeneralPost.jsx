/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AsideMenu from "@adminComponents/AsideMenu";
import PostTable from "@adminComponents/PostTable";

export default function GeneralPost() {
  return (
    <main>
      <h2 className="admin-pageTitle">게시글 관리</h2>
      <div css={ctn}>
        <AsideMenu />
        <PostTable level="general" />
      </div>
    </main>
  );
}

const ctn = css`
  display: flex;
  gap: 30px;
`;
