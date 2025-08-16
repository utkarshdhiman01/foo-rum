import { Outlet, useLocation } from "react-router";
import Header from "../../components/Header";
import { useUser } from "../../store/Auth";

const Layout = () => {
  const { pathname } = useLocation();

  const isAuthPage = ["/signin", "/signup"].includes(pathname);
  const { user } = useUser();

  return (
    <>
      <Header isAuthPage={isAuthPage} user={user} />
      <main className="pt-16 min-h-screen flex flex-col">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
