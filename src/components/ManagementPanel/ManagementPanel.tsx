import { statuses } from "src/AppContext/AppContext.const";
import { IssueButton } from "../IssueButton";
import { LabeledCheckbox } from "../LabeledCheckbox";
import * as S from "./ManagementPanel.styled";
import { ManagementPanelProps } from "./ManagementPanel.types";

export const ManagementPanel = ({
  handleClick,
}: ManagementPanelProps): JSX.Element => (
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
