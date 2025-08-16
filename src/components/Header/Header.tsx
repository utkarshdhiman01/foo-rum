import Button from "../Button";
import Mouse from "./mouse.svg?react";
import SignInIcon from "./sign-in.svg?react";

const logo = (
  <div className="flex gap-2 items-center justify-center">
    <div className="rotate-90">
      <Mouse />
    </div>
    <span className="font-bold text-sm">foo-rum</span>
  </div>
);

// Header component with logo and action button
const Header = ({ isAuthPage }: { isAuthPage?: boolean }) => {
  return (
    <header className="h-16 bg-white fixed top-0 left-0 right-0 flex items-center justify-between px-4 z-1000">
      {logo}
      {isAuthPage ? (
        <Button variant="gamma" className="text-sm">
          Back to home
        </Button>
      ) : (
        <Button variant="gamma" className="text-sm" rightIcon={<SignInIcon />}>
          Login
        </Button>
      )}
    </header>
  );
};

export default Header;
