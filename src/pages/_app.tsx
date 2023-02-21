import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persister } from "@/store";
import { AuthProvider as JWTProvider } from "@/contexts/authContext";
import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/client/react";
import ClientConfig from "@/contexts/client.config";
import authGuard from "@/layout/authGuard";
import noGuard from "@/layout/noGuard";
import Head from "next/head";
import "../theme/general.css";
import Snackbar from "@/components/ui-components/snackbar";

const _app = ({ Component, pageProps }: any) => {
  let Layout;
  switch (Component.Layout) {
    case "authGuard":
      Layout = authGuard;
      break;
    case "noGuard":
      Layout = noGuard;
      break;
    default:
      Layout = noGuard;
  }
  return (
    <>
      <Head>
        <title>Kevnanrd</title>
        <link rel="icon" href="/assets/images/marca/logoB.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={false} persistor={persister}>
          <ApolloProvider client={ClientConfig}>
            <JWTProvider>
              <Layout>
                <Component {...pageProps} />
                <Snackbar />
              </Layout>
            </JWTProvider>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default _app;
