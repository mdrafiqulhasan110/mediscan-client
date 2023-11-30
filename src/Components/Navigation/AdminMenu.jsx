import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
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
          to={"/dashboard/allbanners"}
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-primary rounded-none" : "")}
        >
          Banners
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/alltests"}
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-primary rounded-none" : "")}
        >
          All Tests
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/allreservations"}
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-primary rounded-none" : "")}
        >
          All Reservation
        </NavLink>
      </li>
    </>
  );
};

export default AdminMenu;
