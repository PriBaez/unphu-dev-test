import { Fragment } from "react";

function UserList() {
  return (
    <Fragment>
      <div className="container align-items-start my-4">
        <div className="card">
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre Completo</th>
                <th>Correo electrónico</th>
                <th>Género</th>
              </tr>
            </thead>
            <tbody>
              <td>1</td>
              <td>Lucas</td>
              <td>lucas@email.com</td>
              <td>M</td>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default UserList;
