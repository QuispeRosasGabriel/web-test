// makeRequest.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const makeRequest = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await apiClient.request<T>(config);
    return response;
  } catch (error) {
    throw error;
  }
};

export default makeRequest;
