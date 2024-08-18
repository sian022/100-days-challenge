import { render } from "preact";
import "./styles/main.scss";
import DashboardLayout from "./layouts/DashboardLayout";
import { LocationProvider } from "preact-iso";

export function App() {
  return (
    <LocationProvider>
      <DashboardLayout />;
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
