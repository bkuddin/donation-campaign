import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donations"));
    if (donateItems) {
        setDonations(donateItems);

      console.log(donateItems);
    }
  }, []);

  return (
    <div className="mt-40">
     

      <div className="grid md:grid-cols-2 gap-8 max-w-[1300px] mx-auto">
          {
            donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
          }
      </div>
    </div>
  );
};

export default Donation;
