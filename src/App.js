import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
