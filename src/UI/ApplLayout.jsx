import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function ApplLayout() {
  return (
    <div>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ApplLayout;
