import { useNavigate } from "react-router-dom";
import useAllTest from "../../Hooks/useAllTest";
import { AiOutlineEye, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllTestData = () => {
  const { tests, refetch } = useAllTest();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleStatusChange = (id, request) => {
    axiosSecure
      .put(`/test/changestatus/${id}`, request)
      .then(function (response) {
        Swal.fire("Success", "Test status changed", "success");
        refetch();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axiosSecure
      .delete(`/test/${id}`)
      .then(function (response) {
        Swal.fire("Deleted!", "Test has been deleted.", "success");
        refetch();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {tests.length > 0 ? (
        <>
          <div>
            <div className='overflow-x-auto'>
              <table className='table min-w-full '>
                <thead className='bg-gray-200 text-black font-bold'>
                  <tr className='border-b border-primary'>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Title</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Price</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Slots</th>
                    <th className=' py-3 text-center text-xs font-medium uppercase'>Date</th>
                    <th className=' py-3 text-center  text-xs font-medium uppercase'>Status</th>
                    <th className=' py-3 text-center text-xs font-medium uppercase'>Action</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {tests.map((test, index) => (
                    <>
                      <tr
                        key={index}
                        className='border-b border-primary'
                      >
                        <td className='pr-4 py-4 '>{test.name}</td>
                        <td className='pr-4 py-4 '>{test.price}</td>
                        <td className='pr-4 py-4 '>{test.slots}</td>
                        <td className='pr-4 py-4 text-center '>{test.date}</td>

                        <td className='pr-4 py-4 text-center '>
                          {test.isFeatured ? (
                            <p
                              onClick={() => handleStatusChange(test._id, { isFeatured: "false" })}
                              className=' bg-error cursor-pointer p-2 rounded-md text-white'
                            >
                              Remove Featured
                            </p>
                          ) : (
                            <p
                              className=' bg-info p-2 rounded-md text-white cursor-pointer'
                              onClick={() => handleStatusChange(test._id, { isFeatured: "true" })}
                            >
                              Set Featured
                            </p>
                          )}
                        </td>
                        <td className='pr-4 py-4 text-center '>
                          <div className='w-full flex gap-3 justify-center items-center h-auto'>
                            <button onClick={() => document.getElementById(`modal${index}`).showModal()}>
                              <AiOutlineEye className='text-xl' />
                            </button>
                            <button
                              onClick={() => {
                                navigate(`/dashboard/updatetest/${test._id}`);
                              }}
                            >
                              <AiOutlineEdit className='text-xl' />
                            </button>
                            <button onClick={() => handleDelete(test._id)}>
                              <AiOutlineDelete className='text-xl' />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <dialog
                        id={`modal${index}`}
                        className='modal'
                      >
                        <div className='modal-box'>
                          <img
                            className='w-full aspect-[2/1] rounded-md border-4'
                            src={test.imageURL}
                            alt=''
                          />
                          <div className='flex justify-between my-2'>
                            <p className='bg-primary rounded-md text-secondary font-semibold p-2 pr-0 border border-primary'>
                              Date <span className='bg-white p-2 rounded-r-md'>{test.date}</span>
                            </p>
                            <p className='bg-primary rounded-md text-secondary font-semibold p-2 border border-primary'>{test.price}$</p>
                            <p className='bg-primary rounded-md text-secondary font-semibold p-2 pl-0 border border-primary'>
                              <span className='bg-white p-2 rounded-l-md'>{test.slots}</span> Slots
                            </p>
                          </div>
                          <p className='py-2 text-2xl font-bold'>{test.name}</p>
                          <p className='pb-4 text-justify '>{test.description}</p>
                          <div className='modal-action'>
                            <form method='dialog'>
                              <button className='btn'>Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <p className='p-10 text-center font-bold text-3xl'>No test Found</p>
      )}
    </div>
  );
};

export default AllTestData;
