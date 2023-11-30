import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import AllTestData from "../Components/DataTable/AllTestData";

const AllTestPage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | All Tests</title>
      </Helmet>
      <div className='flex justify-between items-center p-2 bg-primary rounded-md m-0 mb-6'>
        <h1 className='text-cente text-white text-3xl font-bold'>Manage Tests</h1>
        <NavLink to={"/dashboard/addtest"}>
          <button className='p-2 rounded-lg font-semibold   text-primary border border-primary bg-secondary hover:border-secondary hover:bg-primary hover:text-secondary '>Add Test</button>
        </NavLink>
      </div>
      <AllTestData></AllTestData>
    </div>
  );
};

export default AllTestPage;
