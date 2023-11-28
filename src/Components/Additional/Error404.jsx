import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-10'>
      <img
        className='w-[40%]'
        src='../injured.png'
        alt=''
      />
      <h1 className='text-6xl font-bold'>Opps!!! Page Not Found</h1>
      <Link to={"/"}>
        <button className='btn bg-primary text-white hover:bg-black'>Back To Home</button>
      </Link>
    </div>
  );
};

export default Error404;
