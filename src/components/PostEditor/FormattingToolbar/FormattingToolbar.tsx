import Seperator from "../../Separator/Seperator";
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
import type { ButtonProps } from "../../Button/ButtonProps";
import type { JSX } from "react";

type ButtonItem = {
  content?: string;
  variant: ButtonProps["variant"];
  rightIcon?: JSX.Element;
  iconOnly?: boolean;
  icon?: JSX.Element;
  className?: string;
  isSeperator: false;
};

type SeparatorItem = {
  isSeperator: true;
  hasDivider?: boolean;
};

const FormattingToolbar = () => {
  const leftButtons: Array<ButtonItem | SeparatorItem> = [
    {
      content: "Paragraph",
      variant: "active",
      rightIcon: <ChevronDown />,
      isSeperator: false,
    },
    { isSeperator: true },
    {
      icon: <Bold />,
      variant: "active",
      className: "font-bold",
      iconOnly: true,
      isSeperator: false,
    },
    {
      icon: <Italic />,
      variant: "gamma",
      iconOnly: true,
      isSeperator: false,
    },
    {
      icon: <Underline />,
      variant: "gamma",
      iconOnly: true,
      isSeperator: false,
    },
    { isSeperator: true, hasDivider: true },
    {
      icon: <DotList />,
      variant: "gamma",
      iconOnly: true,
      isSeperator: false,
    },
    {
      icon: <NumberList />,
      variant: "gamma",
      iconOnly: true,
      isSeperator: false,
    },
    { isSeperator: true, hasDivider: true },
    {
      icon: <Quotes />,
      variant: "gamma",
      iconOnly: true,
      isSeperator: false,
    },
    {
      icon: <Code />,
      variant: "gamma",
      iconOnly: true,
      isSeperator: false,
    },
  ];

  return (
    <div className="flex items-center justify-between p-2 gap-2">
      {/* Left side buttons */}
      <div className="flex items-center space-x-2 bg-stone-100 rounded-xl p-1.5 gap-1">
        {/* this is not interactive so keeping it as button instead of dropdown for simplicity */}
        {leftButtons.map((item, index) =>
          item.isSeperator ? (
            <Seperator key={index} hasDivider={item.hasDivider} />
          ) : (
            <ButtonWithAuth
              key={index}
              variant={item.variant}
              rightIcon={item.rightIcon}
              iconOnly={item.iconOnly}
              className={item.className}
            >
              {item.content || item.icon}
            </ButtonWithAuth>
          )
        )}{" "}
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
