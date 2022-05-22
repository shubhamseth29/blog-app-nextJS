import React from 'react';
import { Layout } from '../components';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9184389292080783"
     crossorigin="anonymous"></script>
      <Script strategy = 'lazyOn' src = {`'https://www.googletagmanager.com/gtag/js?id=G-J1ESKLW91W'`}>
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
