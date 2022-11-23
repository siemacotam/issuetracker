import { Issue } from "src/global";
import { Statuses } from "../AppContext.types";

export enum ActionType {
  ADD,
  CHANGE_STATUS,
  CHANGE_ISSUE_STATUS,
  SET_ISSUES,
}

export interface AddIssue {
  type: ActionType.ADD;
  payload: Issue;
}

export interface ChangeStatus {
  type: ActionType.CHANGE_STATUS;
  payload: Statuses;
}

export interface ChangeIssueStatus {
  type: ActionType.CHANGE_ISSUE_STATUS;
  payload: Issue;
}

export interface SetIssues {
  type: ActionType.SET_ISSUES;
  payload: Issue[];
}

export type Actions = AddIssue | ChangeStatus | ChangeIssueStatus | SetIssues;
