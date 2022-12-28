import { Formik } from "formik";
import styles from "styles/modules/Users.module.scss";
import { Input } from "../../components/input/Input";
import * as Yup from "yup";
import { ButtonSubmit } from "components";
import { useAppDispatch } from "hooks/reduxHooks";
import { v4 as uuid } from "uuid";
import { startAddingBusiness } from "store/business/thunks";
import { addressValidationSchema } from "assets/addressValidationSchema";

export const AddBusiness = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          dateCreated: "",
          address: {
            street: "",
            streetNumber: "",
            city: "",
            state: "",
            unitNumber: "",
            zipCode: "",
            colony: "",
            municipality: "",
            country: "",
          },
          userRepresentative: null,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("El nombre es requerido"),
          email: Yup.string()
            .email("Ese no es un correo valido")
            .required("El correo es requerido"),
          dateCreated: Yup.string().required("La fecha es requerida"),
          address: addressValidationSchema,
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          dispatch(startAddingBusiness({ id: uuid(), ...values }, resetForm));
        }}
        isInitialValid={false}
      >
        {({ handleSubmit, isValid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Input name="name" nameDisplayed="Nombre" />
            <Input name="email" nameDisplayed="Email" type="mail" />
            <Input
              name="dateCreated"
              nameDisplayed="Fecha de creación"
              type="date"
            />
            <Input name="address.city" nameDisplayed="Ciudad" />
            <Input name="address.colony" nameDisplayed="Colonia" />
            <Input name="address.street" nameDisplayed="Calle" />
            <Input name="address.zipCode" nameDisplayed="Codigo postal" />
            <Input
              name="address.streetNumber"
              nameDisplayed="Numero exterior"
            />
            <Input name="address.unitNumber" nameDisplayed="Numero interior" />
            <Input name="address.municipality" nameDisplayed="Municipio" />
            <Input name="address.state" nameDisplayed="Estado" />
            <Input name="address.country" nameDisplayed="Pais" />

            <ButtonSubmit text="Crear nueva empresa" disabled={!isValid} />
          </form>
        )}
      </Formik>
    </div>
  );
};
