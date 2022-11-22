import { statuses } from "src/AppContext/AppContext.const";
import * as yup from "yup";

export const validationSchema = yup.object({
  description: yup.string().required("Pole wymagane"),
  title: yup.string().required("Pole wymagane"),
});

export const initialValues = {
  title: "",
  description: "",
  status: statuses.open,
};
