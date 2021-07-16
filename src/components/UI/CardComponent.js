import './CardComponent.css';
import React from "react";

export default function Card(props){
    const cardCssClass = 'card ' + props.className;
    return(
        <div className={cardCssClass}>{props.children}</div>
    );
}