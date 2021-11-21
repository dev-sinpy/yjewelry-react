import { useMemo } from "react";
import create, { StoreApi, UseBoundStore } from "zustand";
import { IInitialState } from "./interfaces/store.interface";
import INavgationSlice from "./navigation/navigation.interface";
import navigationSlice from "./navigation/navigationSlice";
import { ISharedSlice } from "./shared/interfaces/shared.interface";
import sharedSlice from "./shared/sharedSlice";

export type AppState = INavgationSlice & ISharedSlice;

let store: any;

const initialState: IInitialState = {};

function initStore(preloadedState = initialState) {
  return create<AppState>((set, get) => ({
    ...initialState,
    ...preloadedState,
    ...sharedSlice(set, get),
    ...navigationSlice(set, get),
  }));
}

// const useStore = create<AppState>((set, get) => ({
//   ...navigationSlice(set, get),
//   ...sharedSlice,
// }));

export const initializeStore = (
  preloadedState: IInitialState | any
): UseBoundStore<AppState, StoreApi<AppState>> => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Zustand state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useHydrate(initialState: AppState) {
  const state =
    typeof initialState === "string" ? JSON.parse(initialState) : initialState;
  const store = useMemo(() => initializeStore(state), [state]);
  return store;
}

// export default useStore;
