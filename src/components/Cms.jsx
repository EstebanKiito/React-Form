import Form from "./Form";
import List from "./List";

function Cms() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Form />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <List />
        </div>
      </div>
    </div>
  );
}

export default Cms;
