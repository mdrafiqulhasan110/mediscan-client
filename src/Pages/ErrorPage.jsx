import { Helmet } from "react-helmet-async";
import Error404 from "../Components/Additional/Error404";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | Error Page</title>
      </Helmet>
      <Error404></Error404>
    </div>
  );
};

export default ErrorPage;
