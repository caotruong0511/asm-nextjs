import "../styles/globals.scss";
import React from "react";
import { AppPropsWithLayout } from "../models/layout";
import { ClientLayout, Pro5Layout } from "../layouts";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
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

  return getLayout(<Component {...pageProps} />);
}
