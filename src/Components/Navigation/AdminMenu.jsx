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
          to={"/allusers"}
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-primary rounded-none" : "")}
        >
          Users
        </NavLink>
      </li>
      <div className='divider divider-accent my-20'></div>

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
