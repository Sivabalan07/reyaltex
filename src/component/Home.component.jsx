import React from "react";

export function Home(){
return(
    <p style={{fontFamily:"comic sans MS"}}> Hi , This is home page.</p>
);
}

export function Contact(){
    var value_of_environment=process.env.REACT_APP_ENVvalue;
    return(
        <p style={{fontFamily:"monospace", fontSize:"20px"}}>Hi this is contact<br/> hi {value_of_environment}</p>
    );
}
