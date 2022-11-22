import { AppContextProps } from "./AppContext.types";

export const statuses = {
  all: "all",
  open: "open",
  pending: "pending",
  close: "close",
};

export const initialAppContextValues: AppContextProps = {
  status: statuses.all,
  issues: [],
};
