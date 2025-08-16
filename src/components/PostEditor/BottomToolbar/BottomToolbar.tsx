import Plus from "./assets/plus.svg?react";
import Mic from "./assets/mic.svg?react";
import VideoCamera from "./assets/video-camera.svg?react";
import Send from "./assets/send.svg?react";
import ButtonWithAuth from "../../../containers/ButtonWithAuth";

const BottomToolbar = ({ onSave: handleSave }: { onSave: () => void }) => {
  const leftButtons = [
    {
      icon: <Plus />,
      className: "rounded-xl !bg-stone-100 hover:!bg-stone-50",
    },
    { icon: <Mic />, className: "rounded-xl" },
    { icon: <VideoCamera />, className: "rounded-xl" },
  ];

  return (
    <div className="flex items-center justify-between p-2 border-t border-stone-200">
      <div className="flex items-center gap-2">
        {leftButtons.map((button, index) => (
          <ButtonWithAuth
            key={index}
            iconOnly
            variant="gamma"
            className={button.className}
          >
            {button.icon}
          </ButtonWithAuth>
        ))}{" "}
      </div>

      <ButtonWithAuth
        iconOnly
        onClick={handleSave}
        className="hover:bg-transparent hover:shadow-none hover:scale-110 !p-0.5 transition-transform ease-linear"
      >
        <Send />
      </ButtonWithAuth>
    </div>
  );
};

export default BottomToolbar;
