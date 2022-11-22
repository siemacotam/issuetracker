import { useContext } from "react";
import { AppContext } from "src/AppContext/AppContext";
import { AppContextState } from "src/AppContext/AppContext.types";

export const useAppContext = () => {
  const { state, dispatch } = useContext<AppContextState>(AppContext);

  return { state, dispatch };
};
