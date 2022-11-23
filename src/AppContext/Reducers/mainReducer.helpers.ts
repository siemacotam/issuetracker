import { Issue } from "src/global";
import { Statuses } from "../AppContext.types";
import {
  ActionType,
  AddIssue,
  ChangeIssueStatus,
  ChangeStatus,
  SetIssues,
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

export const setIssues = (issues: Issue[]): SetIssues => ({
  type: ActionType.SET_ISSUES,
  payload: issues,
});

export const updateLocalStorage = (issues: Issue[]) =>
  localStorage.setItem("issues", JSON.stringify(issues));
