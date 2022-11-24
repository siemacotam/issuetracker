import { useState } from "react";
import { statuses } from "src/AppContext/AppContext.const";
import { changeIssueStatus } from "src/AppContext/Reducers/mainReducer.helpers";
import { useAppContext } from "src/hooks";
import { optionsToShow, values } from "./StatusSelect.const";
import * as S from "./StatusSelect.styled";
import { SelectProps } from "./StatusSelect.types";

export const StatusSelect = ({ data, setShowSuccess }: SelectProps) => {
  const { status } = data;
  const [currentValue, setCurrentValue] = useState(status);
  const [open, setOpen] = useState(false);
  const { dispatch } = useAppContext();

  const isIssueResolved = status === statuses.close;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (value: string) => {
    if (value === statuses.close) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setCurrentValue(value);
        dispatch(changeIssueStatus({ ...data, status: value }));
      }, 3000);
    } else {
      setCurrentValue(value);
      dispatch(changeIssueStatus({ ...data, status: value }));
    }
  };

  const handleChange = (value: string) => {
    handleValueChange(value);
    handleClose();
  };

  const selectLabel =
    values.find((el) => el.value === currentValue)?.label || "";

  return (
    <S.SelectContainer>
      {isIssueResolved ? (
        <S.StyledClosedInfo>
          <S.StyledClosedIcon />
          <S.StyledSpan>Closed</S.StyledSpan>
        </S.StyledClosedInfo>
      ) : (
        <S.SelectLabelButton onClick={handleOpen} status={status}>
          {selectLabel}
        </S.SelectLabelButton>
      )}

      <S.DropdownStyle isVisible={open}>
        {optionsToShow(currentValue).map(({ value, label }) => (
          <S.DropdownItem
            key={value}
            onClick={() => handleChange(value)}
            active={value === currentValue}
          >
            {label}
          </S.DropdownItem>
        ))}
      </S.DropdownStyle>
    </S.SelectContainer>
  );
};
