import Script from "next/script";
import React from 'react';
import { Layout } from '../components';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy = 'lazyOnload' src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9184389292080783"
     crossorigin="anonymous"></Script>
      <Script strategy = 'lazyOnload' src = "https://www.googletagmanager.com/gtag/js?id=G-J1ESKLW91W">
      </Script>
      <Script strategy = 'lazyOnload'>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date());
          gtag('config', 'G-J1ESKLW91W');`
        }
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  
  );
}

export default MyApp;
