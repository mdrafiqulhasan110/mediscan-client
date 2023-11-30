import { Link } from "react-router-dom";

const TestCard = ({ test }) => {
  return (
    <div className='p-4 shadow-md rounded-lg border'>
      <img
        className='w-full aspect-[2/1] rounded-md border-4'
        src={test.imageURL}
        alt=''
      />
      <div className='flex justify-between my-2'>
        <p className='bg-primary rounded-md text-secondary font-semibold p-2 pr-0 border border-primary'>
          Date <span className='bg-white p-2 rounded-r-md'>{test.date}</span>
        </p>
        <p className='bg-primary rounded-md text-secondary font-semibold p-2 border border-primary'>{test.price}$</p>
        <p className='bg-primary rounded-md text-secondary font-semibold p-2 pl-0 border border-primary'>
          <span className='bg-white p-2 rounded-l-md'>{test.slots}</span> Slots
        </p>
      </div>
      <p className='py-2 text-2xl font-bold'>{test.name}</p>
      <p className='pb-4 text-justify '>{test.description}</p>
      <Link to={`/testdetails/${test._id}`}>
        <button className='bg-primary w-full hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Details</button>
      </Link>
    </div>
  );
};

export default TestCard;
