import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Introduction from "./pages/user/Introduction";
import LawNews from "./pages/user/LawNews";
import LawNewsDetail from "./pages/user/LawNewsDetail";
import Professional from "./pages/user/Professional";
import ProfessionalDetail from "./pages/user/ProfessionalDetail";
import ProfessionalSearch from "./pages/user/ProfessionalSearch";
import Field from "./pages/user/Field";
import AdminLogin from "./pages/admin/AdminLogin";
import ProfessionalManage from "./pages/admin/ProfessionalManage";
import ProfessionalRegister from "./pages/admin/ProfessionalRegister";
import PostManage from "./pages/admin/PostManage";
import PostRegister from "./pages/admin/PostRegister";
import PostMy from "./pages/admin/PostMy";
import "../src/common/GlobalStyles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/lawNews" element={<LawNews />} />
      <Route path="/lawNews/detail" element={<LawNewsDetail />} />
      <Route path="/professional" element={<Professional />} />
      <Route path="/professional/detail" element={<ProfessionalDetail />} />
      <Route path="/professional/search" element={<ProfessionalSearch />} />
      <Route path="/field" element={<Field />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/professional" element={<ProfessionalManage />} />
      <Route
        path="/admin/professional/register"
        element={<ProfessionalRegister />}
      />
      <Route path="/admin/post" element={<PostManage />} />
      <Route path="/admin/post/register" element={<PostRegister />} />
      <Route path="/admin/post/my" element={<PostMy />} />
    </Routes>
  );
}

export default App;
