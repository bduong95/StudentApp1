import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "./StudentForm";

import "./index.css";

const App = () => (
  <div>
    <h1>This is Student App 1. The source</h1>
    <StudentForm></StudentForm>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
