import { AppState } from "store";
import { GetState, SetState } from "zustand";

const navigationSlice = (set: SetState<AppState>, get: GetState<AppState>) => ({
  // eatFish: () => {
  //   // set((prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }));
  // },
});

export default navigationSlice;
