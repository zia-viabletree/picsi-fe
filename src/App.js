import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Loader } from "./components";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import CreateStore from "./store";
import DataHandler from "./services/data-handler";
import PageRoutes from "./routes/index";
import reducers from "./redux/slicers";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import { ConfigProvider } from "antd";

function App() {
  const [persistor, setPersistor] = useState(null);
  const [store, setStore] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const storeConfig = CreateStore(reducers, () => {
      DataHandler.setStore(storeConfig);
      setStore(storeConfig);
      setPersistor(persistStore(storeConfig));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#4B0082",
          },
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
              <Router>
                <ToastContainer />
                <PageRoutes />
              </Router>
            </PersistGate>
          </Provider>
        )}
      </ConfigProvider>
    </>
  );
}

export default App;
