import Head from 'next/head';
import { Footer } from '../../shared-components/Footer/Footer.component';
import Header from '../../components/Header/Header.component';
import { ThemeProvider } from '@mui/material';
import { theme } from 'themes/primary.theme';
import SideNav from 'components/SideNavbar/SideNavbar.component';

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Y Jewelry</title>
        </Head>

        <Header />
        <SideNav />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
