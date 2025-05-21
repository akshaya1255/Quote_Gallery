// import logo from './logo.svg';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import Navbar from "./Navbar";

import './App.css';

function App(){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/quotes?limit=1454&skip=0")
    .then((res) => setQuotes(res.data.quotes))
    .catch((err) => console.log(err));
  }, []);


  return(
    <div className="App">
      <Navbar />
      <div className="tot-list">
        {quotes.map((quotes, ind) => (
          <Card key={ind} quote={quotes}/>
        ))}
      </div>
    </div>
  );
}

export default App;