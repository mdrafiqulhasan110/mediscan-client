import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Dashboard from "../Components/Navigation/Dashboard";

const DashboardLayout = () => {
  return (
    <div className='flex-1 flex w-full mx-auto max-w-[1400px]'>
      <Dashboard>
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
      </Dashboard>
    </div>
  );
};

export default DashboardLayout;
