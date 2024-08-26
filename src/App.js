import { Route, Routes } from "react-router-dom";
import "./common/GlobalStyles.css";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/UserLayout";

function App() {
  return (
    <Routes>
      <Route path="/user/*" element={<UserLayout />} />
      <Route path="/admin/*" element={<AdminLayout />} />
    </Routes>
  );
}

export default App;
