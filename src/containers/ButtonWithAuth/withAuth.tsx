import React from "react";
import { useOverlayFlow, useUser } from "../../store/Auth";

// HOC to wrap button with context check
const withAuth = <
  T extends { onClick?: React.MouseEventHandler<HTMLButtonElement> }
>(
  WrappedComponent: React.FC<T>
) => {
  return (props: T) => {
    const { user } = useUser();
    const { setOverlayFlow } = useOverlayFlow();

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();
      if (!user) {
        setOverlayFlow("signin");
        return;
      }

      if (props.onClick) {
        props.onClick(e);
        return;
      }

      alert("function not implemented");
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
};

export default withAuth;
