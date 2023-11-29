import { Helmet } from "react-helmet-async";
import SignUp from "../Components/User/SignUp";

const SignUpPage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | SignUp</title>
      </Helmet>
      <div className='min-h-[70vh] flex justify-center items-center py-4'>
        <SignUp></SignUp>
      </div>
    </div>
  );
};

export default SignUpPage;
