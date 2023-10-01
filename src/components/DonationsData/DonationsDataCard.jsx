import { Link } from "react-router-dom";

const DonationsDataCard = ({ donation }) => {
  const {
    id,
    image,
    title,
    group,
    card_bg_color,
    category_bg_color,
    text_color,
  } = donation;
  return (
    <div>
      <Link to={`/donation-details/${id}`}>
        <div
          className="flex max-w-[24rem] h-[350px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          style={{ backgroundColor: `${card_bg_color}` }}
        >
          <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img className=" w-full" src={image} alt="donation group cover" />
          </div>
          <div className="flex items-center justify-between px-6 py-4 ">
            <div className="flex items-center -space-x-3 ">
              <div
                data-tooltip="author-2"
                className=" whitespace-normal break-words rounded-lg  py-1.5 px-3 font-sans text-sm font-medium focus:outline-none"
                style={{
                  backgroundColor: `${category_bg_color}`,
                  color: `${text_color}`,
                  fontFamily: "Inter",
                }}
              >
                {group}
              </div>
            </div>
          </div>
          <div className="px-6 py-2">
            <h4
              className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
              style={{
                color: `${text_color}`,
                fontWeight: "bold",
                fontFamily: "Inter",
              }}
            >
              {title}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsDataCard;
