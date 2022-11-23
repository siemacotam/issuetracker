import { statuses } from "src/AppContext/AppContext.const";
import { Statuses } from "src/AppContext/AppContext.types";
import styled from "styled-components/macro";
import { checkboxLabel } from "./lLabeledCheckbox.const";
import { darken } from "polished";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface StyledCheckboxProps {
  checked: boolean;
  status: Statuses;
}

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ theme, checked, status }) => {
    switch (status) {
      case statuses.open:
        return checked
          ? darken(0.5, theme.colors.openBackground)
          : darken(0.1, theme.colors.openBackground);
      case statuses.pending:
        return checked
          ? darken(0.5, theme.colors.pendingBackground)
          : darken(0.1, theme.colors.pendingBackground);
      case statuses.close:
        return checked
          ? darken(0.5, theme.colors.closedBackground)
          : darken(0.1, theme.colors.closedBackground);
      default:
        return "";
    }
  }};
  border-radius: 3px;
  transition: all 150ms;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #acacac;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const StyledLabel = styled.span`
  display: inline-block;
  padding: 0 10px;
`;

const Checkbox = ({
  className,
  checked,
  onChange,
  status,
  ...props
}: {
  className?: string;
  checked: boolean;
  onChange: () => void;
  status: Statuses;
  props?: any[];
}) => (
  <CheckboxContainer className={className} onClick={onChange}>
    <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
    <StyledCheckbox checked={checked} onChange={onChange} status={status}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    <StyledLabel>{checkboxLabel(status)}</StyledLabel>
  </CheckboxContainer>
);

export default Checkbox;
