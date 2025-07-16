function Button({ variant = "primary", children }) {
  return (
    <button type="submit" className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

export default Button;
