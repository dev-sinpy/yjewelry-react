import { axiosClient } from 'lib/fetcher';
import { SWRConfig } from 'swr';
import HomeComponent from './Home/Home.component';

export async function getStaticProps() {
  const bannersResp = await axiosClient.get('/api/nivoslider');
  const subCatsResp = await axiosClient.get('/api/navSubCategories');

  return {
    props: {
      fallback: {
        '/api/nivoslider': bannersResp.data,
        '/api/navSubCategories': subCatsResp.data,
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
