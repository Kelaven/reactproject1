import React, { useState } from "react";
import Book from "./Book/Book.jsx";
import AddForm from "./AddForm/AddForm.jsx";


const Books = (props) => {

    let [allBooks, setAllBooks] = useState([
        { id: 1, title: "Les Ombres de Shadwell", author: "Lucie Arnault", pages: 352 },
        { id: 2, title: "Au-delà des Cimes", author: "Julien Moreau", pages: 289 },
        { id: 3, title: "Chroniques du Dernier Horizon", author: "Émilie Dubois", pages: 467 },
        { id: 4, title: "L'Écho des Âmes Perdues", author: "Marc Lefèvre", pages: 523 }
    ]);
    
    const deleteBookHandler = (id) => {
        let newAllBooks = allBooks.filter(allBook => allBook.id != id); // filter retourne un nouveau tableau donc l'immutabilité est respectée. Je m'en sers pour que le nouveau tableau exclue le livre sur lequel on a cliqué. 
        // id fait référence à la propriété id de l'objet livre traité par map
        // allBook.id fait référence à la propriété id du nouvel objet livre traité par filter dans le nouveau tableau
        setAllBooks(newAllBooks);
    }

    const addBookHandler = (addedBook) => {
        const lastBook= allBooks[allBooks.length-1]; // obtenir le dernier élément du tableau
        let newAllBooks = [ // nouveau tableau
            ...allBooks, // qui contient tous les anciens éléments
            { id: lastBook.id++, title: bookTitle, author: bookAuthor, pages: bookPages } // et un nouvel élément à la fin, avec un id unique
        ]
        setAllBooks(newAllBooks);
    }


    return (
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
                                {/* Une fonction fléchée est utilisée pour retarder l'exécution de deleteBookHandler jusqu'au clic sur le bouton. 
                                    L'ID du livre est passé à la fonction pour identifier quel livre supprimer. */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {props.displayForm && <AddForm />} {/* écriture plus rapide que : */}
            {/* {props.displayForm ? <AddForm /> : null} */}
        </div>
    );

}


export default Books;