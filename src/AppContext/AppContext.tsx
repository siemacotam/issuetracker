import { createContext, useReducer, useMemo } from "react";
import { initialAppContextValues } from "./AppContext.const";
import { AppContextProviderProps, AppContextState } from "./AppContext.types";
import { mainReducer } from "./Reducers/mainReducer";

export const AppContext = createContext<AppContextState>({
  state: initialAppContextValues,
  dispatch: () => null,
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialAppContextValues);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
