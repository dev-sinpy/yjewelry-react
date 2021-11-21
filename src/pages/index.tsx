import type { NextPage } from "next";
import { initializeStore } from "store";
import HomeComponent from "./Home/Home.component";

const Home: NextPage = () => {
  return (
    <>
      <HomeComponent />
    </>
  );
};

export async function getServerSideProps() {
  console.log("sup");
  const store = initializeStore(null);

  await store.getState().getInitialStoreSettings();

  return {
    props: { store: JSON.stringify(store.getState()) },
  };
}

export default Home;
