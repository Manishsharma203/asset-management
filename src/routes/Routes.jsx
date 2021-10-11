import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AssetInfoDisplay from "../layout/AssetInfoDisplay";
import EditAssetInfo from "../layout/EditAssetInfo";
import Header from "../components/Header";
import ListDisplayScreen from "../layout/ListDisplayScreen";
import CentralContextProvider from "../contexts/CentralContextProvider";

export default function Routes() {
  return (
    <BrowserRouter>
      <CentralContextProvider>
        <Header/>
        <Switch>
          <Route exact path="/">
            <ListDisplayScreen />
          </Route>
          <Route exact path="/asset/:assetId">
            <AssetInfoDisplay />
          </Route>
          <Route exact path="/asset/edit/:assetId">
            <EditAssetInfo/>
          </Route>
        </Switch>
      </CentralContextProvider>
    </BrowserRouter>
  );
}
