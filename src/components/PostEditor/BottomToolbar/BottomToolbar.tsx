import EditorButton from "../../Button";
import Plus from "./assets/Plus.svg?react";
import Mic from "./assets/mic.svg?react";
import VideoCamera from "./assets/video-camera.svg?react";
import Send from "./assets/send.svg?react";

const BottomToolbar = () => {
  return (
    <div className="flex items-center justify-between p-2 border-t border-stone-200">
      <div className="flex items-center gap-2">
        <EditorButton
          iconOnly
          variant="gamma"
          className="rounded-xl !bg-stone-100 hover:!bg-stone-50"
        >
          <Plus />
        </EditorButton>
        <EditorButton iconOnly variant="gamma" className="rounded-xl">
          <Mic />
        </EditorButton>
        <EditorButton iconOnly variant="gamma" className="rounded-xl">
          <VideoCamera />
        </EditorButton>
      </div>

      {/* Done button */}
      <EditorButton
        iconOnly
        className="hover:bg-transparent hover:shadow-none hover:scale-110 !p-0.5 transition-transform ease-linear"
      >
        <Send />
      </EditorButton>
    </div>
  );
};

export default BottomToolbar;
