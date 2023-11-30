import Profile from "../User/Profile";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAllReservation from "../../Hooks/useAllReservation";

const AllReservationData = () => {
  const { reservations, refetch } = useAllReservation();
  const axiosSecure = useAxiosSecure();

  const handleStatusChange = async (e, id) => {
    const result = { result: e.target.value };
    axiosSecure
      .put(`/reservation/changestatus/${id}`)
      .then(function (response) {
        Swal.fire("Success", "User status changed", "success");
        refetch();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      {reservations.length > 0 ? (
        <>
          <div>
            <div className='overflow-x-auto'>
              <table className='table min-w-full '>
                <thead className='bg-gray-200 text-black font-bold'>
                  <tr className='border-b border-primary'>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Name</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>User</th>

                    <th className=' py-3 text-center  text-xs font-medium uppercase'>Status</th>
                    <th className=' py-3 text-center text-xs font-medium uppercase'>Action</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {reservations.map((reservation, index) => (
                    <>
                      <tr
                        key={index}
                        className='border-b border-primary'
                      >
                        <td className='pr-4 py-4 '>{reservation.name.toUpperCase()}</td>
                        <td className='pr-4 py-4 '>{reservation.userEmail}</td>

                        <td className='pr-4 py-4 text-center '>{reservation.status.toUpperCase()}</td>
                        <td className='pr-4 py-4 text-center '>
                          <div className='w-full flex gap-3 justify-center items-center h-auto'>
                            <p
                              onClick={() => document.getElementById(`modal${index}`).showModal()}
                              className=' bg-primary p-1 rounded-md text-xs text-white cursor-pointer'
                            >
                              Upload Result
                            </p>
                          </div>
                        </td>
                      </tr>
                      <dialog
                        id={`modal${index}`}
                        className='modal'
                      >
                        <div className='modal-box '>
                          <form onSubmit={handleStatusChange(reservation._id)}>
                            <div className='mb-4'>
                              <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                              >
                                Result Link
                              </label>
                              <input
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                                name='name'
                                required
                              />
                              <button className='w-full mt-6 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'>Submit Result</button>
                            </div>
                          </form>
                        </div>
                        <form
                          method='dialog'
                          className='modal-backdrop'
                        >
                          <button>close</button>
                        </form>
                      </dialog>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <p className='p-10 text-center font-bold text-3xl'>No reservation Found</p>
      )}
    </div>
  );
};

export default AllReservationData;
