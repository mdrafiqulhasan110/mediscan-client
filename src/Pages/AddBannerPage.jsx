import { Helmet } from "react-helmet-async";
import AddBannerForm from "../Components/Forms/AddBannerForm";

const AddBannerPage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | Add Banner</title>
      </Helmet>
      <div className='divider py-6 bg-primary rounded-md m-0'>
        <h1 className='text-cente text-white text-3xl font-bold'>Add A Banner</h1>
      </div>
      <AddBannerForm></AddBannerForm>
    </div>
  );
};

export default AddBannerPage;
