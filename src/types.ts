import { GetMenuItemQuery } from "./API";
import { GetPropertyQuery } from "./pages/Menu/components/utils";

export type TParams = {
  restaurantId: string;
  tableNumber: string;
};

export type TNonNullMenuItem = NonNullable<GetMenuItemQuery["getMenuItem"]>;

// export type TMenuItemi18nTranslated = TNonNullMenuItem["i18n"][number];

// export type TMenuItemTranslated = Omit<TNonNullMenuItem, "i18n"> & {
//   i18n: TMenuItemi18nTranslated;
// };

export type TNonNullPropertyQuery = NonNullable<GetPropertyQuery["getProperty"]>;

export type TAppSyncError = { data: any; errors: [{ message: string }] };

export type TMutationError = {
  data: any;
  errors: any[];
};
