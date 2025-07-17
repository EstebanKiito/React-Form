import { useForm } from "react-hook-form";
import Input from "./Input";
import { FormProvider } from "react-hook-form";
import Button from "./Button";
import { contactSchema, category } from "./schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";

function Form({ onSubmit }) {
  // Añadir react-hook-form aquí si es necesario
  const methods = useForm({
    resolver: zodResolver(contactSchema), // Usamos zod para validar el formulario
  });
  return (
    // Con FormProvider podemos envolver el formulario y usar los métodos de react-hook-form
    // {...methods} esparce los métodos de react-hook-form para que estén disponibles en los componentes hijos (Input)
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Email</Input>
        <Select
          name="type"
          label="Tipo"
          options={category}
          defaultMessage="---Seleccione una categoría---"
        />
        <Button>Enviar</Button>
      </form>
    </FormProvider>
  );
}

export default Form;
