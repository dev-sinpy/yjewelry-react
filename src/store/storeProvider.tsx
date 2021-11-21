import { createContext, useContext } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children, store }: any) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = (selector: any = null, eqFn: any = null) => {
  const store = useContext(StoreContext);
  const values = (store as any)(selector);

  return values;
};
