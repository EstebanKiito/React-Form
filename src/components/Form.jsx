import Input from "./Input";

function Form() {
  return (
    <form>
      <Input>Nombre</Input>
      <Input>Apellido</Input>
      <Input>Correo Electrónico</Input>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
