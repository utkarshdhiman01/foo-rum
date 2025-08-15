import Block from "../common/Block";
import BottomToolbar from "./BottomToolbar";
import FormattingToolbar from "./FormattingToolbar";
import InputArea from "./InputArea";

const PostEditor = () => {
  return (
    <Block>
      <FormattingToolbar />
      <InputArea />
      <BottomToolbar />
    </Block>
  );
};

export default PostEditor;
