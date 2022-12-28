import * as Yup from "yup";

export const addressValidationSchema = Yup.object({
  street: Yup.string().required("Calle requerida"),
  streetNumber: Yup.string().required("Numero exterior requerido"),
  city: Yup.string().required("Uy, parece que falta la ciudad"),
  state: Yup.string().required("¿En qué estado esta?"),
  unitNumber: Yup.string().required("Numero interior requerido"),
  zipCode: Yup.string().required("¿Cuál es el codigo postal?"),
  colony: Yup.string().required("Colonia requerida"),
  municipality: Yup.string().required("Municipio requerido"),
  country: Yup.string().required("Pais requerido"),
});
