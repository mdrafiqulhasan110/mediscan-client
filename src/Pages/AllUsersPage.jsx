import { Helmet } from "react-helmet-async";
import AllUserData from "../Components/DataTable/AllUserData";

const AllUsersPage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | All User</title>
      </Helmet>
      <div className='divider py-6 bg-primary rounded-md m-0 mb-6'>
        <h1 className='text-cente text-white text-3xl font-bold'>Manage Users</h1>
      </div>
      <AllUserData></AllUserData>
    </div>
  );
};

export default AllUsersPage;
