import { Route, Routes } from "react-router";
import Feed from "./containers/Feed";
import Layout from "./containers/Layout";
import SignupPage from "./pages/SignUp";
import SigninPage from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/" element={<Feed />} />
      </Route>
    </Routes>
  );
}

export default App;
