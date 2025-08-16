import { useNavigate } from "react-router";
import Mouse from "./assets/mouse.svg?react";
import SignInIcon from "./assets/sign-in.svg?react";
import Button from "../Button";
import type { HeaderProps } from "./HeaderProps";

const logo = (
  <div className="flex gap-2 items-center justify-center">
    <div className="rotate-90">
      <Mouse />
    </div>
    <span className="font-bold text-sm">foo-rum</span>
  </div>
);

const Header: React.FC<HeaderProps> = ({ user, isAuthPage }) => {
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
        <Button variant="gamma" className="text-sm" onClick={navigateToHome}>
          Back to home
        </Button>
      )}{" "}
      {!isAuthPage && !user && (
        <Button
          variant="gamma"
          className="text-sm"
          onClick={navigateToLogin}
          rightIcon={<SignInIcon />}
        >
          Login
        </Button>
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
