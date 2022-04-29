export interface GlobalConfigInterface {
  isSidebarOpen: boolean;
  isCartOpen: boolean;
  isCookiePopupOpen: boolean;
  toggleSidebar: (flag: boolean) => void;
  toggleCart: (flag: boolean) => void;
  toggleCookiePopup: (flag: boolean) => void;
}
