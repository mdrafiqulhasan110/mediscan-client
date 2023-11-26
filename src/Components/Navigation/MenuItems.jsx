import { NavLink } from "react-router-dom";

const MenuItems = () => {
  const user = true;
  return (
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
