import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

import { Navbar } from "widgets/Navbar";
import { Footer } from "widgets/Footer";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="loading...">
        <Navbar />
      </Suspense>
      <AppRouter />

      <Footer page={{ name: "ulbi" }} />
    </div>
  );
};

export default App;
