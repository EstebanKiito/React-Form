import { useFormContext } from "react-hook-form";

function Input({ children, name }) {
  const { register } = useFormContext(); // Conectamos con el Provider
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        {...register(name)} // Al apretar submit, este valor se guardara con register
        type="text"
        className="form-control"
        id={name}
      />
    </div>
  );
}

export default Input;
