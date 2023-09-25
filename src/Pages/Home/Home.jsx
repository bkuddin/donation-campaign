import { useLoaderData } from "react-router-dom";
import DonationsData from "../../components/DonationsData/DonationsData";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const donations = useLoaderData();
  return (
    <div>
      <div>
          <Banner></Banner>
      </div>
      <div className="mx-28">
          <DonationsData donations={donations}></DonationsData>
      </div>
    </div>
  );
};

export default Home;
