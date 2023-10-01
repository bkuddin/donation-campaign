import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import DonationsData from "../../components/DonationsData/DonationsData";

const Home = () => {
  const donations = useLoaderData();  
  const [filteredResults, setFilteredResults] = useState('');
  
  const handleSearch = (search) => {
      const result = donations.filter(f => f.group.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredResults(result);
  };
   
  


  return (
    <div>
      <div>
          <Banner handleSearch={handleSearch}></Banner>
      </div>
      <div className="mx-28">
          <DonationsData donations={donations} filteredResults={filteredResults}></DonationsData>
      </div>
    </div>
  );
};

export default Home;
