import SearchIcon from '@mui/icons-material/Search';
import { Box, Drawer, List, ListItem, ListItemIcon, Toolbar } from '@mui/material';
import { CategoryInterface, HomeSubCategoriesInterface } from 'hooks/interfaces/nav-categories.interface';
import useGlobalConfig from 'hooks/useGlobalConfig';
import { useHomeNavCategories } from 'hooks/useHomeNav';
import { useMemo } from 'react';
import NavListView, { MenuItemInterface } from 'shared-components/NavListView/NavListView.component';
import PromotionBanner from 'shared-components/PromotionalBanner/PromotionalBanner.component';
import styles from './SideNavbar.module.scss';

const SideNavItems = [
  'Charms',
  'Chains',
  'Sets',
  'The art of giving',
  'Create your own sets',
  'Tell me Y',
  'Chain of Charms',
  'Lookbooks',
  '5 things about us',
];

function buildNavItems(categories: HomeSubCategoriesInterface): MenuItemInterface[] {
  const navItems: MenuItemInterface[] = SideNavItems.map((category) => {
    const subCategory: CategoryInterface[] | null =
      category.toLowerCase() in categories
        ? ((categories as any)[category.toLowerCase()] as CategoryInterface[])
        : null;
    // SideNavItems.findIndex((item) => item.toLowerCase() === category.toLowerCase());

    let navItem: MenuItemInterface;

    if (subCategory !== null) {
      navItem = {
        title: category,
        hasMoreItems: subCategory.length > 0,
        subItems: subCategory.map((subCategory) => ({
          title: subCategory.name,
          hasMoreItems: false,
          hasBackButton: false,
        })),
        hasBackButton: true,
        backButtonText: category,
      };
    } else {
      navItem = {
        title: category,
        hasMoreItems: false,
        subItems: [],
        hasBackButton: false,
      };
    }

    return navItem;
  });

  return navItems;
}

export default function SideNav() {
  const { openSidebar, toggleSidebar } = useGlobalConfig();
  const { navCategories, isLoading } = useHomeNavCategories();

  console.log('SideNav navCategories', navCategories);

  const navItems = useMemo(() => {
    if (navCategories !== undefined) {
      return buildNavItems(navCategories);
    }
    return [];
  }, [navCategories]);

  return (
    <Drawer
      anchor="left"
      open={openSidebar}
      sx={{ width: '300px' }}
      onClose={() => {
        toggleSidebar(!openSidebar);
      }}
      PaperProps={{
        sx: { width: 'inherit' },
      }}
    >
      <Toolbar />
      <Box className="mt-2">
        <nav>
          <List>
            <ListItem disablePadding className={`h-16`}>
              <div className={`${styles.borderBlue} w-full h-full flex justify-center items-center`}>
                <p>Sign in</p>
              </div>
              <div className={`${styles.borderBlue} w-full h-full flex justify-center items-center`}>
                <p className="">Your wishlist</p>
              </div>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <SearchIcon color="secondary" />
              </ListItemIcon>
              <input type="text" className={`${styles.searchInput} w-100`} placeholder="Tap to search on the website" />
            </ListItem>

            <ListItem disablePadding>
              <PromotionBanner />
            </ListItem>

            <NavListView menuItems={navItems} />
          </List>
        </nav>
      </Box>
    </Drawer>
  );
}
