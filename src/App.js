import MarketList from "./components/MarketList/MarketList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MarketList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
