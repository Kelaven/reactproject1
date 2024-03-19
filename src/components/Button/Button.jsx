import React from "react";
import classes from "./Button.module.css";


const Button = (props) => {


    // * Style * //
    // let buttonColor; // Cette manière de façon les couleurs est fonctionnelle mais pas optimale
    // switch (props.children) {
    //     case "Ajouter":
    //         buttonColor = "btn-outline-success";
    //         break;
    //     case "Modifier":
    //         buttonColor = "btn-outline-warning";
    //         break;
    //     case "Supprimer":
    //         buttonColor = "btn-outline-danger";
    //         break;
    // }
    // const buttonStyle = `btn ${buttonColor}`;
    const buttonStyle = `btn ${props.buttonColor} ${props.buttonSize}`; // il vaut mieux passer par un props et des propriétés dans App.jsx

    const buttonAnimation = `${classes.btnAnimate}`;


    // * Retour * //
    return (
        <>
            <button type="button" className={`${buttonStyle} ${buttonAnimation}`} onClick={props.buttonHandler}>{props.children}</button>
        </>
    );


}


export default Button;