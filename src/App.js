import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeRoute } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
