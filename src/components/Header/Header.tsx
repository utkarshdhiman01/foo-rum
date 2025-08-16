import { useNavigate } from "react-router";
import Mouse from "./mouse.svg?react";
import SignInIcon from "./sign-in.svg?react";
import type { User } from "../../store/Auth";
import ButtonWithAuth from "../../containers/ButtonWithAuth";

const logo = (
  <div className="flex gap-2 items-center justify-center">
    <div className="rotate-90">
      <Mouse />
    </div>
    <span className="font-bold text-sm">foo-rum</span>
  </div>
);

const Header = ({
  user,
  isAuthPage,
}: {
  user?: User | null;
  isAuthPage: boolean;
}) => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/signin");
  };
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <header className="h-16 bg-white fixed top-0 left-0 right-0 flex items-center justify-between px-4 z-1000">
      {logo}
      {isAuthPage && !user && (
        <ButtonWithAuth
          variant="gamma"
          className="text-sm"
          onClick={navigateToHome}
        >
          Back to home
        </ButtonWithAuth>
      )}{" "}
      {!isAuthPage && !user && (
        <ButtonWithAuth
          variant="gamma"
          className="text-sm"
          onClick={navigateToLogin}
          rightIcon={<SignInIcon />}
        >
          Login
        </ButtonWithAuth>
      )}
      {user && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-ellipsis" title={user.username}>
            {user.username}
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
