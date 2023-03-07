import { FormEvent, Fragment, useState } from "react";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import SideBar from "../sidebar/SideBar";

const headerIcons = {
  fontSize: "65px",
};

function AddForm({ name, isLogged }: { name: string; isLogged: boolean }) {
  const [genero, setGenero] = useState(" ");
  const [estado, setEstado] = useState(" ");

  const onChangeGenero = (e: any) => {
    setGenero(e.target.value);
  };

  const onChangeEstado = (e: any) => {
    setEstado(e.target.value);
  };

  type form = FormEvent<HTMLFormElement>;

  function handleSubmit(
    e: FormEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) {
    e.preventDefault();
    console.log(genero);
  }

  return (
    <Fragment>
      <div className="d-flex column">
        <SideBar />

        <div className="d-flex align-items-center px-5 py-4">
          <form onSubmit={handleSubmit}>
            <div className="card bg-light">
              <div className="card-header text-center">
                <h1>
                  {" "}
                  <AiOutlineUserAdd style={headerIcons} /> Registro de usuarios
                </h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="addon-nombres">
                      <AiOutlineUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombres"
                      aria-label="Nombres"
                      name="nombres"
                      aria-describedby="addon-nombres"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="addon-primer-apellido"
                    >
                      <AiOutlineUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Primer Apellido"
                      aria-label="Primer Apellido"
                      name="primer_apellido"
                      aria-describedby="addon-primer-apellido"
                    />
                    <span
                      className="input-group-text"
                      id="addon-segundo-apellido"
                    >
                      <AiOutlineUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Segundo apellido"
                      aria-label="Segundo apellido"
                      name="segundo_apellido"
                      aria-describedby="addon-segundo-apellido"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="addon-cedula">
                      <AiOutlineUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cedula"
                      aria-label="Cedula"
                      name="cedula"
                      aria-describedby="addon-cedula"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="addon-edad">
                      <AiOutlineUser />
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Edad"
                      aria-label="Edad"
                      name="edad"
                      aria-describedby="addon-edad"
                    />
                  </div>

                  {/* Radios de genero */}
                  <p>Genero: </p>
                  <div className="input-group mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="opcionMasculino"
                        value="M"
                        checked={genero === "M"}
                        name="radioM"
                        onChange={onChangeGenero}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="opcionMasculino"
                      >
                        Masculino
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="opcionFemenino"
                        value="F"
                        name="radioF"
                        checked={genero === "F"}
                        onChange={onChangeGenero}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="opcionFemenino"
                      >
                        Femenino
                      </label>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="addon-direccion">
                      <AiOutlineUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dirección"
                      aria-label="Dirección"
                      name="direccion"
                      aria-describedby="addon-direccion"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="addon-telefono">
                      <AiOutlineUser />
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Teléfono"
                      aria-label="Teléfono"
                      name="telefono"
                      aria-describedby="addon-telefono"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="addon-email">
                      <AiOutlineUser />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo electrónico"
                      aria-label="Correo electrónico"
                      name="email"
                      aria-describedby="addon-email"
                    />
                  </div>

                  {/* Radios de estado civil */}
                  <div className="input-group mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="radio-soltero"
                        value="Soltero"
                        name="radioSoltero"
                        checked={genero === "Soltero"}
                        onChange={onChangeEstado}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-soltero"
                      >
                        Soltero
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="radio-casado"
                        value="Casado"
                        name="radioCasado"
                        onChange={onChangeEstado}
                        checked={genero === "Casado"}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-casado"
                      >
                        Casado
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="radio-union-libre"
                        value="Unión libre"
                        name="radioUnionLibre"
                        onChange={onChangeEstado}
                        checked={genero === "Unión libre"}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-union-libre"
                      >
                        Unión libre
                      </label>
                    </div>

                    <div className="input-group mb-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="tiene-hijos"
                          name="radioHijos"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="tiene-hijos"
                        >
                          Tiene hijos?
                        </label>
                      </div>

                      <div className="input-group mb-3">
                        <span
                          className="input-group-text"
                          id="addon-fecha-nacimiento"
                        >
                          <AiOutlineUser />
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Fecha de nacimiento"
                          aria-label="Fecha de nacimiento"
                          aria-describedby="addon-fecha-nacimiento"
                          name="FechaNacimiento"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-group mb-3 align-items-center">
                    <button className="btn bnt-primary" type="submit">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default AddForm;