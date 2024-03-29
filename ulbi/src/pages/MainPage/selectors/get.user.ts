import { useSelector } from "react-redux";
import type { RootState } from "store";

export const getUser = () => useSelector((state: RootState) => state.user.user);
