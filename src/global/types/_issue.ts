import { Statuses } from "src/AppContext/AppContext.types";

export interface Issue {
  title: string;
  description: string;
  status: Statuses;
}
