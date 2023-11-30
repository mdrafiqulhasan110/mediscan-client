import useAllTest from "../../Hooks/useAllTest";
import TestCard from "./TestCard";

const FeaturedTest = () => {
  const { tests } = useAllTest();

  const featuredTest = tests.filter((test) => test.isFeatured);

  return (
    <div className='my-16'>
      <div className='divider py-6 bg-primary rounded-md m-0 mb-6'>
        <h1 className='text-cente text-white text-3xl font-bold'>Featured Test</h1>
      </div>
      <div className='grid grid-cols-2 gap-10'>
        {featuredTest &&
          featuredTest.map((t) => {
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

export default FeaturedTest;
