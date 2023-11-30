import { Helmet } from "react-helmet-async";
import TestCard from "../Components/Essential/TestCard";
import useAllTest from "../Hooks/useAllTest";

const TestPage = () => {
  const { tests } = useAllTest();

  return (
    <div>
      <Helmet>
        <title>MediScan | All Test</title>
      </Helmet>
      <div className='divider py-6 bg-primary rounded-md m-0'>
        <h1 className='text-cente text-white text-3xl font-bold'>All Tests</h1>
      </div>
      <div className='grid grid-cols-2 gap-10 my-10'>
        {tests &&
          tests.map((t) => {
            return (
              <TestCard
                key={t._id}
                test={t}
              ></TestCard>
            );
          })}
      </div>
    </div>
  );
};

export default TestPage;
