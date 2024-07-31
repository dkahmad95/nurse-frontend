import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import CompleteProfile from "./pages/CompleteProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
      
          <Route path="/profile" element={<Profile />} />
          <Route path="/completeProfile" element={<CompleteProfile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
