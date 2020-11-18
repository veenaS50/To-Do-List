import React from "react"

function Joke(props){
    
    return (
    <div>
      <h3 style={{display: !props.jokes.question && "none"}}>Question: {props.jokes.question}</h3>
      <h3 style={{color: !props.jokes.punchline && "#888888"}}>Punchline: {props.jokes.punchline}</h3>
      <hr/>
    </div>
    )
}


export default Joke