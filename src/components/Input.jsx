function Input({ children }) {
  return (
    <div class="mb-3">
      <label htmlFor="exampleInputEmail1" class="form-label">
        {children}
      </label>
      <input
        type="name"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
  );
}

export default Input;
