import Router from "../app/Router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="DashboardLayout">
      <Header />

      <Sidebar />

      <main className="MainContainer">
        <Router />
      </main>
    </div>
  );
};

export default DashboardLayout;
