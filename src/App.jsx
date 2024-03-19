import Title from "./components/Title/Title.jsx";

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
            <button type="button" className="btn btn-primary btn-lg">Ajouter</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
