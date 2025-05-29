import Header from "./Header";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
