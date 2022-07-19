import "../styles/globals.scss";
import React from "react";
import { AppPropsWithLayout } from "../models/layout";
import { ClientLayout } from "../layouts";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <ClientLayout>{page}</ClientLayout>);

  return getLayout(<Component {...pageProps} />);
}
