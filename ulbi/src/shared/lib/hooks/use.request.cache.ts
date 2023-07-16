import type { QueryDefinition } from "@reduxjs/toolkit/dist/query";
import type { UseLazyQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { useEffect, useState } from "react";

export const useRequestCache = <
  T extends ReturnType<UseLazyQuery<QueryDefinition<any, any, any, any>>>
>(
  lazyQuery: () => T,
  id: string,
  args: any
): T[1] => {
  const [fetchQuery, response] = lazyQuery();
  const [cache, setCache] = useState(response);

  useEffect(() => {
    const fetchData = async () => {
      const uniqId = id + JSON.stringify(args);
      const cached = localStorage.getItem(uniqId);
      let cachedData;

      if (cached) {
        let { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < 10000) {
          cachedData = data;
        }
      }

      if (!cachedData) {
        const response = await fetchQuery(args);
        localStorage.setItem(
          uniqId,
          JSON.stringify({ data: response, timestamp: Date.now() })
        );
      } else {
        setCache(cachedData);
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
