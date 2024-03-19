// import React, { useState } from "react";
import classes from "./Title.module.css";


const Title = (props) => { // créer le composant Titre

    // const [title, setTitle] = useState("Liste des livres"); // Je n'utilise pas le hook car le titre n'a pas besoin de changer dynamiquement


    const titleStyle = `p-5 ${classes.title}`; // pour utiliser les classes Bootstrap + mon fichier CSS



    return (
        <>
            {/* <h1 className="p-5">{title}</h1> Je n'utilise pas le hook car le titre n'a pas besoin de changer dynamiquement */}
            <h1 className={titleStyle}>{props.children}</h1> {/* J'utilise la propriété children pour que le titre soit flexible et réutilisable dans différents contextes avec différents titres  */}
        </>
    );

}


export default Title;