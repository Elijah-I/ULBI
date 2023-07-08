import { lazy } from "react";

export const Navbar = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import("./ui/Navbar")), 1500);
    })
);
