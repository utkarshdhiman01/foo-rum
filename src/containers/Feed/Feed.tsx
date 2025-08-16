import React from "react";
import PostEditor from "../../components/PostEditor";
import Post from "../../components/Post";

const Feed: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-background p-4 mt-20">
      <div className="w-full max-w-2xl mx-auto relative">
        <div className="sticky top-16 z-100">
          <div className="bg-white py-2 w-full">
            <PostEditor />
          </div>
          <div className="h-5 w-full bg-gradient-to-b from-white to-transparent" />
        </div>
        <Post
          author="Aurthor concan doyle"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel, rerum assumenda harum optio reprehenderit commodi consectetur ipsa aut eligendi ab voluptates at."
          timestamp="4 vaj gye"
          id="1"
        />
        <Post
          author="Aurthor concan doyle"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel, rerum assumenda harum optio reprehenderit commodi consectetur ipsa aut eligendi ab voluptates at."
          timestamp="4 vaj gye"
          id="1"
        />
        <Post
          author="Aurthor concan doyle"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel, rerum assumenda harum optio reprehenderit commodi consectetur ipsa aut eligendi ab voluptates at."
          timestamp="4 vaj gye"
          id="1"
        />
        <Post
          author="Aurthor concan doyle"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel, rerum assumenda harum optio reprehenderit commodi consectetur ipsa aut eligendi ab voluptates at."
          timestamp="4 vaj gye"
          id="1"
        />
      </div>
    </div>
  );
};

export default Feed;
