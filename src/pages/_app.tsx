import MainLayout from 'layouts/MainLayout/MainLayout';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';
import { SWRConfig } from 'swr';
// import { StoreProvider } from "store/storeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  // const store = useHydrate(pageProps.store);

  return (
    // <StoreProvider createStore={store}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    // </StoreProvider>
  );
}

export default MyApp;
