import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import useGlobalConfig from 'hooks/useGlobalConfig';
import BrandLogo from 'shared-components/Logo';
import styles from './Header.module.scss';
import { IMenuItem } from './interfaces/menuitem.interface';
// import { use0Store } from "store/storeProvider";

const LEFT_MENU_LINKS: IMenuItem[] = [
  {
    href: '/',
    title: 'Charms',
  },
  {
    href: '/',
    title: 'Chains',
  },
  {
    href: '/',
    title: 'Sets',
  },
];

const RIGHT_MENU_LINKS = [
  {
    href: '/',
    title: 'The art of giving',
  },
  {
    href: '/',
    title: 'Create your own sets',
  },
  {
    href: '/',
    title: 'Tell me Y',
  },
];

export default function Header(props: any) {
  const { openSidebar, toggleSidebar } = useGlobalConfig();
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            onClick={() => {
              toggleSidebar(!openSidebar);
            }}
          >
            <MenuIcon color="secondary" />
          </IconButton>

          <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0 20px',
              }}
            >
              {LEFT_MENU_LINKS.map((menuItem, idx) => (
                <a key={idx}>
                  <Typography variant="apercu" align="center" color="secondary">
                    {menuItem.title}
                  </Typography>
                </a>
              ))}
            </Box>
            <BrandLogo className={styles.brandLogo} />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0 20px',
              }}
            >
              {RIGHT_MENU_LINKS.map((menuItem, idx) => (
                <a key={idx}>
                  <Typography variant="apercu" align="center" color="secondary">
                    {menuItem.title}
                  </Typography>
                </a>
              ))}
            </Box>
          </Container>
          <div>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
            >
              <use xlinkHref="assets/nb.svg#cart"></use>
            </svg>
          </div>

          {/* <svg viewBox="0 0 40 40" fill="none">
            <use xlinkHref="assets/nb.svg#close"></use>
          </svg> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
