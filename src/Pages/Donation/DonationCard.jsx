import { Link } from "react-router-dom";

const DonationCard = ({ donation, handleSelectedRemove }) => {
  const {
    id,
    image,
    title,
    group,
    donation_amount,
    text_color,
    category_bg_color,
    card_bg_color,
  } = donation || {};
  
  




  return (
    <div>
      <div
        className="relative flex md:h-[200px] w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md"
        style={{ backgroundColor: `${card_bg_color}` }}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block text-sm font-semibold leading-relaxed tracking-normal antialiased">
            <span
              className="px-4 py-1 rounded-md"
              style={{
                color: `${text_color}`,
                backgroundColor: `${category_bg_color}`,
              }}
            >
              {group}
            </span>
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mb-2 block font-bold text-[Inter] leading-relaxed antialiased">
            <span style={{ color: `${text_color}` }}>${donation_amount}</span>
          </p>

          <div className="flex items-center">
            <div>
              <Link to={`/donation-details/${id}`}>
                <button
                  className="select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-sm font-bold  text-white transition-all   disabled:pointer-events-none"
                  type="button"
                  data-ripple-light="true"
                  style={{
                    backgroundColor: `${text_color}`,
                    boxShadow: `${category_bg_color}`,
                  }}
                >
                  View Details
                </button>
              </Link>
            </div>
            <div className=" pt-0">
              <a
                className=""
                href="#"
              >
                <button onClick={()=> handleSelectedRemove(id)} style={{color: `${text_color}`}}
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold"
                  type="button"
                  data-ripple-dark="true"
                >
                  Remove It
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
