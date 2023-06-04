import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import ThemeProvider from "./theme/ThemeProvider";
import { classNames } from "./helpers/classNames/classNames";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <button onClick={toggleTheme}>TOGGLE</button>

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
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
