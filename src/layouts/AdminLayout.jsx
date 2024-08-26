/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "@adminPages/AdminLogin";
import ProfessionalManage from "@adminPages/ProfessionalManage";
import ProfessionalRegister from "@adminPages/ProfessionalRegister";
import PostManage from "@adminPages/PostManage";
import PostRegister from "@adminPages/PostRegister";
import PostMy from "@adminPages/PostMy";
import Header from "@adminComponents/Header";
import SideBar from "@adminComponents/SideBar";

const adminCtnStyle = css`
  width: 100%;
  min-height: 100vh;
  background-color: var(--mono-gray-bg-1);
`;

export default function AdminLayout() {
  return (
    <div css={adminCtnStyle}>
      <Header />
      <SideBar />
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route path="professional" element={<ProfessionalManage />} />
        <Route
          path="professional/register"
          element={<ProfessionalRegister />}
        />
        <Route path="post" element={<PostManage />} />
        <Route path="post/register" element={<PostRegister />} />
        <Route path="post/my" element={<PostMy />} />
      </Routes>
    </div>
  );
}
