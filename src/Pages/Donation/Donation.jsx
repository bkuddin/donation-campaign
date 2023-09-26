import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [noDataFound, setNoDataFound] = useState("");

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donations"));
    if (donateItems) {
      setDonations(donateItems);

      console.log(donateItems);
    } else {
      setNoDataFound("There were no donation found.");
    }
  }, []);

  // Handle Selected Remove 

  const handleSelectedRemove = (id)=>{
    const donateItems = JSON.parse(localStorage.getItem("donations"));
    const remaining = donateItems.filter(donation => donation.id !== id);
    localStorage.setItem(
      "donations",
      JSON.stringify(remaining)

    );
    setDonations(remaining)
    setNoDataFound("There were no donation found.");

  }

  return (
    <div className="mt-40 max-w-[1300px]  mx-auto">
      {noDataFound ? (
        <div className="flex justify-center h-[50vh]  items-center ">
          <p className="text-4xl mr-5">{noDataFound}</p> 
          <div>
            <Link to="/">
              <button className="px-8 py-3 text-xl font-bold text-white bg-[#FA585A]">
                Donate
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 ">
          {isShow
            ? donations.map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                ></DonationCard>
              ))
            : donations
                .slice(0, 4)
                .map((donation) => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}
                    handleSelectedRemove={handleSelectedRemove}
                  ></DonationCard>
                ))}
        </div>
      )}

      <div className="flex justify-center">
        {donations.length > 4 && (
          <button
            onClick={() => setIsShow(!isShow)}
            className="px-8 py-3 bg-[#FA585A] font-black text-white rounded-lg my-20"
          >
            {isShow ? "See less" : "See more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
