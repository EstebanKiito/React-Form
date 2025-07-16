import Form from "./Form";
import List from "./List";
import { useState } from "react";

function Cms() {
  const [contacts, setContacts] = useState([]);
  const addContact = (contact) => {
    setContacts([
      ...contacts,
      {
        ...contact,
        id: Math.random().toString(),
      },
    ]);
  };
  console.log(contacts);

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Form onSubmit={addContact} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <List contacts={contacts} />
        </div>
      </div>
    </div>
  );
}

export default Cms;
