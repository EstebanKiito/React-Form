function List({ contacts, onClick }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">ID</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr
            style={{ cursor: "pointer" }}
            key={c.id}
            onClick={() => onClick(c.id)}
          >
            <td>{c.name}</td>
            <td>{c.lastname}</td>
            <td>{c.email}</td>
            <td>{c.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
