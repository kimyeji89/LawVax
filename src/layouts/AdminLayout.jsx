import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminLogin from "@admin/AdminLogin";
import ProfessionalManage from "@admin//ProfessionalManage";
import ProfessionalRegister from "@admin/ProfessionalRegister";
import PostManage from "@admin/PostManage";
import PostRegister from "@admin/PostRegister";
import PostMy from "@admin/PostMy";

export default function AdminLayout() {
  const location = useLocation();
  if (location.pathname === "/admin/login") {
    return (
      <div>
        <Routes>
          <Route path="login" element={<AdminLogin />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        AdminLayout
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
}
