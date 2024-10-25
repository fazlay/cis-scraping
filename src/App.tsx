import { columns } from "./payments/columns";
import { ListComponent } from "./ListComponent";
import PythonFileRunner from "./PythonFileRunner";

import "./App.css";

function App() {
  const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
  return (
    <>
      <PythonFileRunner />
      <ListComponent columns={columns} data={data} />
    </>
  );
}

export default App;
