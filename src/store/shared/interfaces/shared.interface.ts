import { SocialLinks } from "./social/socialLinks.interface";
import { StoreSettingsResponse } from "./yStoreModels/StoreSettings";

export type InitSettings =
  | {
      currentStoreSettings: StoreSettingsResponse;
      SocialLinksSettings: SocialLinks;
      DiscountBannerSettings: { banner: string; view: boolean };
      ProductTags: { list: string[] };
    }
  | any;

export interface ISharedSlice {
  initSettings: InitSettings;
  getInitialStoreSettings: () => Promise<void>;
}
