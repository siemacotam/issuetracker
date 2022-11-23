import { AppContextProps } from "../AppContext.types";
import { Actions, ActionType } from "./mainReducer.types";

export const mainReducer = (
  state: AppContextProps,
  action: Actions
): AppContextProps => {
  let updatedState;
  switch (action.type) {
    case ActionType.ADD:
      updatedState = [...state.issues];
      updatedState.push(action.payload);
      return { ...state, issues: updatedState };
    case ActionType.CHANGE_STATUS:
      return { ...state, status: action.payload };
    case ActionType.CHANGE_ISSUE_STATUS:
      const index = state.issues.findIndex(
        (el) => el.title === action.payload.title
      );
      const editedArray = [...state.issues];
      editedArray.splice(index, 1, action.payload);
      return { ...state, issues: editedArray };
    default:
      return state;
  }
};
