import { toast } from "react-toastify";

const Banner = ({ bannerinfo }) => {
  return (
    <div>
      <div
        className='hero rounded-md aspect-[2/1]'
        style={{ backgroundImage: `url(${bannerinfo.image})` }}
      >
        <div className='hero-overlay h-full bg-opacity-70 rounded-md'></div>
        <div className='hero-content py-10 text-white text-center '>
          <div className='max-w-2xl'>
            <h1 className='mb-5  text-5xl font-bold'>{bannerinfo.title}</h1>
            <p className='mb-5'>{bannerinfo.description}</p>
            <p className='mb-5 text-3xl font-semibold'>Get {bannerinfo.couponRate}% Discont On All test</p>

            <button
              onClick={() => {
                navigator.clipboard.writeText(`${bannerinfo.couponCodeName}`);
                toast.success(`Copied Coupon: ${bannerinfo.couponCodeName}`, { autoClose: 500 });
              }}
              className='mb-5 btn uppercase border-2 border-dashed  border-primary'
            >
              Use Coupon: {bannerinfo.couponCodeName}
            </button>
            <br />
            <button className='btn uppercase bg-primary'>Browse All Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
