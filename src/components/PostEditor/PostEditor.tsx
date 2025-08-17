import { useState } from "react";
import Block from "../Block";
import BottomToolbar from "./BottomToolbar";
import FormattingToolbar from "./FormattingToolbar";
import InputArea from "./InputArea";
import { getRandomEmoji } from "../Post/mockEmoji";
import type { PostType } from "./PostType";

const PostEditor = ({
  onComplete: handleComplete,
}: {
  onComplete: (payload: PostType) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSave = () => {
    if (inputValue.trim() === "") {
      alert("Post content not provided");
      return;
    }
    const payload: PostType = {
      id: Date.now(),
      content: inputValue.trim(),
      timestamp: new Date().toISOString(),
      author: { name: "You", imageUrl: "/you.webp" },
      emoji: getRandomEmoji(),
    };

    handleComplete(payload);
    setInputValue("");
  };

  return (
    <Block>
      <FormattingToolbar />
      <InputArea value={inputValue} onChange={setInputValue} />
      <BottomToolbar onSave={handleSave} />
    </Block>
  );
};

export default PostEditor;
