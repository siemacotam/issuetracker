import * as S from "./AlertMessage.styled";
import { AlertMessageProps } from "./AlertMessage.types";

export const AlertMessage = ({ text }: AlertMessageProps): JSX.Element => (
  <S.StyledEmptyStateComponent>
    <S.StyledIcon />
    <S.StyledText>{text}</S.StyledText>
  </S.StyledEmptyStateComponent>
);
