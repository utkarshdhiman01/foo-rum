import { Outlet, useLocation } from "react-router";
import Header from "../../components/Header";

const Layout = () => {
  const { pathname } = useLocation();

  const isAuthPage = ["/signin", "/signup"].includes(pathname);

  return (
    <>
      <Header isAuthPage={isAuthPage} />
      <main className="pt-16 min-h-screen flex flex-col">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
