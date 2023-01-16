import { Route, Routes } from "react-router-dom/dist";
import "./App.css";
import Movies from "./components/Movies/Movies";
import SingleMovie from "./components/SingleMovie/SingleMovie";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/:id" element={<SingleMovie />} />
      </Routes>
    </>
  );
};
export default App;
