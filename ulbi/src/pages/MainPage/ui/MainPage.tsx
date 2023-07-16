//import { useEffect } from "react";
//import { useDispatch } from "react-redux";
//import type { AppDispatch } from "store";
// import { getIsUserFetching } from "../selectors/get.is.user.fetching";
// import { getUser } from "../selectors/get.user";
//import { fetchUser } from "../services/fetch.user";
import { useFetchUserQuery, useReFetchUserMutation } from "../api/user.api";

const MainPage = () => {
  // const user = getUser();
  // const isFetching = getIsUserFetching();

  const { isFetching, data: user } = useFetchUserQuery(1);
  const [refetchUser] = useReFetchUserMutation();

  //const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchUser(1));
  // }, []);

  if (isFetching) return <div>user : ...</div>;
  if (!isFetching && !user) return <div>no user foud</div>;

  return (
    <div>
      user : {user.name}
      <br />
      <br />
      <button onClick={refetchUser}>re-fetch-by-DROP-cache</button>
    </div>
  );
};

export default MainPage;
