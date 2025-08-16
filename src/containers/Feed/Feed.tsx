import React, { useState } from "react";
import PostEditor from "../../components/PostEditor";
import Post from "../../components/Post";
import { dateGenerator } from "./dateGenerator";
import { getRandomEmoji } from "../../components/Post/mockEmoji";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      imageUrl: "https://picsum.photos/48",
      emoji: getRandomEmoji(),
    },
    {
      id: 2,
      author: "Jane Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      imageUrl: "https://picsum.photos/48",
      emoji: getRandomEmoji(),
    },
    {
      id: 3,
      author: "Mike Johnson",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      imageUrl: "https://picsum.photos/48",
      emoji: getRandomEmoji(),
    },
    {
      id: 4,
      author: "Sarah Williams",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      imageUrl: "https://picsum.photos/48",
      emoji: getRandomEmoji(),
    },
    {
      id: 5,
      author: "David Brown",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel.",
      timestamp: dateGenerator(),
      imageUrl: "https://picsum.photos/48",
      emoji: getRandomEmoji(),
    },
  ]);

  const sortedPosts = posts.sort((a, b) =>
    b.timestamp.localeCompare(a.timestamp)
  );

  return (
    <div className="flex items-center justify-center bg-background p-4 mt-20">
      <div className="w-full max-w-2xl mx-auto relative">
        <div className="sticky top-16 z-100">
          <div className="bg-white py-2 w-full">
            <PostEditor />
          </div>
          <div className="h-5 w-full bg-gradient-to-b from-white to-transparent" />
        </div>
        <div className="flex flex-col gap-5">
          {sortedPosts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              timestamp={post.timestamp}
              imageUrl={post.imageUrl}
              emoji={post.emoji}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
