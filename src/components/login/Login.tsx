import { useNavigate} from "react-router-dom";
import { FormEvent, Fragment, useState } from "react";
import "./Login.scss";

function LoginForm({
  loginUser,
  gratingUser,
}: {
  loginUser: Function;
  gratingUser: Function;
}) {
  const navigate = useNavigate();

  // Datos con fines de prueba (Mala practica pero es para fines de prueba)
  var usersData = [
    {
      user: "admin",
      pwd: "admin",
    },
    {
      user: "manager",
      pwd: "1234",
    },
  ];

  const [showErrorMessage, setShowwErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const renderErrorMessage = () => (
    <div className="alert alert-danger">{errorMessage}</div>
  );

  function handleSubmit(
    e: FormEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) {
    e.preventDefault();
    loginUser("Great");
    gratingUser(true);

    var { user, pwd } = document.forms[0];
    const exitsUser = usersData.find((h) => h.user === e.target.user.value);


    if (exitsUser) {
      if (exitsUser.pwd !== pwd.value || exitsUser.user !== user.value) {
        gratingUser(false);
        setShowwErrorMessage(true);
        setErrorMessage(
          "Los datos no son correctos, verifique y trate de nuevo."
        );
      } else {
        loginUser(user.value);
        gratingUser(true);

        navigate("/home");
      }
    } else {
      gratingUser(false);
      setShowwErrorMessage(true);
      setErrorMessage(
        "Los datos no son correctos, verifique y trate de nuevo."
      );
    }
  }

  return (
    <Fragment>
      <div className="container py-4">
        <div className="card bg-light">
          <div className="card-header text-center">
            <h3>Login</h3>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit} method="post">
              <div className="input-group mb-3">
                <span className="input-group-text" id="user-addon">
                  Usuario
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="user"
                  placeholder="Usuario"
                  aria-label="Usuario"
                  aria-describedby="user-addon"
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="pwd-addon">
                  Contraseña
                </span>
                <input
                  type="password"
                  className="form-control"
                  name="pwd"
                  placeholder="Contraseña"
                  aria-label="Contraseña"
                  aria-describedby="pwd-addon"
                />
              </div>

              <div className="input-group mb-3 justify-content-center">
                <button className="btn btn-secondary" type="submit">
                  Ingresar
                </button>
              </div>

              <div className="container-fluid">
                {showErrorMessage ? renderErrorMessage() : ""}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginForm;
