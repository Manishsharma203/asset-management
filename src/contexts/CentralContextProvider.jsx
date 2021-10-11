import React, { createContext, useState } from "react";

export const centralContext = createContext({
  data: [],
  fetchingAllAssets: () => {},
  setData: () => {},
  fetchAssetById:()=>{}
});

const { Provider } = centralContext;

export default function CentralContextProvider(props) {
  const { children } = props;
  const [data, setData] = useState([]);
  const fetchingAllAssets = async () => {
    try {
      const response = await fetch(
        "https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets/"
      );
      const result = await response.json();
      setData(result)
    } catch (err) {
      console.log(`fetching error: ${err}`);
    }
  };
  const fetchAssetById=async(id)=>{
    try {
      const response = await fetch(
        `https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets/${id}`
      );
      const result = await response.json();
      return result
    } catch (err) {
      console.log(`fetching asset error: ${err}`);
    }
  }
  return (
    <Provider value={{ data, fetchingAllAssets, setData,fetchAssetById }}>{children}</Provider>
  );
}
