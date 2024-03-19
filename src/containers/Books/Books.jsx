import React from "react";
import Button from "../../components/Button/Button.jsx"


const Books = (props) => {

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
                        <tr className="text-center">
                            <th scope="row">Titre1</th>
                            <td>Auteur 1</td>
                            <td>X pages</td>
                            <td>
                                <Button buttonSize="btn-sm me-1 me-xl-5 mb-2 mb-md-0" buttonColor="btn-outline-warning" buttonHandler={() => alert('Modif OK')}>Modifier</Button>
                                <Button buttonSize="btn-sm" buttonColor="btn-outline-danger" buttonHandler={() => alert('Suppr OK')}>Supprimer</Button>
                            </td>
                        </tr>
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