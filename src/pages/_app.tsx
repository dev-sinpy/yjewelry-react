import { GlobalConfigProvider } from 'contexts/setting.context';
import MainLayout from 'layouts/MainLayout/MainLayout';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';
// import { StoreProvider } from "store/storeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  // const store = useHydrate(pageProps.store);

  return (
    // <StoreProvider createStore={store}>
    <GlobalConfigProvider>
      <MainLayout>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </MainLayout>
    </GlobalConfigProvider>
  );
}

export default MyApp;
