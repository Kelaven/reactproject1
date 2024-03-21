import React, { useState } from "react";


const AddForm = (props) => {

    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookPages, setBookPages] = useState("");

    const bookTitleHandler = (e) => {
        setBookTitle(e.target.value);
    }
    const bookAuthorHandler = (e) => {
        setBookAuthor(e.target.value);
    }
    const bookPagesHandler = (e) => {
        setBookPages(e.target.value);
    }

    return (
        <div className="row">
            <div className="col">
                <h2 className="pt-3 text-center">Formulaire d'ajout</h2>
                <form>
                    <label className="form-label pt-3" htmlFor="bookTitle">Titre du livre</label>
                    <input placeholder="Le Secret de l'Horloger" className="form-control" type="text" name="bookTitle" value={bookTitle} onChange={bookTitleHandler} />
                    <label className="form-label pt-3" htmlFor="bookAuthor">Nom de l'auteur</label>
                    <input placeholder="Camille Dupont" className="form-control" type="text" name="bookAuthor" value={bookAuthor} onChange={bookAuthorHandler} />
                    <label className="form-label pt-3" htmlFor="bookPages">Nombre de pages</label>
                    <input placeholder="672" className="form-control" type="number" name="bookPages" value={bookPages} onChange={bookPagesHandler} />
                </form>
            </div>
        </div>
    );

}


export default AddForm;