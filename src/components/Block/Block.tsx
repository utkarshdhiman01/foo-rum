import type { BlockProps } from "./BlockProps";

const Block: React.FC<BlockProps> = ({
  children,
  actions,
  className,
  ...props
}) => {
  return (
    <div {...props} className={"bg-stone-100 p-2 rounded-3xl " + className}>
      <div className="border border-stone-300 bg-white rounded-2xl shadow-sm overflow-hidden">
        {children}
      </div>
      {actions}
    </div>
  );
};

export default Block;
