import EditorButton from "../../common/Button";
import Seperator from "./Seperator";
import ChevronDown from "./assets/chevron-down.svg?react";
import DotList from "./assets/list-with-dots.svg?react";
import NumberList from "./assets/list-with-numbers.svg?react";
import Quotes from "./assets/quotes.svg?react";
import Code from "./assets/code.svg?react";
import Bold from "./assets/Bold.svg?react";
import Underline from "./assets/Underline.svg?react";
import Italic from "./assets/Italic.svg?react";
import Bin from "./assets/bin.svg?react";

const FormattingToolbar = () => {
  return (
    <div className="flex items-center justify-between p-2 gap-2">
      {/* Left side buttons */}
      <div className="flex items-center space-x-2 bg-stone-100 rounded-xl p-1.5 gap-1">
        {/* this is not interactive so keeping it as button instead of dropdown for simplicity */}
        <EditorButton variant="active" rightIcon={<ChevronDown />}>
          Paragraph
        </EditorButton>
        <Seperator />
        <EditorButton iconOnly variant="active" className="font-bold">
          <Bold />
        </EditorButton>
        <EditorButton iconOnly>
          <Italic />
        </EditorButton>
        <EditorButton iconOnly>
          <Underline />
        </EditorButton>
        <Seperator hasDivider />
        <EditorButton iconOnly>
          <DotList />
        </EditorButton>
        <EditorButton iconOnly>
          <NumberList />
        </EditorButton>
        <Seperator hasDivider />
        <EditorButton iconOnly>
          <Quotes />
        </EditorButton>
        <EditorButton iconOnly>
          <Code />
        </EditorButton>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-2">
        <EditorButton variant="danger" iconOnly className="rounded-xl">
          <Bin />
        </EditorButton>
      </div>
    </div>
  );
};

export default FormattingToolbar;
