import React, { useRef, useState } from "react";
import PostEditor from "../../components/PostEditor";
import Post from "../../components/Post";
import { dateGenerator } from "./dateGenerator";
import { getRandomEmoji } from "../../components/Post/mockEmoji";
import type { PostType } from "../../components/PostEditor/PostType";

const Feed: React.FC = () => {
  const beforeFirstPost = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<Array<PostType>>([
    {
      id: 1,
      author: { name: "John Doe", imageUrl: "/john.jpg" },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      emoji: getRandomEmoji(),
    },
    {
      id: 2,
      author: { name: "Jane Smith", imageUrl: "/jane.jpg" },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      emoji: getRandomEmoji(),
    },
    {
      id: 3,
      author: { name: "Mike Johnson", imageUrl: "/mike.jpg" },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      emoji: getRandomEmoji(),
    },
    {
      id: 4,
      author: { name: "Sarah Williams", imageUrl: "/sarah.jpg" },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      emoji: getRandomEmoji(),
    },
    {
      id: 5,
      author: { name: "David Brown", imageUrl: "/david.jpg" },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      emoji: getRandomEmoji(),
    },
  ]); // can move out to context or redux for larger project and caching purposes

  const sortedPosts = posts.sort((a, b) =>
    b.timestamp.localeCompare(a.timestamp)
  );

  const scrollToFirstPost = () => {
    if (beforeFirstPost.current) {
      beforeFirstPost.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  const handleComplete = (post: PostType) => {
    setPosts((prev) => [post, ...prev]);
    scrollToFirstPost();
  };

  return (
    <div className="flex items-center justify-center bg-background p-4 mt-20">
      <div className="w-full max-w-2xl mx-auto relative">
        <div className="sticky top-16 z-100">
          <div className="bg-white py-2 w-full">
            <PostEditor onComplete={handleComplete} />
          </div>
          <div className="h-5 w-full bg-gradient-to-b from-white to-transparent" />
        </div>
        <div ref={beforeFirstPost} />
        <div className="flex flex-col gap-5">
          {sortedPosts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              timestamp={post.timestamp}
              emoji={post.emoji}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
