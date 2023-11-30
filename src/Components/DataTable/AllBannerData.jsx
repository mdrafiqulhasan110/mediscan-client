import { useNavigate } from "react-router-dom";
import useAllBanner from "../../Hooks/useAllBanner";
import { AiOutlineEye, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllBannerData = () => {
  const { banners, refetch } = useAllBanner();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleActive = (id) => {
    axiosSecure
      .put(`/banner/active/${id}`)
      .then(function (response) {
        Swal.fire("Activated!", "Banner Activated.", "success");
        refetch();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (id, status) => {
    if (!status) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .delete(`/banner/${id}`)
            .then(function (response) {
              Swal.fire("Deleted!", "Banner has been deleted.", "success");
              refetch();
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    } else {
      Swal.fire({
        title: "Sorry",
        text: "Please Active Another Banner before deleting",
        icon: "error",
      });
    }
  };

  return (
    <div>
      {banners.length > 0 ? (
        <>
          <div>
            <div className='overflow-x-auto'>
              <table className='table min-w-full '>
                <thead className='bg-gray-200 text-black font-bold'>
                  <tr className='border-b border-primary'>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Title</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Description</th>
                    <th className=' py-3 text-left text-xs font-medium uppercase'>Coupon Code</th>
                    <th className=' py-3 text-center text-xs font-medium uppercase'>Coupon Rate</th>
                    <th className=' py-3 text-center  text-xs font-medium uppercase'>Status</th>
                    <th className=' py-3 text-center text-xs font-medium uppercase'>Action</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {banners.map((banner, index) => (
                    <>
                      <tr
                        key={index}
                        className='border-b border-primary'
                      >
                        <td className='pr-4 py-4 '>{banner.title}</td>
                        <td className='pr-4 py-4 '>{banner.description}</td>
                        <td className='pr-4 py-4 '>{banner.couponCode}</td>
                        <td className='pr-4 py-4 text-center '>{banner.couponRate}%</td>

                        <td className='pr-4 py-4 text-center '>
                          {banner.isActive ? (
                            <p className=' bg-primary p-2 rounded-md text-white'>Active</p>
                          ) : (
                            <p
                              className=' bg-info p-2 rounded-md text-white cursor-pointer'
                              onClick={() => handleActive(banner._id)}
                            >
                              Set Active{" "}
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
                                navigate(`/dashboard/updatebanner/${banner._id}`);
                              }}
                            >
                              <AiOutlineEdit className='text-xl' />
                            </button>
                            <button onClick={() => handleDelete(banner._id, banner.isActive)}>
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
                            className='w-full aspect-[2/1] rounded-md'
                            src={banner.image}
                            alt=''
                          />
                          <div className='flex justify-between my-2'>
                            <p className='bg-primary rounded-md text-secondary font-semibold p-2 pr-0 border border-primary'>
                              Coupon Code <span className='bg-white p-2 rounded-r-md'>{banner.couponCode}</span>{" "}
                            </p>
                            <p className='bg-primary rounded-md text-secondary font-semibold p-2 pl-0 border border-primary'>
                              <span className='bg-white p-2 rounded-l-md'>{banner.couponRate}%</span> Coupon Rate
                            </p>
                          </div>
                          <p className='py-2 text-2xl font-bold'>{banner.title}</p>
                          <p className='pb-4 text-justify '>{banner.description}</p>
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
        <p className='p-10 text-center font-bold text-3xl'>No banner Found</p>
      )}
    </div>
  );
};

export default AllBannerData;
