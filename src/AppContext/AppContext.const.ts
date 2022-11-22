import { AppContextProps } from "./AppContext.types";

export const statuses = {
  open: "open",
  pending: "pending",
  close: "close",
};

export const initialAppContextValues: AppContextProps = {
  status: "",
  issues: [],
};
