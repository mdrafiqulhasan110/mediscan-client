import { useState } from "react";
import useUserInfo from "../../Hooks/useUserInfo";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UpdateProfileForm = () => {
  const { userinfo } = useUserInfo();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [modifiedUser, setModifieUser] = useState(userinfo);
  console.log(modifiedUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifieUser({ ...modifiedUser, [name]: value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploading(true);
    const imageData = new FormData();
    imageData.append("image", file);
    const res = await axiosPublic.post(import.meta.env.VITE_IMGBB_KEY, imageData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      setModifieUser({ ...modifiedUser, imageURL: res.data.data.display_url });
      setUploading(false);
    } else {
      toast.error("There was a error uploading the image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      name: modifiedUser.name,
      imageURL: modifiedUser.imageURL,
      email: modifiedUser.email,
      bloodGroup: modifiedUser.bloodGroup,
      district: modifiedUser.district,
      upazila: modifiedUser.upazila,
    };

    const updateUser = await axiosSecure.put(`/user/${modifiedUser._id}`, updatedUser);
    if (updateUser.status == 201) {
      toast.success("Profile Updated Succesfully");
      navigate("/dashboard/profile");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <div className='mb-4 w-full'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Name:
              </label>
              <input
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                name='name'
                value={modifiedUser.name}
                placeholder='Name'
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='mb-4 w-full'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='bloodGroup'
              >
                Blood Group:
              </label>
              <select
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                required
                name='bloodGroup'
                defaultValue={modifiedUser.bloodGroup}
                onChange={handleInputChange}
              >
                <option
                  disabled
                  value=''
                >
                  Blood Group
                </option>
                <option value='a+'>A+</option>
                <option value='a-'>A-</option>
                <option value='b+'>B+</option>
                <option value='b-'>B-</option>
                <option value='ab+'>AB+</option>
                <option value='ab-'>AB-</option>
                <option value='o+'>O+</option>
                <option value='o-'>O-</option>
              </select>
            </div>
            <div className='mb-4 w-full'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='district'
              >
                District:
              </label>
              <select
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                required
                name='district'
                defaultValue={modifiedUser.district}
                onChange={handleInputChange}
              >
                <option
                  disabled
                  value=''
                >
                  Select District
                </option>
                <option value='fd'>Select da</option>
              </select>
            </div>
            <div className='mb-4 w-full'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='upazila'
              >
                Upazila{" "}
              </label>
              <select
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                required
                name='upazila'
                defaultValue={modifiedUser.upazila}
                onChange={handleInputChange}
              >
                <option
                  disabled
                  value=''
                >
                  Select Upazila
                </option>
                <option value='d'>a </option>
              </select>
            </div>
          </div>

          <div className='flex flex-col justify-between gap-2 '>
            <div className='flex-1 border rounded-md'>
              {uploading ? (
                <p className='text-center py-4'>uploading...</p>
              ) : !modifiedUser.imageURL ? (
                <p className='text-center py-4'>No Image</p>
              ) : (
                <div
                  className='p-1 h-full bg-cover rounded-md border'
                  style={{ backgroundImage: `url(${modifiedUser.imageURL})` }}
                ></div>
              )}
            </div>
            <div className='mb-4'>
              <input
                className='file-input file-input-bordered  block w-full  text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                type='file'
                accept='image/*'
                name='image'
                id='image'
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <button className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'>Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
