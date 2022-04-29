import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  MenuList,
  MenuItem,
  Toolbar,
  Typography,
  Card,
  Menu,
  Paper,
  Popper,
  Button,
  Stack,
} from '@mui/material';
import useGlobalConfig from 'hooks/useGlobalConfig';
import BrandLogo from 'shared-components/Logo';
import styles from './Header.module.scss';
import { IMenuItem } from './interfaces/menuitem.interface';
import Thumbnail from 'shared-components/Thumbnail/Thumbnail.component';
import { useHomeNavCategories } from 'hooks/useHomeNav';
import { CategoryInterface } from 'hooks/interfaces/nav-categories.interface';
import { RefObject, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import fetcher from 'lib/fetcher';
import { CartInterface } from 'hooks/interfaces/cart.interface';
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

interface ThumbnailInterface {
  imageUrl: string;
  text: string;
}

const SubMenu: React.FC<{
  isOpen: boolean;
  menuItems: CategoryInterface[];
  thumbnails: ThumbnailInterface[];
  anchorEl: RefObject<HTMLButtonElement>;
  onHoverOutside: (event: Event | React.SyntheticEvent) => void;
}> = ({ isOpen, menuItems, thumbnails, anchorEl, onHoverOutside }) => {
  console.log(thumbnails);
  return (
    <Popper
      anchorEl={anchorEl.current}
      role={undefined}
      placement="bottom-start"
      transition
      open={isOpen}
      sx={{ background: '#fcf4f0', width: '100%', pointerEvents: 'auto' }}
    >
      <Toolbar />
      <Container className="p-8">
        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={0}>
          <Paper
            elevation={0}
            sx={{
              maxHeight: '200px',
              width: '100%',
              maxWidth: '160px',
              overflow: 'scroll',
            }}
            onMouseLeave={onHoverOutside}
          >
            <MenuList>
              {menuItems.map((category, idx) => (
                <MenuItem key={idx} disableRipple>
                  <Typography className="text-sm" variant="belweLight">
                    {category.name}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
          {thumbnails?.map((thumbnail, idx) => (
            <Card
              key={idx}
              sx={{
                width: '250px',
                height: '150px',
              }}
            >
              <Thumbnail imageUrl={thumbnail.imageUrl} title={thumbnail.text} />
            </Card>
          ))}
        </Stack>
      </Container>
    </Popper>
  );
};

const Thumbnails = {
  charms: [
    {
      text: 'Discover the charms',
      imageUrl: 'https://files.y.jewelry/assets/img/nav/charmsCover.jpeg',
    },
    {
      text: 'Create your own sets',
      imageUrl: 'https://files.y.jewelry/assets/img/nav/sets.jpeg',
    },
  ],
  chains: [
    {
      text: 'Discover The Chains',
      imageUrl: 'https://files.y.jewelry/assets/img/nav/chainsCover.jpeg',
    },
    {
      text: 'Create your own sets',
      imageUrl: 'https://files.y.jewelry/assets/img/nav/sets.jpeg',
    },
  ],
  sets: [
    {
      text: 'Discover The Sets',
      imageUrl: 'https://files.y.jewelry/assets/img/nav/setsCover_280.webp',
    },
    {
      text: 'Create your own sets',
      imageUrl: 'https://files.y.jewelry/assets/img/nav/chainsCover.jpeg',
    },
  ],
};

export default function Header(props: any) {
  const { isSidebarOpen: openSidebar, toggleSidebar, isCartOpen: openCart, toggleCart } = useGlobalConfig();
  const { navCategories } = useHomeNavCategories();

  const { data: cartItems } = useSWR<CartInterface>('/api/shopping_cart_items', fetcher);
  const { data: cartItemsCount } = useSWR<{ count: number }>('/api/cart_count', fetcher);

  const [selectedSubMenu, setSelectedSubMenu] = useState<{ category: string; isSelected: boolean } | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<ThumbnailInterface[] | null>(null);
  const [menuItems, setMenuItems] = useState<CategoryInterface[] | null>(null);

  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setSelectedSubMenu(null);
  };

  useEffect(() => {
    if (selectedSubMenu && selectedSubMenu.isSelected && navCategories) {
      const category = `${selectedSubMenu.category.toLowerCase()}`;

      setMenuItems(navCategories[category as keyof typeof navCategories]);
      //@ts-ignore
      setSelectedThumbnail(Thumbnails[category] || []);
    } else {
      setMenuItems(null);
      setSelectedThumbnail(null);
    }
  }, [navCategories, selectedSubMenu]);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar elevation={0} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            onClick={() => {
              toggleSidebar(!openSidebar);
            }}
          >
            {openSidebar ? <CloseIcon color="secondary" /> : <MenuIcon color="secondary" />}
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
                <Button
                  key={idx}
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={selectedSubMenu ? 'composition-menu' : undefined}
                  aria-expanded={selectedSubMenu ? 'true' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={() => {
                    setSelectedSubMenu({ category: menuItem.title, isSelected: true });
                  }}
                  variant="text"
                >
                  <Typography variant="apercu" align="center" color="secondary">
                    {menuItem.title}
                  </Typography>
                </Button>
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
          <IconButton
            onClick={() => {
              toggleCart(!openCart);
            }}
          >
            {openCart ? (
              <CloseIcon color="secondary" />
            ) : (
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                <use xlinkHref="assets/nb.svg#cart"></use>
              </svg>
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <SubMenu
        thumbnails={selectedThumbnail || []}
        isOpen={Boolean(selectedSubMenu?.isSelected)}
        menuItems={menuItems || []}
        anchorEl={anchorRef}
        onHoverOutside={handleClose}
      />
    </Box>
  );
}
