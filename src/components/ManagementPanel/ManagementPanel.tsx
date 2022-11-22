import { statuses } from "src/AppContext/AppContext.const";
import { LabeledCheckbox } from "../LabeledCheckbox";
import * as S from "./ManagementPanel.styled";

export const ManagementPanel = () => {
  return (
    <S.ManagementPanel>
      {Object.keys(statuses).map((option) => (
        <LabeledCheckbox status={option} />
      ))}
    </S.ManagementPanel>
  );
};
