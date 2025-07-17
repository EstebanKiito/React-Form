function Button({ onClick, variant = "primary", children, type = "button" }) {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`} type={type}>
      {children}
    </button>
  );
}

export default Button;
