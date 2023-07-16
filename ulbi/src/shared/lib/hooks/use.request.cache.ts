import type { QueryDefinition } from "@reduxjs/toolkit/dist/query";
import type { UseLazyQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { useEffect, useState } from "react";

export const useRequestCache = <
  T extends ReturnType<UseLazyQuery<QueryDefinition<any, any, any, any>>>
>(
  requestName: string,
  lazyQuery: () => T,
  args: any
): T[1] => {
  const uniqName = requestName + JSON.stringify(args);
  const [fetchQuery, response] = lazyQuery();
  const [cache, setCache] = useState(response);

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem(uniqName)) {
        const response = await fetchQuery(args);
        localStorage.setItem(uniqName, JSON.stringify(response));
      } else {
        setCache(JSON.parse(localStorage.getItem(uniqName)));
      }
    };

    fetchData();
  }, [args]);

  useEffect(() => {
    if (response.status !== "uninitialized") {
      setCache(response);
    }
  }, [response]);

  return cache;
};
