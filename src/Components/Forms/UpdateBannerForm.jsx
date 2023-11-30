import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateBannerForm = ({ id }) => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [banner, setBanner] = useState({});

  useEffect(() => {
    axiosSecure
      .get(`/banner/${id}`)
      .then(function (response) {
        setBanner(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [axiosSecure, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBanner({ ...banner, [name]: value });
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
      setBanner({ ...banner, image: res.data.data.display_url });
      setUploading(false);
    } else {
      toast.error("There was a error uploading the image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatebanner = {
      image: banner.image,
      title: banner.title,
      description: banner.description,
      couponCode: banner.couponCode,
      couponRate: parseFloat(banner.couponRate),
    };
    //
    const updatedBanner = await axiosSecure.put(`/banner/${id}`, updatebanner);
    if (updatedBanner.status == 201) {
      toast.success("Banner Updated Succesfully");
      navigate("/dashboard/allbanners");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=' mx-auto my-6  p-4 rounded-md border border-primary'
    >
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-medium text-gray-600 '
              htmlFor='title'
            >
              Title:
            </label>
            <input
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='text'
              name='title'
              value={banner.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-medium text-gray-600 '
              htmlFor='couponCode'
            >
              Coupon Code:
            </label>
            <input
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='text'
              name='couponCode'
              value={banner.couponCode}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='mb-4'>
            <label
              className='block mb-2 text-sm font-medium text-gray-600 '
              htmlFor='couponRate'
            >
              Coupon Rate:
            </label>
            <input
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='number'
              name='couponRate'
              value={banner.couponRate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className='flex flex-col justify-between gap-2 '>
          <div className='flex-1 border rounded-md'>
            {uploading ? (
              <p className='text-center py-4'>uploading...</p>
            ) : !banner.image ? (
              <p className='text-center py-4'>No Image</p>
            ) : (
              <div
                className='p-1 h-full bg-cover rounded-md border'
                style={{ backgroundImage: `url(${banner.image})` }}
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

      <div className='mb-4'>
        <label
          className='block mb-2 text-sm font-medium text-gray-600 '
          htmlFor='description'
        >
          Description:
        </label>
        <textarea
          className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
          name='description'
          value={banner.description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className='mb-4'>
        <button
          className='bg-primary w-full hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateBannerForm;
