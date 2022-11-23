import { Dispatch, SetStateAction } from "react";
import { Issue } from "src/global";

export interface SelectProps {
  data: Issue;
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
}
