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
import Footer from "./Footer";
import './App.css';

function App(){
  const [quotes, setQuotes] = useState([]);

  const [pages, setPages] = useState(1);
  const [totalQuotes, setTotalQuotes] = useState(0);
  const limit = 9;

  useEffect(() => {
    const skip = (pages-1)*limit;
    axios.get(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`)
    .then((res) =>{
      setQuotes(res.data.quotes);
      setTotalQuotes(res.data.total);
    })
    .catch((err) => console.log(err));
  }, [pages]);

const totalPages = Math.ceil(totalQuotes/limit);

  return(
    <div className="App">
      <Navbar />
      <div className="tot-list">
        {quotes.map((quotes, ind) => (
          <Card key={ind} quote={quotes}/>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPages((pagenum) => Math.max(pagenum-1, 1))} disabled={pages===1}>
          &lt;&lt;
        </button>

        <span>Page {pages} of {totalPages}</span>

        <button onClick={() => setPages((pagenum) => Math.min(pagenum+1, totalPages))} disabled={pages===totalPages}>
          &gt;&gt;
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;