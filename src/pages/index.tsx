import fetcher, { axiosClient } from 'lib/fetcher';
import type { NextPage } from 'next';
import { initializeStore } from 'store';
import useSWR, { SWRConfig } from 'swr';
import HomeComponent from './Home/Home.component';

export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const resp = await axiosClient.get('/api/nivoslider');

  return {
    props: {
      fallback: {
        '/api/nivoslider': resp.data,
      },
    },
  };
}

const Home = ({ fallback }: any) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <HomeComponent />
      </SWRConfig>
    </>
  );
};

// export async function getServerSideProps() {
//   const store = initializeStore(null);

//   await store.getState().getInitialStoreSettings();

//   return {
//     props: { store: JSON.stringify(store.getState()) },
//   };
// }

export default Home;
