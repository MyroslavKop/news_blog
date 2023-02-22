import { Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="news" element={<News />} />
    </Routes>
  );
};
