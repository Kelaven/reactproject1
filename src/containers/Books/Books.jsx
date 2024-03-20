import React, { useState } from "react";
import Book from "./Book/Book.jsx";


const Books = (props) => {

    let [allBooks, setAllBooks] = useState([
        { id: 1, title: "Les Ombres de Shadwell", author: "Lucie Arnault", pages: 352 },
        { id: 2, title: "Au-delà des Cimes", author: "Julien Moreau", pages: 289 },
        { id: 3, title: "Chroniques du Dernier Horizon", author: "Émilie Dubois", pages: 467 },
        { id: 4, title: "L'Écho des Âmes Perdues", author: "Marc Lefèvre", pages: 523 }
    ]);

    const deleteBookHandler = (id) => {
        let newAllBooks = allBooks.filter(allBook => allBook.id != id); // filter retourne un nouveau tableau donc l'immutabilité est respectée
        // id fait référence à la propriété id de l'objet livre actuellement traité par map
        // book.id fait référence à la propriété id du nouvel objet livre traité par filter dans le nouveau tableau
        setAllBooks(newAllBooks);
    }


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
                        {allBooks.map(book => {
                            return (
                                <tr className="text-center" key={book.id}>
                                    <Book {...book} delete={() => deleteBookHandler(book.id)} /> 
                                    {/* utilisation d'une fonction fléchée pour deleteBookHandler afin que ça ne s'exécute pas immédiatement quand le composant est rendu. 
                                    On lui passe l'id du livre en argument pour le récupérer */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );

}


export default Books;