import { ToastContainer } from "react-toastify";
import Header from "../Components/Navigation/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Navigation/Footer";
import Dashboard from "../Components/Navigation/Dashboard";

const DashboardLayout = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header>
        <ToastContainer></ToastContainer>
      </Header>
      <div className='flex-1 flex w-full mx-auto max-w-[1400px]'>
        <Dashboard>
          <Outlet></Outlet>
        </Dashboard>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
