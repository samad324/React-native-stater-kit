import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../store";

import { Loader } from "../components";
import Navigation from "../navigation";

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
