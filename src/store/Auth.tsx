import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type User = {
  username: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  overlayFlow: "signin" | "signup" | null;
  setOverlayFlow: (flow: "signin" | "signup" | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [overlayFlow, setOverlayFlow] =
    useState<AuthContextType["overlayFlow"]>(null);

  return (
    <AuthContext.Provider
      value={{ user, setUser, overlayFlow, setOverlayFlow }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a AuthProvider");
  }

  const { user, setUser } = context;
  return { user, setUser };
};

export const useOverlayFlow = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useOverlayFlow must be used within a AuthProvider");
  }

  const { overlayFlow, setOverlayFlow } = context;
  return { overlayFlow, setOverlayFlow };
};
