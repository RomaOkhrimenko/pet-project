import '../assets/styles/index.scss';
import {AppProps} from "next/app";
import Header from "../components/template/header/Header";
import Footer from "../components/template/footer/Footer";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <>
        <Header />
        <Component {...pageProps} />
          <Footer />
      </>
  )
}

export default MyApp
