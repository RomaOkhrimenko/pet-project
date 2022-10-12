import '../assets/styles/index.scss';
import {AppProps} from "next/app";
import Header from "../components/template/header/Header";
import Footer from "../components/template/footer/Footer";
import {Provider} from "react-redux";
import {persist, store} from "../store/redux";
import {PersistGate} from "redux-persist/integration/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <>
          <Head>
              <title>Company</title>
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          </Head>
          <Provider store={store}>
              <PersistGate persistor={persist}>
                  <Header />
                  <Component {...pageProps} />
                  <Footer />
              </PersistGate>
          </Provider>
      </>
  )
}

export default MyApp
