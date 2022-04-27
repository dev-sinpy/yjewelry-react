import { GlobalConfig } from 'config/global.config';
import { createContext, useMemo, useState } from 'react';
import { GlobalConfigInterface } from './interfaces/global-config.interface';

export const GlobalConfigContext =
  createContext<GlobalConfigInterface>(GlobalConfig);

export function GlobalConfigProvider(props: any) {
  const [openSidebar, toggleSidebar] = useState(false);

  const value = useMemo(
    () => ({
      openSidebar,
      toggleSidebar,
    }),
    [openSidebar]
  );

  return <GlobalConfigContext.Provider value={value} {...props} />;
}
