import { Issue } from "src/global";
import { useFormikContext, ErrorMessage } from "formik";
import * as S from "./AddIssueForm.styled";

export const AddIssueForm = () => {
  const {
    values: { title, description },
    handleChange,
  } = useFormikContext<Issue>();

  return (
    <S.Container>
      <S.InputLabel>Title</S.InputLabel>
      <S.StyledInput name="title" value={title} onChange={handleChange} />
      <ErrorMessage name="title" />
      <S.InputLabel>Description</S.InputLabel>
      <S.StyledTextarea
        name="description"
        value={description}
        onChange={handleChange}
        rows={5}
      />
      <ErrorMessage name="description" />
    </S.Container>
  );
};
