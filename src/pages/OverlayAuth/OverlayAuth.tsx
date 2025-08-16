import React from "react";
import { Outlet, useLocation } from "react-router";
import SignIn from "../../containers/SignIn";
import SignUp from "../../containers/SignUp";
import { useOverlayFlow } from "../../store/Auth";

const OverlayAuth: React.FC = () => {
  const { pathname } = useLocation();
  const isAuthPage = ["/signin", "/signup"].includes(pathname);
  const { overlayFlow } = useOverlayFlow();

  if (overlayFlow && !isAuthPage)
    return (
      <>
        <div className="fixed inset-0 w-full h-full bg-black/50 flex justify-center items-center z-[1000]">
          {overlayFlow === "signin" && <SignIn />}
          {overlayFlow === "signup" && <SignUp />}
        </div>
        <Outlet />
      </>
    );

  return <Outlet />;
};

export default OverlayAuth;
