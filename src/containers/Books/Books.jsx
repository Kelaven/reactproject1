import React from "react";
import Book from "./Book/Book.jsx";


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
                        {allBooks.map(book => {
                            return (
                                <tr className="text-center" key={book.id}>
                                    <Book {...book} />
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