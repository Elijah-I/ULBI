import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

import { SafeProvider } from "./providers/safe.component";

import { Navbar } from "ulbi/Navbar";
import { Footer } from "ulbi/Footer";

import { User, List, Admin } from "shared-types-test-elijah-i";

import "./styles/index.scss";

const user: User = {
  age: 1,
  name: "asd"
};

const list: List = { list: [user] };

const admin: Admin = { ...user, permissions: [1] };

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <SafeProvider>
        <Suspense fallback="loading...">
          <Navbar />
        </Suspense>
      </SafeProvider>

      <AppRouter />

      <SafeProvider>
        <Suspense fallback="loading...">
          <Footer />
        </Suspense>
      </SafeProvider>
    </div>
  );
};

export default App;
