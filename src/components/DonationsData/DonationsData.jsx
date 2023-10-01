import PropTypes from 'prop-types';
import DonationsDataCard from "./DonationsDataCard";

const DonationsData = ({ donations, filteredResults }) => {
  return (
    <div className="max-w-screen-2xl mx-auto my-20">
      <div>
        {filteredResults ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5">
            {filteredResults?.map((donation) => (
              <DonationsDataCard
                key={donation.id}
                donation={donation}
              ></DonationsDataCard>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {donations?.map((donation) => (
              <DonationsDataCard
                key={donation.id}
                donation={donation}
              ></DonationsDataCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


DonationsData.propTypes ={
  donations: PropTypes.array.isRequired,
  filteredResults: PropTypes.func.isRequired,
  

}
export default DonationsData;
