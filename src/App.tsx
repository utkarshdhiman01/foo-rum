import Post from "./components/Post";
import PostEditor from "./components/PostEditor";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl mx-auto">
        <PostEditor />
        <Post
          author="Aurthor concan doyle"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum fuga ducimus! Ipsum provident esse aliquid, iusto velit inventore libero eaque necessitatibus odit explicabo deserunt facere modi adipisci. Facere ex quisquam similique numquam, quo saepe tempora vel, rerum assumenda harum optio reprehenderit commodi consectetur ipsa aut eligendi ab voluptates at."
          timestamp="4 vaj gye"
          id="1"
        />
      </div>
    </div>
  );
}

export default App;
