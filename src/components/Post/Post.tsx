import Block from "../Block";
import Image from "../Image";
import Heart from "./assets/heart.svg?react";
import Share from "./assets/share.svg?react";
import Comment from "./assets/comment.svg?react";
import { formatTimestamp } from "./formatTimestamp";
import ButtonWithAuth from "../../containers/ButtonWithAuth";
import type { PostProps } from "./PostProps";

const Post: React.FC<PostProps> = ({ author, timestamp, content, emoji }) => {
  const actions = (
    <div className="flex gap-2">
      {[{ icon: Heart }, { icon: Comment }, { icon: Share }].map(
        ({ icon: Icon }, index) => (
          <ButtonWithAuth
            key={index}
            iconOnly
            className="hover:bg-transparent hover:shadow-none hover:scale-110 transition-transform ease-linear"
          >
            <Icon />
          </ButtonWithAuth>
        )
      )}{" "}
    </div>
  );

  return (
    <Block actions={actions}>
      <div className="p-2">
        <div className="flex items-center mb-2">
          <div className="flex gap-2">
            <Image
              src={author?.imageUrl}
              height={48}
              width={48}
              className="rounded-xl"
            />
            <div className="py-1">
              <h3 className="font-semibold text-sm">{author?.name}</h3>
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
