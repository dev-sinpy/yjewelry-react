import "styles/globals.scss";
import MainLayout from "layouts/MainLayout/MainLayout";
import type { AppProps } from "next/app";
import { useHydrate } from "store";
import { StoreProvider } from "store/storeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useHydrate(pageProps.initialZustandState);

  return (
    <StoreProvider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StoreProvider>
  );
}

export default MyApp;
