import React from "react";

function card({quote}){
    return(
        <div className="q-card">
            <p>“{quote.quote}”</p>
            <p><i> -{quote.author}</i></p>
        </div>
    );
}

export default card;