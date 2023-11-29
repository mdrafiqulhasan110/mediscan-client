import { useState } from "react";

const AddBannerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    title: "",
    description: "",
    couponCodeName: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can add logic here to handle the file upload
    setFormData({
      name: "",
      image: null,
      title: "",
      description: "",
      couponCodeName: "",
      couponRate: "",
    });
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
          htmlFor='couponCodeName'
        >
          Coupon Code Name:
        </label>
        <input
          className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
          type='text'
          name='couponCodeName'
          value={formData.couponCodeName}
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
          type='text'
          name='couponRate'
          value={formData.couponRate}
          onChange={handleInputChange}
        />
      </div>

      <div className='mb-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddBannerForm;
