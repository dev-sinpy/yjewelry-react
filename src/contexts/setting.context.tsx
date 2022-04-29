import { GlobalConfig } from 'config/global.config';
import { createContext, useMemo, useState } from 'react';
import { GlobalConfigInterface } from './interfaces/global-config.interface';

export const GlobalConfigContext = createContext<GlobalConfigInterface>(GlobalConfig);

export function GlobalConfigProvider(props: any) {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const [isCartOpen, toggleCart] = useState(false);
  const [isCookiePopupOpen, toggleCookiePopup] = useState(true);

  const value = useMemo<GlobalConfigInterface>(
    () => ({
      isSidebarOpen,
      isCartOpen,
      isCookiePopupOpen,
      toggleSidebar,
      toggleCart,
      toggleCookiePopup,
    }),
    [isCartOpen, isCookiePopupOpen, isSidebarOpen]
  );

  return <GlobalConfigContext.Provider value={value} {...props} />;
}
