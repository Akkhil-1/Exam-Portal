import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "@/pages/Authentication/SignInPage";
import SignUp from "@/pages/Authentication/SignUpPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import UserDashboardPage from "@/pages/UserDashboardPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<UserDashboardPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
