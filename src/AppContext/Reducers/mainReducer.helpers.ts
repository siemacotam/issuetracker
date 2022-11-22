import { Issue } from "src/global";
import { Statuses } from "../AppContext.types";
import { ActionType, AddIssue, ChangeStatus } from "./mainReducer.types";

export const addIssue = (issue: Issue): AddIssue => ({
  type: ActionType.ADD,
  payload: issue,
});

export const changeStatus = (status: Statuses): ChangeStatus => ({
  type: ActionType.CHANGE_STATUS,
  payload: status,
});

// export const updateStatus = (
//   state: AppContextProps,
//   action: Actions,
//   type: boolean
// ) => {
//   const index = state.list.findIndex((el) => el.id === action.payload);
//   const newElement = { ...state.list[index], isFav: type };
//   const updatedList = [...state.list];
//   updatedList.splice(index, 1, newElement);
//   const updatedState = { ...state, list: updatedList };
//   updateLocalStorage(updatedState);
//   return updatedState;
// };

// export const updateLocalStorage = (state: AppContextProps) =>
//   localStorage.setItem("musicapp", JSON.stringify(state));
