import * as S from "./EmptyStateComponent.styled";

export const EmptyStateComponent = (): JSX.Element => (
  <S.StyledEmptyStateComponent>
    <S.StyledIcon />
    <S.StyledText>No issues to show</S.StyledText>
  </S.StyledEmptyStateComponent>
);
