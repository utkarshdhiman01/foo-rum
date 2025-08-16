// Input component with label positioned above using Tailwind CSS
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-semibold">{label}</label>}
      <input
        className="px-3 py-2 text-sm bg-stone-100 rounded-lg focus:outline-none"
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
