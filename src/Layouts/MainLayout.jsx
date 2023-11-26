import { Outlet } from "react-router-dom";
import Header from "../Components/Navigation/Header";

const MainLayout = () => {
  return (
    <>
      <Header>
        <Outlet></Outlet>
      </Header>
    </>
  );
};

export default MainLayout;
