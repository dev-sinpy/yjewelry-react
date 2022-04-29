import Head from 'next/head';
import { Footer } from '../../shared-components/Footer/Footer.component';
import Header from '../../components/Header/Header.component';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from 'themes/primary.theme';
import SideNav from 'components/SideNavbar/SideNavbar.component';
import CartDrawer from 'components/CartDrawer/CartDrawer.component';
import CookiePopup from 'shared-components/CookiePopup/CookiePopup.component';

export default function MainLayout({ children }: { children: any }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Y Jewelry</title>
        </Head>
        <Header />
        <SideNav />
        <CartDrawer />
        <Box component="main">{children}</Box>
        <CookiePopup />
        <Footer />
      </ThemeProvider>
    </>
  );
}
