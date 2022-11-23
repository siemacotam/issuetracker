import { Issue } from "src/global";
import { Statuses } from "../AppContext.types";
import {
  ActionType,
  AddIssue,
  ChangeIssueStatus,
  ChangeStatus,
} from "./mainReducer.types";

export const addIssue = (issue: Issue): AddIssue => ({
  type: ActionType.ADD,
  payload: issue,
});

export const changeStatus = (status: Statuses): ChangeStatus => ({
  type: ActionType.CHANGE_STATUS,
  payload: status,
});

export const changeIssueStatus = (issue: Issue): ChangeIssueStatus => ({
  type: ActionType.CHANGE_ISSUE_STATUS,
  payload: issue,
});

// export const updateLocalStorage = (state: AppContextProps) =>
//   localStorage.setItem("musicapp", JSON.stringify(state));
