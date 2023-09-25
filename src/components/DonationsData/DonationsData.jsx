import DonationsDataCard from "./DonationsDataCard";


const DonationsData = ({donations}) => {
     
    return (
        <div className="max-w-screen-2xl mx-auto my-20">

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    donations.map(donation => <DonationsDataCard key={donation.id} donation={donation}></DonationsDataCard>)
                }
            </div>
            
        </div>
    );
};

export default DonationsData;