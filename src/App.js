import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quotes from "./Quotes";
import Detailed from "./Detailed";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/quotes/:id" element={<Detailed />} />
      </Routes>
    </Router>
  );
}

export default App;