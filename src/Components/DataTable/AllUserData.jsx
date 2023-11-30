import { useNavigate } from "react-router-dom";
import useAllUser from "../../Hooks/useAllUser";
import Profile from "../User/Profile";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUserData = () => {
  const { users, refetch } = useAllUser();
  const axiosSecure = useAxiosSecure();

  const handleStatusChange = (id, request) => {
    axiosSecure
      .put(`/user/changestatus/${id}`, request)
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
      {users.length > 0 ? (
        <>
          <div>
            <div className='overflow-x-auto'>
              <table className='table min-w-full '>
                <thead className='bg-gray-200 text-black font-bold'>
                  <tr className='border-b border-primary'>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Name</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>District</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Upazila</th>
                    <th className=' py-3 text-center text-xs font-medium uppercase'>Role</th>
                    <th className=' py-3 text-center  text-xs font-medium uppercase'>Status</th>
                    <th className=' py-3 text-center text-xs font-medium uppercase'>Action</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {users.map((user, index) => (
                    <>
                      <tr
                        key={index}
                        className='border-b border-primary'
                      >
                        <td className='pr-4 py-4 '>{user.name.toUpperCase()}</td>
                        <td className='pr-4 py-4 '>{user.district.toUpperCase()}</td>
                        <td className='pr-4 py-4 '>{user.upazila.toUpperCase()}</td>
                        <td className='pr-4 py-4 text-center '>{user.role.toUpperCase()}</td>

                        <td className='pr-4 py-4 text-center '>{user.status.toUpperCase()}</td>
                        <td className='pr-4 py-4 text-center '>
                          <div className='w-full flex gap-3 justify-center items-center h-auto'>
                            <p
                              onClick={() => document.getElementById(`modal${index}`).showModal()}
                              className=' bg-primary p-1 rounded-md text-xs text-white cursor-pointer'
                            >
                              View
                            </p>
                            {user.role == "admin" ? (
                              <p
                                onClick={() => handleStatusChange(user._id, { role: "user" })}
                                className=' bg-info p-1 rounded-md text-xs text-white cursor-pointer'
                              >
                                Make User
                              </p>
                            ) : (
                              <p
                                onClick={() => handleStatusChange(user._id, { role: "admin" })}
                                className=' bg-primary p-1 rounded-md text-xs text-white cursor-pointer'
                              >
                                Make Admin
                              </p>
                            )}
                            {user.status == "active" ? (
                              <p
                                onClick={() => handleStatusChange(user._id, { status: "blocked" })}
                                className=' bg-error p-1 rounded-md text-xs text-white cursor-pointer'
                              >
                                Block
                              </p>
                            ) : (
                              <p
                                onClick={() => handleStatusChange(user._id, { status: "active" })}
                                className=' bg-success p-1 rounded-md text-xs text-white cursor-pointer'
                              >
                                Unblock
                              </p>
                            )}
                          </div>
                        </td>
                      </tr>
                      <dialog
                        id={`modal${index}`}
                        className='modal'
                      >
                        <div className='modal-box p-0'>
                          <Profile user={user}></Profile>
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
        <p className='p-10 text-center font-bold text-3xl'>No user Found</p>
      )}
    </div>
  );
};

export default AllUserData;
