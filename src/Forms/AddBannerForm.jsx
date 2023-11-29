import { useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddBannerForm = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const host = "https://api.imgbb.com/1/upload?key=b8c5a12a22627c5178af499ba5ac5c65";
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    title: "",
    description: "",
    couponCode: "",
    couponRate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    const imageData = new FormData();
    imageData.append("image", formData.image);
    const res = await axiosPublic.post(host, imageData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const banner = {
        image: res.data.data.display_url,
        title: formData.title,
        description: formData.description,
        couponCode: formData.couponCode,
        couponRate: parseFloat(formData.couponRate),
      };
      //
      const addedBanner = await axiosSecure.post("/banner", banner);
      console.log(addedBanner);
      if (addedBanner.status == 201) {
        // show success popup
        console.log("soccess");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=' mx-auto my-6  p-4 rounded-md border border-primary'
    >
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
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>

      <div className='mb-4'>
        <label
          className='block mb-2 text-sm font-medium text-gray-600 '
          htmlFor='image'
        >
          Image:
        </label>
        <input
          className='file-input file-input-bordered  block w-full  text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
          type='file'
          accept='image/*'
          name='image'
          id='image'
          onChange={handleImageChange}
        />
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
          value={formData.description}
          onChange={handleInputChange}
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
          value={formData.couponCode}
          onChange={handleInputChange}
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
          value={formData.couponRate}
          onChange={handleInputChange}
        />
      </div>

      <div className='mb-4'>
        <button
          className='bg-primary w-full hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddBannerForm;
