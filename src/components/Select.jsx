import { useFormContext } from "react-hook-form";

function Select({ label, defaultMessage, options, name }) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(label, formState);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        {...register(name)}
        className="form-select"
        aria-label="Default select example"
      >
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error?.message && <div className="text-danger">{error.message}</div>}
    </div>
  );
}

export default Select;
