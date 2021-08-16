import React from "react";
// import "./App.css";
import Table from "./components/Table";
import Form from "./components/form";
import YupForm from "./components/yupForm";
const App = () => {
  return (
    <div>
      <div style={{ padding: "0px 10px", marginLeft: -70 }}>
        <YupForm />
      </div>
      <div style={{ padding: "0px 10px", marginLeft: -100 }}>
        <Table />
      </div>
    </div>
  );
};

export default App;
