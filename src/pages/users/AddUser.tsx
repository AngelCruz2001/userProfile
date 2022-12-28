import { Formik } from "formik";
import styles from "styles/modules/Users.module.scss";
import { Input } from "../../components/input/Input";
import * as Yup from "yup";
import { ButtonSubmit } from "components";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { startAddingUser } from "../../store/users/thunks";
import { v4 as uuid } from "uuid";
import { phoneNumberRegex } from "resources/regexValidators";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { startGetBusiness } from "store/business/thunks";
import { addressValidationSchema } from "assets/addressValidationSchema";

export const AddUser = () => {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.businessReducer);

  useEffect(() => {
    dispatch(startGetBusiness());
    // When charging the page for the first time, the data is undefined, so we need to wait for the data to be loaded
  }, []);

  if (!data) {
    // As long as the data is not loaded, we will show a loading message.
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: "asdfasdf",
          email: "asdfasdf@asdf.com",
          nationality: "asdfasdf",
          phone: "6183259226",
          address: {
            city: "asdfasdf",
            colony: "asdfasdf",
            street: "asdfasdf",
            streetNumber: "asdfasdf",
            unitNumber: "asdfasdf",
            municipality: "asdfasdf",
            state: "asdfasdf",
            country: "asdfasdf",
            zipCode: "asdfasdf",
          },
          businessRepresentative: "asdfasdf",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("El nombre es requerido"),
          email: Yup.string()
            .email("Ese no es un correo valido")
            .required("El correo es requerido"),
          nationality: Yup.string().required("¿Qué nacionalidad tienes?"),
          phone: Yup.string().matches(
            phoneNumberRegex,
            "Numero de telefono invalido"
          ),
          address: addressValidationSchema,
          businessRepresentative: Yup.string().required(
            "¿Qué empresa representas?"
          ),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            startAddingUser(
              {
                id: uuid(),
                ...values,
              },
              resetForm
            )
          );
        }}
        isInitialValid={false}
      >
        {({ handleSubmit, isValid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Input name="name" nameDisplayed="Nombre" />
            <Input name="email" nameDisplayed="Email" type="mail" />
            <Input name="nationality" nameDisplayed="Nacionalidad" />
            <Input name="phone" nameDisplayed="Numero celular" />
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
            <Input
              name="businessRepresentative"
              nameDisplayed="Empresa representada"
              type="select"
              options={data}
            />

            <ButtonSubmit text="Crear nuevo usuario" disabled={!isValid} />
          </form>
        )}
      </Formik>
    </div>
  );
};
