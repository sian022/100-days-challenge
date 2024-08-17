import { render } from "preact";
import "./styles/main.scss";
import Dashboard from "./pages/Dashboard";

export function App() {
  return <Dashboard />;
}

render(<App />, document.getElementById("app"));
