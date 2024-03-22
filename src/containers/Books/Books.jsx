import React, { useState } from "react";
import Book from "./Book/Book.jsx";
import AddForm from "./AddForm/AddForm.jsx";
import UpdateForm from "./UpdateForm/UpdateForm.jsx";


const Books = (props) => {


    // ! Variables
    let [allBooks, setAllBooks] = useState([
        { id: 1, title: "Les Ombres de Shadwell", author: "Lucie Arnault", pages: 352 },
        { id: 2, title: "Au-delà des Cimes", author: "Julien Moreau", pages: 289 },
        { id: 3, title: "Chroniques du Dernier Horizon", author: "Émilie Dubois", pages: 467 },
        { id: 4, title: "L'Écho des Âmes Perdues", author: "Marc Lefèvre", pages: 523 }
    ]);

    const [updateBookId, setUpdateBookId] = useState(null); // null est la valeur initiale de l'état updateBookId. Cela signifie qu'au début, updateBookId n'a pas de valeur spécifique et est considéré comme non défini ou "pas en mode mise à jour".


    // ! Fonctions
    const deleteBookHandler = (id) => {
        let newAllBooks = allBooks.filter(allBook => allBook.id != id); // filter retourne un nouveau tableau donc l'immutabilité est respectée. Je m'en sers pour que le nouveau tableau exclue le livre sur lequel on a cliqué. 
        // id fait référence à la propriété id de l'objet livre traité par map
        // allBook.id fait référence à la propriété id du nouvel objet livre traité par filter dans le nouveau tableau
        setAllBooks(newAllBooks);
    }

    const addBookHandler = (bookTitle, bookAuthor, bookPages) => {
        const lastBook = allBooks[allBooks.length - 1]; // obtenir le dernier élément du tableau existant
        let lastBookId = lastBook.id;
        console.log(lastBookId);
        let newAllBooks = [ // nouveau tableau
            ...allBooks, // qui contient tous les anciens éléments
            { id: lastBookId + 1, title: bookTitle, author: bookAuthor, pages: bookPages } // et un nouvel élément à la fin, avec un id unique
        ]
        setAllBooks(newAllBooks);
    }

    const updateBookHandler = (updateBookId) => {
        setUpdateBookId(updateBookId); // on met à jour un livre
    }

    const validateUpdateBookHandler = (id, title, author, pages) => {
        const updatedBooks = allBooks.map(book => { // créer une nouvelle liste de livre en mappant sur la liste existante
            if (book.id === id) { // si nous trouvons le livre que nous mettons à jour, on le remplace par une nouvelle version
                return { id, title, author, pages }; // on utilise les nouvelles valeurs
            } else {
                return book; // sinon on retourne les valeurs existantes
            }
        })
        setAllBooks(updatedBooks); // on met à jour l'état avec la nouvelle liste de livres
        setUpdateBookId(null); // on réinitialise updateBookId pour quitter le mode mise à jour
        // updateBookId est utilisé pour déterminer quel livre est actuellement en cours de mise à jour. 
        // Lorsque l'on appelle setUpdateBookId(null), on réinitialise l'état updateBookId à null, ce qui indique que plus aucun livre n'est sélectionné pour la mise à jour.


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
                        console.log(updateBookId);
                        if (book.id !== updateBookId) { // si je ne clique pas sur modifier, updateBookId étant définie par la fonction updateBookHandler. Donc si je ne clique pas sur Modifier la variable est null sinon elle contient l'id à modifier.
                            return (
                                <tr className="text-center" key={book.id}>
                                    <Book {...book} delete={() => deleteBookHandler(book.id)} update={() => updateBookHandler(book.id)} />
                                    {/* Une fonction fléchée est utilisée pour retarder l'exécution de deleteBookHandler jusqu'au clic sur le bouton. 
                                        L'ID du livre est passé à la fonction pour identifier quel livre supprimer. */}
                                </tr>
                            );
                        } else {
                            return (
                                <tr key={book.id}>
                                    <UpdateForm id={book.id} title={book.title} author={book.author} pages={book.pages} validateUpdate={validateUpdateBookHandler} />
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
            {props.displayForm && <AddForm validation={addBookHandler} />} {/* écriture plus rapide que : */}
            {/* {props.displayForm ? <AddForm validation={addBookHandler} /> : null} */}
        </div>
    );

}


export default Books;