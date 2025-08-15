import { useState } from "react";
import EditorButton from "../../Button";
import Smile from "./assets/smile.svg?react";

const InputArea = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex py-4 px-2">
      <EditorButton iconOnly className="rounded-full self-start">
        <Smile />
      </EditorButton>
      <div className="flex-1">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="How are you feeling today?"
          className="w-full min-h-[120px] resize-none border-0 outline-none bg-transparent text-foreground placeholder:text-muted-foreground text-base leading-relaxed p-1"
        />
      </div>
    </div>
  );
};

export default InputArea;
