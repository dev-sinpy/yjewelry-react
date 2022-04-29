import { GlobalConfigProvider } from 'contexts/setting.context';
import MainLayout from 'layouts/MainLayout/MainLayout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalConfigProvider>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-WPV84HQ" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-WPV84HQ');
        `}
      </Script>
      <Script id="mautic" strategy="afterInteractive">
        {`
          (function (w, d, t, u, n, a, m) {
            w['MauticTrackingObject'] = n;
            (w[n] =
              w[n] ||
              function () {
                (w[n].q = w[n].q || []).push(arguments);
              }),
              (a = d.createElement(t)),
              (m = d.getElementsByTagName(t)[0]);
            a.defer = 1;
            a.src = u;
            m.parentNode.insertBefore(a, m);
          })(window, document, 'script', 'https://crmfiles.y.jewelry/mtc.js', 'mt');
        `}
      </Script>
      <MainLayout>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </MainLayout>
    </GlobalConfigProvider>
  );
}

export default MyApp;
