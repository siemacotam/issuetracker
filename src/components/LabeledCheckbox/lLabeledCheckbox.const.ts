import { statuses } from "src/AppContext/AppContext.const";
import { Statuses } from "src/AppContext/AppContext.types";

export const checkboxLabel = (status: Statuses) => {
  switch (status) {
    case statuses.close:
      return "Closed";
    case statuses.open:
      return "Open";
    case statuses.pending:
      return "Pending";
    default:
      return "";
  }
};
