interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({ children, actions, ...props }) => {
  return (
    <div className="bg-stone-100 p-2 rounded-3xl" {...props}>
      <div className="border border-stone-300 bg-white rounded-2xl shadow-sm overflow-hidden">
        {children}
      </div>
      {actions}
    </div>
  );
};

export default Block;
