import axios, { AxiosRequestConfig, Method } from "axios";
import { useState, useRef, useEffect } from "react";

export function useAxiosQuery<T> (url: string, params?: {[k: string]: any}, authToken?: string) {
  const [data, setData] = useState(null as T | null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const requestConfig: AxiosRequestConfig = {
          params,
          signal: controllerRef.current.signal,
        };

        requestConfig.headers = {...requestConfig.headers};

        if (authToken) {
          requestConfig.headers.Authorization = `Bearer ${authToken}`;
        }

        const response = await axios.get(url, requestConfig);
        setData(response.data);
        
      } catch (error) {
        const err = error as Error;
        setError(err.message);
      } finally {
        setIsLoaded(true);
        setIsLoading(false);
      }
    })();
  }, []);

  return { cancel, data, error, isLoading, isLoaded };
};


export function useAxiosMutation<TInput, TOutput> (url: string, method: Method, authToken?: string) {
  const [data, setData] = useState(null as TOutput | null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  const execute = async (payload: TInput) => {
    try {
      setIsLoading(true);

      const requestConfig: AxiosRequestConfig = {
        data: payload,
        signal: controllerRef.current.signal,
        method,
        url,
      };

      requestConfig.headers = {...requestConfig.headers};

      if (authToken) {
        requestConfig.headers.Authorization = `Bearer ${authToken}`;
      }

      const response = await axios.request(requestConfig);
      setData(response.data);
      return response.data as TOutput;
      
    } catch (error) {
      const err = error as Error;
      setError(err.message);
    } finally {
      setIsLoaded(true);
      setIsLoading(false);
    }
  };

  return { data, error, cancel, execute, isLoading, isLoaded };
};