import * as Yup from "yup";
import { justNumbersRegex } from "../resources/regexValidators";

export const addressValidationSchema = Yup.object({
  street: Yup.string().required("Calle requerida"),
  streetNumber: Yup.string()
    .matches(justNumbersRegex, "Solo numeros")
    .required("Numero exterior requerido"),
  city: Yup.string().required("Uy, parece que falta la ciudad"),
  state: Yup.string().required("¿En qué estado esta?"),
  unitNumber: Yup.string().matches(justNumbersRegex, "Solo numeros"),
  zipCode: Yup.string()
    .matches(justNumbersRegex, "El codigo postal solo tiene numeros")
    .required("¿Cuál es el codigo postal?"),
  colony: Yup.string().required("Colonia requerida"),
  municipality: Yup.string().required("Municipio requerido"),
  country: Yup.string().required("Pais requerido"),
});
