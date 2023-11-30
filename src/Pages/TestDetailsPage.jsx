import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import useAllTest from "../Hooks/useAllTest";

const TestDetailsPage = () => {
  const { tests, refetch } = useAllTest();
  const { id } = useParams();
  const { user } = useAuth();

  const test = tests.find((t) => t._id == id);
  const axiosSecure = useAxiosSecure();

  const handleReservation = async (slots) => {
    const reservation = {
      userEmail: user.email,
      name: test.name,
      price: test.price,
    };

    if (slots <= 0) {
      return toast.error("No Slot Availavale");
    }
    const addedTest = await axiosSecure.post("/reservation", reservation);
    if (addedTest.status == 201) {
      const slot = await axiosSecure.put(`/test/slots/${id}`);
      if (slot.status == 201) {
        toast.success("Test added Succesfully");
        refetch();
      }
    }
  };
  return (
    <div>
      <Helmet>
        <title>MediScan | Update Banner</title>
      </Helmet>

      {test && (
        <div className='mb-10'>
          <img
            className='w-full aspect-[2/1] rounded-md border-4'
            src={test.imageURL}
            alt=''
          />
          <div className='grid  md:grid-cols-5 gap-4 my-4'>
            <div className='md:col-span-3'>
              <p className=' py-2 text-3xl font-bold'>{test.name}</p>
              <p className='pb-4 text-justify '>{test.description}</p>
            </div>
            <div className='md:col-span-2'>
              <div>
                <div className='flex gap-4 justify-between my-2'>
                  <div className='flex flex-col justify-between text-xl'>
                    <p className=' rounded-md text-secondary font-semibold p-2 pl-0 border border-primary'>
                      <span className='bg-primary p-2 rounded-l-md'>Date:</span> {test.date}
                    </p>
                    <p className='rounded-md text-secondary font-semibold p-2 pl-0 border border-primary'>
                      <span className='bg-primary p-2 rounded-l-md'>Price:</span> {test.price}$
                    </p>
                  </div>
                  <div className='bg-primary p-2 rounded-md'>
                    <p className='p-4 mb-2 font-semibold text-center text-5xl rounded-full bg-white'>{test.slots}</p>
                    <p>Slots Available</p>
                  </div>
                </div>
                <button
                  onClick={() => handleReservation(test.slots)}
                  className='bg-primary w-full hover:bg-secondary text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestDetailsPage;
