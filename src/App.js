import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by{" "}
          <a href="https://pt.linkedin.com/in/susanavbarbosa" target="_blank">
            SUsana Barbosa{" "}
          </a>{" "}
          and
          <a
            href="https://github.com/susanavbarbosa/weatherbysubarbosa"
            target="_blank"
          >
            {" "}
            GitHub open-source
          </a>
        </footer>
      </div>
    </div>
  );
}
