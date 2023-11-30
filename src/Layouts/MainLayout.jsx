import { Outlet } from "react-router-dom";
import Header from "../Components/Navigation/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Navigation/Footer";
import useAuth from "../Hooks/useAuth";

const MainLayout = () => {
  const { loading } = useAuth();

  return loading ? (
    <div className='min-h-screen flex justify-center items-center'>
      <span className='loading loading-dots loading-lg'></span>
    </div>
  ) : (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header>
        <ToastContainer></ToastContainer>
        <div className='mt-6'>
          <Outlet></Outlet>
        </div>
      </Header>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
