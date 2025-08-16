import { Route, Routes } from "react-router";
import Feed from "./pages/Feed";
import Input from "./components/Input";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Header from "./components/Header";
import Layout from "./containers/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <div className="p-40">
              <SignUp />
            </div>
          }
        />
        {/* <Route path="/" element={<Feed />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
