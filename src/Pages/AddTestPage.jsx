import { Helmet } from "react-helmet-async";
import AddTestForm from "../Components/Forms/AddTestForm";

const AddTestPage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | Add Test</title>
      </Helmet>
      <div className='divider py-6 bg-primary rounded-md m-0'>
        <h1 className='text-cente text-white text-3xl font-bold'>Add A Test</h1>
      </div>
      <AddTestForm></AddTestForm>
    </div>
  );
};

export default AddTestPage;
