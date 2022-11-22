import { Issue } from "src/global";
import { Statuses } from "../AppContext.types";

export enum ActionType {
  ADD,
  CHANGE_STATUS,
}

export interface AddIssue {
  type: ActionType.ADD;
  payload: Issue;
}

export interface ChangeStatus {
  type: ActionType.CHANGE_STATUS;
  payload: Statuses;
}

export type Actions = AddIssue | ChangeStatus;
