import AddBannerForm from "../Forms/AddBannerForm";

const AddBannerPage = () => {
  return (
    <div>
      <div className='divider py-6 bg-primary rounded-md m-0'>
        <h1 className='text-cente text-white text-3xl font-bold'>Add A Banner</h1>
      </div>
      <AddBannerForm></AddBannerForm>
    </div>
  );
};

export default AddBannerPage;
