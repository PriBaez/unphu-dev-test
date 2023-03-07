import { NavLink } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { IconContext } from "react-icons";
import "./sidebar.scss";

function SideBar() {
  const activeNavLink = {
    color: "#b4bcc2",
    backgroundColor: "#213344",
  };

  return (
    <IconContext.Provider value={{ className: "icons", size: "30" }}>
      <div className="sidebar d-flex flex-column ps-3">
        <ul>
          <NavLink
            to="/add-user"
            style={({ isActive }) => (isActive ? activeNavLink : {})}
          >
            <li>
              <AiOutlineUserAdd className="icons" /> Agregar usuarios
            </li>
          </NavLink>

          <NavLink
            to="/users"
            style={({ isActive }) => (isActive ? activeNavLink : {})}
          >
            <li className="">
              <CgUserList className="icons" /> Lista de usuarios
            </li>
          </NavLink>
        </ul>
      </div>
    </IconContext.Provider>
  );
}

export default SideBar;
