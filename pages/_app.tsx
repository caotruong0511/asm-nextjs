import "../styles/globals.scss";
import React from "react";
import { AppPropsWithLayout } from "../models/layout";
import { ClientLayout, Pro5Layout } from "../layouts";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from "react-redux";
import persistor, { store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <ClientLayout>{page}</ClientLayout>);
  // const getLayout2 =
  //   Component.getLayout ??
  //   ((page) => (
  //     <ClientLayout>
  //       <Pro5Layout>{page}</Pro5Layout>
  //     </ClientLayout>
  //   ));

  return getLayout(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>,
  );
}
