import React from "react";
import Button from "../../../components/Button/Button";


const Book = (props) => {

    return (
        <>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.pages}</td>
            <td>
                <Button buttonSize="btn-sm me-1 me-xl-5 mb-2 mb-md-0" buttonColor="btn-outline-warning" buttonHandler={() => alert('Modif OK')}>Modifier</Button>
                <Button buttonSize="btn-sm" buttonColor="btn-outline-danger" buttonHandler={() => alert('Suppr OK')}>Supprimer</Button>
            </td>
        </>
    );

}


export default Book;