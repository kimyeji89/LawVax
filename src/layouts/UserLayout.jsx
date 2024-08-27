/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@userPages/Home";
import Introduction from "@userPages/Introduction";
import LawNews from "@userPages/LawNews";
import LawNewsDetail from "@userPages/LawNewsDetail";
import Professional from "@userPages/Professional";
import ProfessionalDetail from "@userPages/ProfessionalDetail";
import ProfessionalSearch from "@userPages/ProfessionalSearch";
import Field from "@userPages/Field";
import HeaderUser from "../components/user/HeaderUser";
import FooterUser from "../components/user/FooterUser";

export default function UserLayout() {
  return (
    <div css={layout_wrap}>
      <HeaderUser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="lawNews" element={<LawNews />} />
        <Route path="lawNews/detail" element={<LawNewsDetail />} />
        <Route path="professional" element={<Professional />} />
        <Route path="professional/detail" element={<ProfessionalDetail />} />
        <Route path="professional/search" element={<ProfessionalSearch />} />
        <Route path="field" element={<Field />} />
      </Routes>
      <FooterUser />
    </div>
  );
}

const layout_wrap = css`
  max-width: 1024px;
  margin: 0 auto;
`;
