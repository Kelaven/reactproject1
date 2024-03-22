import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import classes from "./UpdateForm.module.css";


const UpdateForm = (props) => {

    // ! Variables
    const [newBookTitle, setBookTitle] = useState(props.title);
    const [newBookAuthor, setBookAuthor] = useState(props.author);
    const [newBookPages, setBookPages] = useState(props.pages);


    // ! Fonctions
    const newBookTitleHandler = (e) => {
        setBookTitle(e.target.value);
    }
    const newBookAuthorHandler = (e) => {
        setBookAuthor(e.target.value);
    }
    const newBookPagesHandler = (e) => {
        setBookPages(e.target.value);
    }

    const validateUpdateHandler = () => {
        console.log('ok');
        props.validateUpdate(props.id, newBookTitle, newBookAuthor, newBookPages)
    }




    return (
        <>
            <td>
                <input className={`form-control ${classes.inputHeight}`} type="text" value={newBookTitle} onChange={newBookTitleHandler} />
            </td>
            <td>
                <input className={`form-control ${classes.inputHeight}`} type="text" value={newBookAuthor} onChange={newBookAuthorHandler} />
            </td>
            <td>
                <input className={`form-control ${classes.inputHeight}`} type="text" value={newBookPages} onChange={newBookPagesHandler} />
            </td>
            <td className="text-center">
                <Button buttonSize="btn-sm me-1 me-xl-5 mb-2 mb-md-0" buttonColor="btn-outline-primary" buttonHandler={validateUpdateHandler}>Valider</Button>
            </td>
        </>
    );

}


export default UpdateForm;