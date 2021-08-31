import React from "react";

export default function Tableau(props) {
  return (
    <>
      <table className="table text-center my-5">
        <thead>
          <tr className="bg-dark text-white" >
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Nombre Pages</th>
            <th colSpan="2" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Titre 1</th>
            <td>Mark Antoine</td>
            <td>266</td>
            <td >@modif</td>
            <td >@supprmier</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
