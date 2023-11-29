import AdminMenu from "./AdminMenu";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = ({ children }) => {
  const { user, loading, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  if (loading) {
    return <p>Hello</p>;
  }

  return (
    <div className='drawer drawer-open '>
      <input
        id='my-drawer-2'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content p-4 '>
        {/* Page content here */}
        {children}
      </div>
      <div className='drawer-side bg-secondary h-screen'>
        <div className='flex h-full  flex-col'>
          <div className='flex flex-col items-center my-10 -mx-2'>
            <img
              className='object-cover w-24 h-24 mx-2 rounded-full'
              src={user.photoURL}
              alt='avatar'
            />
            <h4 className='mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200'>{user.displayName}</h4>
            {isAdmin && <p>Admin</p>}
          </div>
          <div className='h-full flex flex-col justify-between'>
            <ul className='menu lg:w-56 p-0 [&>li]:border-b [&>li:first-child]:border-t-4  text-white [&>li]:border-primary'>
              <AdminMenu></AdminMenu>
            </ul>
            <ul className='menu lg:w-56 p-0 [&>li]:border-b [&>li:first-child]:border-t  text-white [&>li]:border-primary'>
              <li>
                <NavLink
                  to={"/dashboard"}
                  className={({ isActive, isPending }) => (isPending ? "bg-primary" : isActive ? "bg-primary rounded-none" : "")}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "bg-primary rounded-none" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <p onClick={() => logOut()}>Log Out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
