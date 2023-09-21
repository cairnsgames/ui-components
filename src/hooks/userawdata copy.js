import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const getRawQuery = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

const useRawData = (url) => {
  const { isLoading, isError, data, error, refetch } = useQuery("users", () => getRawQuery("https://jsonplaceholder.typicode.com/users"));

  return { isLoading, isError, data: data || [], error, refetch };
};

export default useRawData;
