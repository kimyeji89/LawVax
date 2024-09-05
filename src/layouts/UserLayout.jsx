/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import Home from "@userPages/Home";
import Introduction from "@userPages/Introduction";
import LawNews from "@userPages/LawNews";
import Media from "@userPages/Media";
import Recruit from "@userPages/Recruit";
import LawNewsDetail from "@userPages/LawNewsDetail";
import Professional from "@userPages/Professional";
import ProfessionalDetail from "@userPages/ProfessionalDetail";
import ProfessionalSearch from "@userPages/ProfessionalSearch";
import Field from "@userPages/Field";
import NewsLetter from "@userPages/NewsLetter";
import FieldDetail from "@userPages/FieldDetail";
import SearchResult from "@userPages/SearchResult";
import SearchResultDetail from "@userPages/SearchResultDetail";
import HeaderUser from "@userComponents/HeaderUser";
import FooterUser from "@userComponents/FooterUser";

export default function UserLayout() {
  return (
    <div css={layout_wrap}>
      <HeaderUser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="lawNews" element={<LawNews />} />
        <Route path="media" element={<Media />} />
        <Route path="recruit" element={<Recruit />} />
        <Route path="newsLetter" element={<NewsLetter />} />
        <Route path="lawNews/detail" element={<LawNewsDetail />} />
        <Route path="professional" element={<Professional />} />
        <Route path="professional/detail" element={<ProfessionalDetail />} />
        <Route path="professional/search" element={<ProfessionalSearch />} />
        <Route path="field" element={<Field />} />
        <Route path="field/detail" element={<FieldDetail />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/search/detail" element={<SearchResultDetail />} />
      </Routes>
      <FooterUser />
    </div>
  );
}

const layout_wrap = css`
  max-width: 1280px;
  margin: 0 auto;
`;
