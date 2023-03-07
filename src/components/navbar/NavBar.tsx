import Dropdown from "../dropdown/Dropdown";
import { NavLink } from 'react-router-dom';
import ILogged from '../login/ILoged';


function NavBar(props: ILogged) {
  const name = props.name;
  const Logged = props.isLogged;
  

  return (
    <header>
      <nav className="navbar d-flex sticky">
        <NavLink to="/home" className="navbar-brand text-white">
          PB
        </NavLink>

        <div>
          <Dropdown isLogged={Logged} name={name}/>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
