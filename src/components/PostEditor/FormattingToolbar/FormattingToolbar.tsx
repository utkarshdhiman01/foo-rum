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
import ButtonWithAuth from "../../../containers/ButtonWithAuth";

const FormattingToolbar = () => {
  return (
    <div className="flex items-center justify-between p-2 gap-2">
      {/* Left side buttons */}
      <div className="flex items-center space-x-2 bg-stone-100 rounded-xl p-1.5 gap-1">
        {/* this is not interactive so keeping it as button instead of dropdown for simplicity */}
        <ButtonWithAuth variant="active" rightIcon={<ChevronDown />}>
          Paragraph
        </ButtonWithAuth>
        <Seperator />
        <ButtonWithAuth iconOnly variant="active" className="font-bold">
          <Bold />
        </ButtonWithAuth>
        <ButtonWithAuth iconOnly>
          <Italic />
        </ButtonWithAuth>
        <ButtonWithAuth iconOnly>
          <Underline />
        </ButtonWithAuth>
        <Seperator hasDivider />
        <ButtonWithAuth iconOnly>
          <DotList />
        </ButtonWithAuth>
        <ButtonWithAuth iconOnly>
          <NumberList />
        </ButtonWithAuth>
        <Seperator hasDivider />
        <ButtonWithAuth iconOnly>
          <Quotes />
        </ButtonWithAuth>
        <ButtonWithAuth iconOnly>
          <Code />
        </ButtonWithAuth>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-2">
        <ButtonWithAuth variant="danger" iconOnly className="rounded-xl">
          <Bin />
        </ButtonWithAuth>
      </div>
    </div>
  );
};

export default FormattingToolbar;
