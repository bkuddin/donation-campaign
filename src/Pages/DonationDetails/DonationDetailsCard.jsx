import swal from "sweetalert";

const DonationDetailsCard = ({ donation }) => {
  const {id, image, title, donation_amount, description, card_bg_color } = donation || {};

  const handleDonate = () =>{

    const donateArray = [];
    const donateItems = JSON.parse(localStorage.getItem('donations'));
   

    if(!donateItems){
      donateArray.push(donation);
      localStorage.setItem('donations', JSON.stringify(donateArray))
    }else{    

      const isExists = donateItems.find(item => item.id === id);
      console.log(isExists);
      if(!isExists){
        donateArray.push(...donateItems, donation );
        localStorage.setItem('donations', JSON.stringify(donateArray));
        swal("Good job!", "Thank you so much for your donation. Your generosity means everything to us and to the community we serve.", "success");
      }else{
        swal("Thanks", "You already done this job!", "error");
      }
    }

  }

  return (
    <div>     

      <div className="lg:max-w-screen-xl mx-auto relative my-32">
        <img className="w-full rounded-lg" src={image} alt="" />
        <div>
          <div style={{backgroundColor: `${card_bg_color}`, opacity: '56px'}} className="absolute -mt-16 md:-mt-28 w-full py-3 md:py-7 bg-opacity-25 ">
            <button onClick={handleDonate} className="p-2 md:p-4 rounded bg-[#FA585A] text-white  font-bold ml-4">
              Donate ${donation_amount}
            </button>
          </div>
        </div>
        <h3 className="text-4xl font-bold my-4">{title}</h3>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetailsCard;
