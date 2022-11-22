import { IssuesTable, ManagementPanel } from "src/components";
import * as S from "./Main.styled";

export const Main = () => (
  <S.StyledMain>
    <S.Container>
      <ManagementPanel />
      <IssuesTable />
    </S.Container>
  </S.StyledMain>
);
