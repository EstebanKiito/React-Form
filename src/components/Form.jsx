import { useForm } from "react-hook-form";
import Input from "./Input";
import { FormProvider } from "react-hook-form";
import Button from "./Button";
import { contactSchema } from "./schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";

function Form() {
  // Añadir react-hook-form aquí si es necesario
  const methods = useForm({
    resolver: zodResolver(contactSchema), // Usamos zod para validar el formulario
  });
  return (
    // Con FormProvider podemos envolver el formulario y usar los métodos de react-hook-form
    // {...methods} esparce los métodos de react-hook-form para que estén disponibles en los componentes hijos (Input)
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Email</Input>
        <Button>Enviar</Button>
      </form>
    </FormProvider>
  );
}

export default Form;
