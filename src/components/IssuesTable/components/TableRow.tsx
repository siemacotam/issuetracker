import { Issue } from "src/global";
import * as S from "../IssuesTable.styled";

interface TableRowProps {
  data: Issue;
}

export const TableRow = ({ data }: TableRowProps) => {
  const { title, description, status } = data;

  return (
    <S.StyledRow>
      <td>{title}</td>
      <td>{description}</td>
      <td>{status}</td>
    </S.StyledRow>
  );
};
