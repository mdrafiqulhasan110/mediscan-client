import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import AdminMenu from "./AdminMenu";

const Dashboard = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

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
      <div className='drawer-side bg-secondary h-auto'>
        <div className='flex flex-col items-center mt-6 -mx-2'>
          <img
            className='object-cover w-24 h-24 mx-2 rounded-full'
            src={user.photoURL}
            alt='avatar'
          />
          <h4 className='mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200'>{user.displayName}</h4>
        </div>
        <br />

        <ul className='menu lg:w-56 p-0 [&>li]:border-b [&>li:first-child]:border-t  text-white [&>li]:border-primary'>
          <AdminMenu></AdminMenu>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
