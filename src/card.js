import React from "react";

function Card({quote, onClick}){
    return(
        <div className="q-card" onClick={onClick}>
            <p>“{quote.quote}”</p>
            <p><i> -{quote.author}</i></p>
        </div>
    );
}

export default Card;