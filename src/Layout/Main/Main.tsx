import { useState } from "react";
import { AddIssue, IssuesList, ManagementPanel } from "src/components";
import * as S from "./Main.styled";

export const Main = (): JSX.Element => {
  const [openAddPanel, setOpenAddPanel] = useState(false);

  const closePanel = () => setOpenAddPanel(false);
  const openPanel = () => setOpenAddPanel(true);

  return (
    <S.StyledMain>
      <S.MainContentWrapper>
        <S.TableContainer closed={openAddPanel}>
          <ManagementPanel handleClick={openPanel} />
          <IssuesList />
        </S.TableContainer>
        <S.FormContainer closed={!openAddPanel}>
          <AddIssue handleClick={closePanel} />
        </S.FormContainer>
      </S.MainContentWrapper>
    </S.StyledMain>
  );
};
