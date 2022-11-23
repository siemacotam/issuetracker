import { statuses } from "src/AppContext/AppContext.const";
import { Statuses } from "src/AppContext/AppContext.types";

export const values = [
  { label: "Open", value: statuses.open },
  { label: "Pending", value: statuses.pending },
  { label: "Closed", value: statuses.close },
];

export const optionsToShow = (value: Statuses) => {
  switch (value) {
    case statuses.open:
      return values;
    case statuses.pending:
      const newOptionsList = [...values];
      newOptionsList.splice(0, 1);
      return newOptionsList;
    default:
      return [];
  }
};
