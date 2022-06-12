import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "../common/context/CartContext";
import { NotificationContextProvider } from "../common/context/NotificationContext";
import Layout from "../component/Layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <CartContextProvider>
        <Layout>
          <Head>
            <title>Next Coffee</title>
            <meta name='description' content='NextJS Coffee project' />
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </NotificationContextProvider>
  )
}

export default MyApp;
