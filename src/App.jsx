import Title from "./components/Title/Title.jsx";
import Button from "./components/Button/Button.jsx";

function App() {

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
          <div>
            <p>Livres</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <div className="p-5">
            <Button buttonColor="btn-outline-success" buttonHandler={() => alert('Ajout OK')}>Ajouter</Button>
            <Button buttonColor="btn-outline-warning" buttonHandler={() => alert('Modif OK')}>Modifier</Button>
            <Button buttonColor="btn-outline-danger" buttonHandler={() => alert('Suppr OK')}>Supprimer</Button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
