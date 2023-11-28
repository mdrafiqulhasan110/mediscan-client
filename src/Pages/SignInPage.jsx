import { Helmet } from "react-helmet-async";
import SignIn from "../Components/User/SignIn";

const SignInPage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | SignIn</title>
      </Helmet>
      <div className='min-h-[70vh] flex justify-center items-center py-4'>
        <SignIn></SignIn>
      </div>
    </div>
  );
};

export default SignInPage;
