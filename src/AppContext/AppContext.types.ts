import { Dispatch } from "react";
import { Actions } from "./Reducers/mainReducer.types";
import { statuses } from "./AppContext.const";
import { Issue } from "src/global";

export type Values<T> = T[keyof T];

export interface AppContextState {
  state: AppContextProps;
  dispatch: Dispatch<Actions>;
}

export type Statuses = Values<typeof statuses>;

export interface AppContextProps {
  status: Statuses;
  issues: Issue[];
}

export interface AppContextProviderProps {
  children: JSX.Element;
}
