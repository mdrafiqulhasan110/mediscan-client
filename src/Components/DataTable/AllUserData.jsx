import { Link } from "react-router-dom";
import useAllUser from "../../Hooks/useAllUser";

const AllUserData = () => {
  const [users] = useAllUser();
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
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Role</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Status</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Details</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className='border-b border-primary'
                    >
                      <td className='pr-4 py-4 whitespace-nowrap'>{user.name.toUpperCase()}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{user.district.toUpperCase()}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{user.upazila.toUpperCase()}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>{user.role.toUpperCase()}</td>

                      <td className='pr-4 py-4 whitespace-nowrap'>{user.status.toUpperCase()}</td>
                      <td className='pr-4 py-4 whitespace-nowrap'>
                        <Link to={`/users/${user._id}`}>
                          <button className='p-2 bg-primary rounded-md text-white'>Details</button>
                        </Link>
                      </td>
                    </tr>
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
