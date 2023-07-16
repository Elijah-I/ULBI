import { useSelector } from "react-redux";
import type { RootState } from "store";

export const getIsUserFetching = () =>
  useSelector((state: RootState) => state.user.is_loading);
