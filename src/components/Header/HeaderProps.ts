import type { User } from "../../store/Auth";

export interface HeaderProps {
  user?: User | null;
  isAuthPage: boolean;
}
