import { statuses } from "src/AppContext/AppContext.const";
import { IssueButton } from "../IssueButton";
import { LabeledCheckbox } from "../LabeledCheckbox";
import * as S from "./ManagementPanel.styled";

interface ManagementPanelProps {
  handleClick: () => void;
}

export const ManagementPanel = ({ handleClick }: ManagementPanelProps) => {
  return (
    <S.ManagementPanel>
      <S.Container>
        <S.CheckboxWrapper>
          {Object.keys(statuses).map((option) => (
            <LabeledCheckbox key={option} status={option} />
          ))}
        </S.CheckboxWrapper>
        <IssueButton handleClick={handleClick} open />
      </S.Container>
    </S.ManagementPanel>
  );
};
