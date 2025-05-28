import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Detailed.css"
import loadergif from './Spinner.gif';

function Detailed(){
    const {id} = useParams();
    const [quote, setQuote] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://dummyjson.com/quotes/${id}`)
        .then(res => {
            setQuote(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }, [id]);

    if(loading)return(
        <div className="loader">
            <img src={loadergif} alt="Loading..." className="load"/>
        </div>
    )
    if(!quote)return <p>Quote not found</p>

    return(
        <div className="whole">
            <Navbar />
            <div className="detailed">
                <div className="display">
                    <h1>“{quote.quote}”</h1>
                    <h4><i>  -{quote.author}</i></h4>
                </div>
                <Link to="/" className="back">← Back to Quotes</Link>
            </div>
            <Footer/>
        </div>
    );
}

export default Detailed;