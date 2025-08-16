import Block from "../Block";
import Button from "../Button";
import Image from "../Image";
import Heart from "./heart.svg?react";
import Share from "./share.svg?react";
import Comment from "./comment.svg?react";
import { formatTimestamp } from "./formatTimestamp";

interface PostProps {
  author: string;
  avatar?: string;
  timestamp: string;
  content: string;
  imageUrl: string;
  emoji: string;
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

const Post = ({ author, timestamp, content, imageUrl, emoji }: PostProps) => {
  return (
    <Block actions={actions}>
      <div className="p-2">
        <div className="flex items-center mb-2">
          <div className="flex gap-2">
            <Image
              src={imageUrl}
              height={48}
              width={48}
              className="rounded-xl"
            />
            <div className="py-1">
              <h3 className="font-semibold text-sm">{author}</h3>
              <p className="text-stone-400 text-xs">
                {formatTimestamp(timestamp)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-2">
          <div className="p-1">
            <div className="bg-stone-100 rounded-full p-2 self-start w-10 h-10 flex items-center justify-center aspect-square">
              {emoji}
            </div>
          </div>
          <p className="leading-relaxed">{content}</p>
        </div>
      </div>
    </Block>
  );
};

export default Post;
