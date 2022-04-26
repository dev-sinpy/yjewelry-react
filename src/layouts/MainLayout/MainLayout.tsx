import Head from 'next/head';
import { Footer } from '../../shared-components/Footer/Footer.component';
import Navbar from '../../components/NavBar/Navbar.component';

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <Head>
        <title>Y</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
