import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <div>
      {user?.email ? (
        <div className='w-full  overflow-hidden bg-white rounded-lg shadow-lg'>
          <img
            className='object-cover object-center w-full aspect-[2/1]'
            src={user.imageURL}
            alt='avatar'
          />

          <div className='flex items-center px-6 py-3 bg-gray-900'>
            <h1 className='mx-3 text-lg font-semibold text-white'>{user.name}</h1>
          </div>

          <div className='px-6 py-4'>
            <div className='flex items-center mt-4 text-gray-700 '>
              <MdEmail />

              <h1 className='px-2 text-sm'>{user.email}</h1>
            </div>

            <div className='flex items-center mt-4 text-gray-700 '>
              <FaLocationDot />
              <h1 className='px-2 text-sm'>
                {user.upazila}, {user.district}
              </h1>
            </div>

            <div className='flex items-center mt-4 text-gray-700 '>
              <MdBloodtype />
              <h1 className='px-2 text-sm'>{user.bloodGroup.toUpperCase()}</h1>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Profile;
