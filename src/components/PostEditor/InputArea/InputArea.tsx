import { useEffect } from "react";
import ButtonWithAuth from "../../../containers/ButtonWithAuth";
import Smile from "./assets/smile.svg?react";

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const InputArea = ({ value, onChange }: InputAreaProps) => {
  useEffect(() => {
    const storedValue = sessionStorage.getItem("inputAreaValue");
    if (storedValue) {
      onChange(storedValue);
    }
  }, [onChange]);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const newValue = event.target.value;
    sessionStorage.setItem("inputAreaValue", newValue);
    onChange(newValue);
  };

  return (
    <div className="flex py-4 px-2">
      <ButtonWithAuth iconOnly className="rounded-full self-start">
        <Smile />
      </ButtonWithAuth>
      <div className="flex-1">
        <textarea
          value={value}
          onChange={handleChange}
          placeholder="How are you feeling today?"
          className="w-full min-h-[120px] resize-none border-0 outline-none bg-transparent text-foreground placeholder:text-muted-foreground text-base leading-relaxed p-1"
        />
      </div>
    </div>
  );
};

export default InputArea;
