import { NAV_ITEMS } from "../app/Router";

const Sidebar = () => {
  return (
    <div className="SidebarContainer">
      <nav className="Sidebar">
        <div className="Sidebar__LogoContainer">Logo</div>

        <ul className="Sidebar__NavList">
          {NAV_ITEMS.map((nav) => (
            <li key={nav.label} className="Sidebar__NavItem">
              <a href={nav.path}>{nav.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
