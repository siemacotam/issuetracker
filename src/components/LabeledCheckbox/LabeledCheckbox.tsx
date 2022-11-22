import { Statuses } from "src/AppContext/AppContext.types";
import { changeStatus } from "src/AppContext/Reducers/mainReducer.helpers";
import { useAppContext } from "src/hooks";
import Checkbox from "./LabeledCheckbox.styled";

interface LabeledCheckboxProps {
  status: Statuses;
}

export const LabeledCheckbox = ({ status }: LabeledCheckboxProps) => {
  const { dispatch, state } = useAppContext();

  const checked = state.status === status;

  const handleCheckboxChange = () => {
    console.log(status);
    dispatch(changeStatus(status));
  };

  return (
    <>
      <Checkbox checked={checked} onChange={handleCheckboxChange} />
      <span>{status}</span>
    </>
  );
};
