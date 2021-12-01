import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Neo4jProvider, createDriver } from "use-neo4j";

const driver = createDriver(
  "neo4j",
  process.env.REACT_APP_URI ?? "",
  7687,
  "neo4j",
  process.env.REACT_APP_PASSWORD
);

ReactDOM.render(
  <Neo4jProvider driver={driver}>
    {" "}
    <App />{" "}
  </Neo4jProvider>,
  document.getElementById("root")
);
