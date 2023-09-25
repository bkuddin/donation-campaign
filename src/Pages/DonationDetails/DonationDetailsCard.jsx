const DonationDetailsCard = ({ donation }) => {
  const {id, image, title, donation_amount, description } = donation || {};

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
      }else{
        alert('Already exists')
      }
    }

  }

  return (
    <div>     

      <div className="lg:max-w-screen-xl mx-auto relative my-32">
        <img className="w-full rounded-lg" src={image} alt="" />
        <div>
          <div className="absolute -mt-16 md:-mt-28 w-full py-3 md:py-7 bg-black bg-opacity-40">
            <button onClick={handleDonate} className="p-2 md:p-4 rounded bg-[#FA585A] text-white font-bold ml-4">
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
