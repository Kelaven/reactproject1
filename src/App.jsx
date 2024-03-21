import Title from "./components/Title/Title.jsx";
import Button from "./components/Button/Button.jsx";
import Books from "./containers/Books/Books.jsx"
import "./App.css";
import { useState } from "react";

function App() {

  // ! Variable
  // * contenu du bouton Ajouter
  // let [addBtn, setAddBtn] = useState("Ajouter"); // méthode sans booléen, peut être aventageuse pour ajouter d'autres conditions plus tard

  // console.log(addBtn);

  // const changeContentBtn = () => {
  //   if (addBtn === "Ajouter") {
  //     setAddBtn("Terminer l'ajout");
  //   } else {
  //     setAddBtn("Ajouter");
  //   }
  // }
  let [addBtn, setAddBtn] = useState(false); // méthode avec booléen, nécessite une condition ternaire dans la balise. Moins redondante et plus optimisée dans ce cas précis


  // ! Fonction
  const changeContentBtn = () => {
    setAddBtn(!addBtn); // Bascule entre true et false : 
    // qd l'opérateur de négation logique ! est utilisé devant une variable booléenne, 
    // il inverse la valeur de cette variable
  }






  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          {/* <Title /> Je n'utilise pas le hook car le titre n'a pas besoin de changer dynamiquement */}
          <Title>Liste des livres</Title> {/* J'utilise la propriété children pour que le titre soit flexible et réutilisable dans différents contextes avec différents titres  */}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Books displayForm={addBtn} />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <div className="p-5">
            <Button buttonSize="btn-lg" buttonColor="btn-outline-success" buttonHandler={changeContentBtn}>{addBtn ? "Terminer l'ajout" : "Ajouter"}</Button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
