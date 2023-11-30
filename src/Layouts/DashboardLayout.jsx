import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Dashboard from "../Components/Navigation/Dashboard";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const { loading } = useAuth();

  return loading ? (
    <div className='min-h-screen flex justify-center items-center'>
      <span className='loading loading-dots loading-lg'></span>
    </div>
  ) : (
    <div className='flex-1 flex w-full mx-auto max-w-[1400px]'>
      <Dashboard>
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
      </Dashboard>
    </div>
  );
};

export default DashboardLayout;
