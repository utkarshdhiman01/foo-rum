import Block from "../common/Block";
import Button from "../common/Button";
import Image from "../common/Image";
import Heart from "./heart.svg?react";
import Share from "./share.svg?react";
import Comment from "./comment.svg?react";

import { getRandomEmoji } from "./mockEmoji";

interface PostProps {
  id: string;
  author: string;
  avatar?: string;
  timestamp: string;
  content: string;
}

const actions = (
  <div className="flex gap-2">
    <Button
      iconOnly
      className="hover:bg-transparent hover:shadow-none hover:scale-110 transition-transform ease-linear"
    >
      <Heart />
    </Button>
    <Button
      iconOnly
      className="hover:bg-transparent hover:shadow-none hover:scale-110 transition-transform ease-linear"
    >
      <Comment />
    </Button>
    <Button
      iconOnly
      className="hover:bg-transparent hover:shadow-none hover:scale-110 transition-transform ease-linear"
    >
      <Share />
    </Button>
  </div>
);

const Post = ({ author, timestamp, content }: PostProps) => {
  return (
    <Block actions={actions}>
      <div className="p-2">
        <div className="flex items-center mb-2">
          <div className="flex gap-2">
            <Image
              src="https://picsum.photos/48"
              height={48}
              width={48}
              className="rounded-xl"
            />
            <div className="py-1">
              <h3 className="font-semibold text-sm">{author}</h3>
              <p className="text-stone-400 text-xs">{timestamp}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-2">
          <div className="p-1">
            <div className="bg-stone-100 rounded-full p-2 self-start w-10 h-10 flex items-center justify-center aspect-square">
              {getRandomEmoji()}
            </div>
          </div>
          <p className="leading-relaxed">{content}</p>
        </div>
      </div>
    </Block>
  );
};

export default Post;
