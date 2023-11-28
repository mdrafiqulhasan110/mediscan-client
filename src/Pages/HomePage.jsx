import { Helmet } from "react-helmet-async";
import Banner from "../Components/Essential/Banner";

const HomePage = () => {
  const banners = [
    {
      "name": "Banner 1",
      "image": "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Exclusive Holiday Sale",
      "description": "Shop now and enjoy amazing discounts on our latest collection!",
      "couponCodeName": "HOLIDAY20",
      "couponRate": 20,
      "isActive": true,
    },
    {
      "name": "Banner 2",
      "image": "banner2.png",
      "title": "Flash Deal Alert",
      "description": "Hurry! Limited-time offer on selected items. Don't miss out!",
      "couponCodeName": "FLASH25",
      "couponRate": 25,
      "isActive": false,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>MediScan | Home Page</title>
      </Helmet>
      <Banner
        bannerinfo={banners.find((ban) => {
          return ban.isActive;
        })}
      ></Banner>
    </div>
  );
};

export default HomePage;
