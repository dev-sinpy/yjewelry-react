import { GlobalConfigInterface } from 'contexts/interfaces/global-config.interface';

export const GlobalConfig = {
  isSidebarOpen: false,
  toggleSidebar: (openSidebar: boolean) => {},
  isCartOpen: false,
  toggleCart: (openCart: boolean) => {},
} as GlobalConfigInterface;
