import React from "react";
import Button from "../../components/Button/Button.jsx"


const Books = (props) => {

    let allBooks = [
        { id: 1, title: "Les Ombres de Shadwell", author: "Lucie Arnault", pages: 352 },
        { id: 2, title: "Au-delà des Cimes", author: "Julien Moreau", pages: 289 },
        { id: 3, title: "Chroniques du Dernier Horizon", author: "Émilie Dubois", pages: 467 },
        { id: 4, title: "L'Écho des Âmes Perdues", author: "Marc Lefèvre", pages: 523 }
    ];

    return (
        <>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Titre</th>
                            <th scope="col">Auteur</th>
                            <th scope="col">Nbe de pages</th>
                            <th scope="col" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allBooks.map(allBook => {
                            console.log('cc');
                            return <tr className="text-center" key={allBook.id}>
                                <td>{allBook.title}</td>
                                <td>{allBook.author}</td>
                                <td>{allBook.pages}</td>
                                <td>
                                    <Button buttonSize="btn-sm me-1 me-xl-5 mb-2 mb-md-0" buttonColor="btn-outline-warning" buttonHandler={() => alert('Modif OK')}>Modifier</Button>
                                    <Button buttonSize="btn-sm" buttonColor="btn-outline-danger" buttonHandler={() => alert('Suppr OK')}>Supprimer</Button>
                                </td>
                            </tr>
                        })}
                        {/* <tr>
                            <th scope="row">Default</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    );

}


export default Books;