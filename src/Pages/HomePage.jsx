import { Helmet } from "react-helmet-async";
import Banner from "../Components/Essential/Banner";
import FeaturedTest from "../Components/Essential/FeaturedTest";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>MediScan | Home Page</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedTest></FeaturedTest>
    </div>
  );
};

export default HomePage;
