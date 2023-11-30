import { Helmet } from "react-helmet-async";
import AllReservationData from "../Components/DataTable/AllReservationData";

const AllReservationPage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | All Reservation</title>
      </Helmet>
      <div className='divider py-6 bg-primary rounded-md m-0'>
        <h1 className='text-cente text-white text-3xl font-bold'>All Reservation</h1>
      </div>
      <AllReservationData></AllReservationData>
    </div>
  );
};

export default AllReservationPage;
