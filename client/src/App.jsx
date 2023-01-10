import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import WriteP from "./pages/write/WriteP";
import Search from "./pages/search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context)
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/register" element={user ? <Homepage /> : <Register />}/>
        <Route path="/login" element={user ? <Homepage /> : <Login />}/>
        <Route path="/write" element={user ? <WriteP /> : <Register />}/>
        <Route path="/search" element={user ? <Search /> : <Register />}/>
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:id" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
