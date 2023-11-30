import { Helmet } from "react-helmet-async";
import UpdateBannerForm from "../Components/Forms/UpdateBannerForm";
import { useParams } from "react-router-dom";

const UpdateBannerPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Helmet>
        <title>MediScan | Update Banner</title>
      </Helmet>
      <div className='flex justify-between items-center p-2 bg-primary rounded-md m-0 mb-6'>
        <h1 className='text-cente text-white text-3xl font-bold'>Update Banner</h1>
      </div>
      <UpdateBannerForm id={id}></UpdateBannerForm>
    </div>
  );
};

export default UpdateBannerPage;
