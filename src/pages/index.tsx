import { axiosClient } from 'lib/fetcher';
import { SWRConfig } from 'swr';
import HomeComponent from './Home/Home.component';

export async function getStaticProps() {
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

export default Home;
