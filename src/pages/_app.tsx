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
import { NavigationScroll } from "@/layout/NavigationScroll";

const Noop = ({ children }: JSX.Element = () => {}) => <> {children} </>;

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
      Layout = Noop;
  }
  return (
    <>
      <Head>
        <title>Kevnnard Studio</title>
        <link rel="icon" href="/images/icono-light.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={false} persistor={persister}>
          <ApolloProvider client={ClientConfig}>
            <NavigationScroll>
              <JWTProvider>
                <Layout>
                  <Component {...pageProps} />
                  <Snackbar />
                </Layout>
              </JWTProvider>
            </NavigationScroll>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default _app;
