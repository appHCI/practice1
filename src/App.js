import CalendarPage from "./pages/CalendarPage";
import My from "./pages/My";
import Stat from "./pages/Stat";
import Menu from "./Menu";
import Challenge from "./pages/Challenge";
import Diary from "./pages/Diary";
import Face from "./pages/Face";

import { Route, Routes } from "react-router-dom";
import React from "react";

// import RouteTest from "./RouteTest"; // 필요하다면 이 컴포넌트도 추가하세요.

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/calendar" element={<CalendarPage />}></Route>
        <Route path="/my" element={<My />}></Route>
        <Route path="/stat" element={<Stat />}></Route>
        <Route path="/challenge" element={<Challenge />}></Route>
        <Route path="/diary" element={<Diary />}></Route>
        <Route path="/face" element={<Face />}></Route>
      </Routes>
    </div>
  );
}

export default App;
