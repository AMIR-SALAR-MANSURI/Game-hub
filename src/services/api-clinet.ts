import axios, { AxiosRequestConfig } from "axios";
export interface FetchGenre<T> {
  count: number;
  next: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key:"492a3247700a4faf81a1c71d5ee1a843"
    // key:"c7b18323a47d40c394ea5b019646b1f5"
    key: "c542e67aec3a4340908f9de9e86038af",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchGenre<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}
export default APIClient;
