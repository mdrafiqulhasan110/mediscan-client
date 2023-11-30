import { Helmet } from "react-helmet-async";
import UpdateTestForm from "../Components/Forms/UpdateTestForm";
import { useParams } from "react-router-dom";

const UpdateTestPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Helmet>
        <title>MediScan | Update Test</title>
      </Helmet>
      <div className='flex justify-between items-center p-2 bg-primary rounded-md m-0 mb-6'>
        <h1 className='text-cente text-white text-3xl font-bold'>Update Test</h1>
      </div>
      <UpdateTestForm id={id}></UpdateTestForm>
    </div>
  );
};

export default UpdateTestPage;
