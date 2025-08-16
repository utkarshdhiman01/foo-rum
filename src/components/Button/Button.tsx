import type { ButtonProps } from "./ButtonProps";

const Button: React.FC<ButtonProps> = ({
  variant,
  rightIcon,
  iconOnly,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-md text-sm transition-colors min-w-8 hover:bg-stone-50 cursor-pointer hover:shadow mx-0 text-base";

  const variantStyles = variant
    ? {
        active: "bg-white text-slate-900 shadow-sm",
        danger: "bg-red-100 text-white hover:bg-red-600",
        gamma: "bg-transparent",
      }[variant]
    : "";

  return (
    <button
      className={`
        ${iconOnly ? "p-2.5" : "p-2"}
        ${baseStyles}
        ${variantStyles}
        ${className || ""}
      `}
      {...props}
    >
      {children}
      {!iconOnly && rightIcon}
    </button>
  );
};

export default Button;
