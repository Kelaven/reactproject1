import React from "react";


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
    const buttonStyle = `btn ${props.buttonColor}`; // il vaut mieux passer par un props et des propriétés dans App.jsx



    // * Retour * //
    return (
        <>
            <button type="button" className={buttonStyle} onClick={props.buttonHandler}>{props.children}</button>
        </>
    );


}


export default Button;