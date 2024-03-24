import { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";
import axios, { AxiosRequestConfig } from "axios";

export interface FetchGenre<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClinet
        .get<FetchGenre<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
          ...deps,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          console.error("API Error:", err);
          setError(err.message);
          setLoading(false);
        });
      console.log(data);
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};
export default useData;
