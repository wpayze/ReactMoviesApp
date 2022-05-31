import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from "./components/Index";
import SingleMovie from "./components/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;