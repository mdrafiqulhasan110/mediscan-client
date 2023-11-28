import { Outlet } from "react-router-dom";
import Header from "../Components/Navigation/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Header>
        <Outlet></Outlet>
      </Header>
    </>
  );
};

export default MainLayout;
