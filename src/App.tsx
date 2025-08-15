import { Route, Routes } from "react-router";
import Feed from "./pages/Feed";
import Input from "./components/Input";
import SignIn from "./containers/SignIn";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="p-40">
            <SignIn />
          </div>
        }
      />
      {/* <Route path="/" element={<Feed />} /> */}
    </Routes>
  );
}

export default App;
