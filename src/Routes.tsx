import { Route, Routes } from "react-router";
import Feed from "./containers/Feed";
import Layout from "./containers/Layout";
import SignupPage from "./pages/SignUp";
import SigninPage from "./pages/SignIn";
import OverlayAuth from "./pages/OverlayAuth";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<OverlayAuth />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/" element={<Feed />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
