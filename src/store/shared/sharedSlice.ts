import { AppState } from 'store';
import { GetState, SetState } from 'zustand';
// import client from "lib/axios";
import { StoreSettingsResponse } from './interfaces/yStoreModels/StoreSettings';
import { SocialLinks } from './interfaces/social/socialLinks.interface';
import { InitSettings } from './interfaces/shared.interface';

const sharedSlice = (set: SetState<AppState>, get: GetState<AppState>) => ({
  initSettings: {},
  getInitialStoreSettings: async () => {
    // var initSettings: InitSettings = (
    //   await client.get(`/api/IntialStoreSetting`)
    // ).data;
    // console.log('setting', initSettings);
    // set(() => ({ initSettings }));
  },
});

export default sharedSlice;
