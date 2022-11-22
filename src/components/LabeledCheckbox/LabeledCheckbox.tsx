import { Statuses } from "src/AppContext/AppContext.types";
import { changeStatus } from "src/AppContext/Reducers/mainReducer.helpers";
import { useAppContext } from "src/hooks";
import Checkbox from "./LabeledCheckbox.styled";
import { checkboxLabel } from "./lLabeledCheckbox.const";

interface LabeledCheckboxProps {
  status: Statuses | "";
}

export const LabeledCheckbox = ({ status }: LabeledCheckboxProps) => {
  const { dispatch, state } = useAppContext();

  const checked = state.status === status;

  const handleCheckboxChange = () => {
    if (state.status === status) {
      dispatch(changeStatus(""));
      return;
    }
    dispatch(changeStatus(status));
  };

  return (
    <>
      <Checkbox checked={checked} onChange={handleCheckboxChange} />
      <span>{checkboxLabel(status)}</span>
    </>
  );
};
