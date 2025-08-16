export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "active" | "danger" | "gamma";
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  children: React.ReactNode;
}
