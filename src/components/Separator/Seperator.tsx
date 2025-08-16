import type { SeparatorProps } from "./SeparatorProps";

const Separator: React.FC<SeparatorProps> = ({ hasDivider = false }) => {
  return (
    <div className="flex h-9 m-0">
      <div className={hasDivider ? "w-[7.5px]" : "w-2.5"}></div>
      {hasDivider && <div className="w-[1px] h-full bg-slate-300"></div>}
      <div className={hasDivider ? "w-[7.5px]" : "w-2.5"}></div>
    </div>
  );
};

export default Separator;
