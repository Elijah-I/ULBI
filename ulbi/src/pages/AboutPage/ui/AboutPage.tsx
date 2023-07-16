import { useEffect, useState } from "react";
import { useLazyFetchUserQuery } from "pages/MainPage/api/user.api";
import { useRequestCache } from "shared/lib/hooks/use.request.cache";

const AboutPage = () => {
  const [id, setId] = useState(1);

  const { isFetching, data: user } = useRequestCache(
    useLazyFetchUserQuery,
    "user",
    id
  );

  useEffect(() => {
    setTimeout(() => setId(2), 3000);
  }, []);

  if (isFetching) return <div>user : ...</div>;
  if (!isFetching && !user) return <div>no user foud</div>;

  return <div>user : {user.name}</div>;
};

export default AboutPage;
