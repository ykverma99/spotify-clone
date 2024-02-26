import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import useUser from "./hooks/useUser";
import { AudioProvider } from "./Context/AudioContext.jsx";

function App() {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <AudioProvider>
        <Routes>
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/search"
            element={user ? <Search /> : <Navigate to="/login" />}
          />
          <Route
            path="/playlist"
            element={user ? <Playlist /> : <Navigate to="/login" />}
          />
          <Route path="/playlist/:name" element={<Playlist />} />
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </AudioProvider>
    </BrowserRouter>
  );
}

export default App;
