import { Helmet } from "react-helmet-async";
import UpdateProfileForm from "../Components/Forms/UpdateProfileForm";

const UpdateProfilePage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | Update Profile</title>
      </Helmet>
      <div className='flex justify-between items-center p-2 bg-primary rounded-md m-0 mb-6'>
        <h1 className='text-cente text-white text-3xl font-bold'>Update Profile</h1>
      </div>
      <UpdateProfileForm></UpdateProfileForm>
    </div>
  );
};

export default UpdateProfilePage;
