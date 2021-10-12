import React, { createContext, useState } from "react";

export const centralContext = createContext({
  data: [],
  fetchingAllAssets: () => {},
  setData: () => {},
  fetchAssetById: () => {},
  saveAsset: () => {},
  deleteAsset:()=>{}
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
      setData(result);
    } catch (err) {
      console.log(`fetching error: ${err}`);
    }
  };
  const fetchAssetById = async (id) => {
    try {
      const response = await fetch(
        `https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets/${id}`
      );
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(`fetching asset error: ${err}`);
    }
  };
  const saveAsset = (id, assetData) => {
    console.log("saveAsset", assetData);
    if (assetData.title && assetData.imageURL) {
      const copyData = [...data];
      const result = copyData.map((ele) =>
        ele.id === id ? { ...ele, ...assetData } : ele
      );
      console.log("result", result);
      setData(result);
    } else {
      alert("Title cannot be empty");
    }
  };
  const deleteAsset = (id) => {
    const copyData = [...data];
    const result = copyData.filter((ele) => ele.id !== id);
    console.log("result", result);
    setData(result);
  };
  return (
    <Provider
      value={{ data, fetchingAllAssets, setData, fetchAssetById, saveAsset,deleteAsset }}
    >
      {children}
    </Provider>
  );
}
