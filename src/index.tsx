import { Suspense } from "react";
import { Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

const App = () => {
  return (
    <>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={"/about"}
            element={<AboutPageAsync />}
          />
          <Route
            path={"/"}
            element={<MainPageAsync />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
