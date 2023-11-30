import { Helmet } from "react-helmet-async";
import AllBannerData from "../Components/DataTable/AllBannerData";
import { NavLink } from "react-router-dom";

const AllBannerPage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | All Banner</title>
      </Helmet>
      <div className='flex justify-between items-center p-2 bg-primary rounded-md m-0 mb-6'>
        <h1 className='text-cente text-white text-3xl font-bold'>Manage Banners</h1>
        <NavLink to={"/dashboard/addbanner"}>
          <button className='p-2 rounded-lg font-semibold   text-primary border border-primary bg-secondary hover:border-secondary hover:bg-primary hover:text-secondary '>Add Banner</button>
        </NavLink>
      </div>
      <AllBannerData></AllBannerData>
    </div>
  );
};

export default AllBannerPage;
