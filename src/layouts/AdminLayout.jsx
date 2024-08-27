/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminLogin from "@adminPages/AdminLogin";
import ProfessionalManage from "@adminPages/ProfessionalManage";
import ProfessionalRegister from "@adminPages/ProfessionalRegister";
import PostManage from "@adminPages/PostManage";
import PostRegister from "@adminPages/PostRegister";
import PostMy from "@adminPages/PostMy";
import Header from "@adminComponents/Header";
import SideBar from "@adminComponents/SideBar";

export default function AdminLayout() {
  const location = useLocation();
  if (location.pathname === "/admin/login") {
    return (
      <div css={login}>
        <Routes>
          <Route path="login" element={<AdminLogin />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div css={others}>
        <Header />
        <SideBar />
        <Routes>
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
}

const login = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--mono-white);
`;

const others = css`
  width: 100%;
  min-height: 100vh;
  background-color: var(--mono-gray-bg-1);
`;
