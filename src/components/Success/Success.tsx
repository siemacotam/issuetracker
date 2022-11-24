import * as S from "./Success.styled";

export const Success = (): JSX.Element => (
  <S.AnimationWrapper>
    <S.SuccessCheckmark>
      <S.CheckIcon>
        <S.IconLineTip />
        <S.IconLineLong />
        <S.IconCircle />
        <S.IconFix />
      </S.CheckIcon>
    </S.SuccessCheckmark>
  </S.AnimationWrapper>
);
