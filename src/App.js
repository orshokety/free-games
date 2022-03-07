import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SerchBar from "./components/SerchBar";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  function searchData(searchInput){
    console.log(searchInput)
  }

  return (
    <Router>
      <div className="App">
        <SerchBar searchData={searchData} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/game/:id" element={<Details/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
