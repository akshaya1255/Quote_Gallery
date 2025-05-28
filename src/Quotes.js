import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './App.css';
import { useNavigate } from "react-router-dom";
import loadergif from './Spinner.gif';

function Quotes(){
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [totalQuotes, setTotalQuotes] = useState(0);
  const limit = 9;
  const navigate = useNavigate();

  useEffect(() => {
    const skip = (pages-1)*limit;
    axios.get(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`)
    .then((res) =>{
      setQuotes(res.data.quotes);
      setLoading(false);
      setTotalQuotes(res.data.total);
    })
    .catch(err => {
            console.log(err);
            setLoading(false);
        });
  }, [pages]);

    if(loading)return(
        <div className="loader">
            <img src={loadergif} alt="Loading..." className="load"/>
        </div>
    )
    
const totalPages = Math.ceil(totalQuotes/limit);

  return(
    <div className="App">
      <Navbar />
      <div className="tot-list">
        {quotes.map((quotes, ind) => (
          <Card key={ind} quote={quotes} onClick={()=> navigate(`/quotes/${quotes.id}`)}/>
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

export default Quotes;
