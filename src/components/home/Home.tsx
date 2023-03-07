import { redirect } from "react-router-dom";
import { Fragment } from "react";
import SideBar from "../sidebar/SideBar";

function Home({ name, isLogged }: { name: string; isLogged: boolean }) {
  if (!isLogged) {
    redirect("/");
  }

  return (
    <Fragment>
      <div className="d-flex flex-column">
        <SideBar />
        <div className="text-white py-4 px-5 align-self-baseline">
          <h1>Bienvenido {name}</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
