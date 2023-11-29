import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const MenuItems = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/addbanner"}>Add Banner</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default MenuItems;
