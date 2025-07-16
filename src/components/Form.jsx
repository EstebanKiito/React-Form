import { useForm } from "react-hook-form";
import Input from "./Input";
import { FormProvider } from "react-hook-form";

function Form() {
  // Añadir react-hook-form aquí si es necesario
  const methods = useForm();
  return (
    // Con FormProvider podemos envolver el formulario y usar los métodos de react-hook-form
    // {...methods} esparce los métodos de react-hook-form para que estén disponibles en los componentes hijos (Input)
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name">Nombre</Input>
        <Input name="email">Email</Input>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </FormProvider>
  );
}

export default Form;
