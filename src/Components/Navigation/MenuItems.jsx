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
        <NavLink to={"/alltests"}>AllTest</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to={"/dashboard/Profile"}>Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default MenuItems;
