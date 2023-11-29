import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-primary rounded-none" : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/allusers"}
          className={({ isActive, isPending }) => (isPending ? "bg-primary" : isActive ? "bg-primary rounded-none" : "")}
        >
          Users
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/dashboard/addbanner"}
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-primary rounded-none" : "")}
        >
          Add Banner
        </NavLink>
      </li>
    </>
  );
};

export default AdminMenu;
