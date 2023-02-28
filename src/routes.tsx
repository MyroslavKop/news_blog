import { Routes, Route } from "react-router-dom";
import News from "./pages/News/News";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoute />}>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="news" element={<News />} />
    </Routes>
  );
};
