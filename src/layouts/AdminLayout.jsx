import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "@admin/AdminLogin";
import ProfessionalManage from "@admin//ProfessionalManage";
import ProfessionalRegister from "@admin/ProfessionalRegister";
import PostManage from "@admin/PostManage";
import PostRegister from "@admin/PostRegister";
import PostMy from "@admin/PostMy";

export default function AdminLayout() {
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
