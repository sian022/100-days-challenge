import { Router as BrowserRouter, Route } from "preact-iso";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Temp from "../pages/Temp";

export const NAV_ITEMS = [
  {
    label: "Home",
    path: "/",
    component: Home,
  },
  {
    label: "Temp",
    path: "/temp",
    component: Temp,
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      {NAV_ITEMS.map((nav) => (
        <Route key={nav.path} path={nav.path} component={nav.component} />
      ))}
      <NotFound default />
    </BrowserRouter>
  );
};

export default Router;
