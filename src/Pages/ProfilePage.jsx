import { Helmet } from "react-helmet-async";
import Profile from "../Components/User/Profile";
import useUserInfo from "../Hooks/useUserInfo";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
  const { userinfo, loading } = useUserInfo();

  return !loading ? (
    <div>
      <Helmet>
        <title>MediScan | User Profile</title>
      </Helmet>
      <div className='flex justify-between items-center p-2 bg-primary rounded-md m-0 mb-6'>
        <h1 className='text-cente text-white text-3xl font-bold'>My Profile</h1>
        <NavLink to={"/dashboard/updateprofile"}>
          <button className='p-2 rounded-lg font-semibold   text-primary border border-primary bg-secondary hover:border-secondary hover:bg-primary hover:text-secondary '>Update Profile</button>
        </NavLink>
      </div>

      <Profile user={userinfo}></Profile>
    </div>
  ) : (
    <div className='min-h-screen flex justify-center items-center'>
      <span className='loading loading-dots loading-lg'></span>
    </div>
  );
};

export default ProfilePage;
