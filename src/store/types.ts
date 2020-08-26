import { TypedUseSelectorHook, useSelector } from "react-redux";
import { GetOrderQuery } from "../API";

export type TStore = {
  orders: GetOrderQuery["getOrder"][];
  selectedProperty: {
    name: string;
    open: boolean;
  };
};

export type OrderStatus = "ACCEPTED" | "REJECTED" | "AWAITING" | "COMPLETED";

export const useTypedSelector: TypedUseSelectorHook<TStore> = useSelector;
