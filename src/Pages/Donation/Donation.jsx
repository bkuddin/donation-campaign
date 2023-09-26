import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donations"));
    if (donateItems) {
        setDonations(donateItems);

      console.log(donateItems);
    }
  }, []);

  return (
    <div className="mt-40 max-w-[1300px] mx-auto">
     

      <div className="grid md:grid-cols-2 gap-8 ">
          {
            isShow? donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>) : donations.slice(0,4).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
          }
      </div>

     
      <div className="flex justify-center">
        { donations.length >4 &&
          <button onClick={()=> setIsShow(!isShow)} className="px-8 py-3 bg-[#FA585A] font-black text-white rounded-lg my-20">
          {isShow? 'See less': 'See more'}
        </button>
        }
      </div>
     
    </div>
  );
};

export default Donation;
