import { useEffect, useState } from "react";
import logo_color from './../../images/donation-campaign-logo.png';
import logo_white from './../../images/donation-campaign-logo-white.png';

const Logo = () => {
    const [textColor, setTextColor] = useState('black')
    const [isScrolled, setIsScrolled] = useState(false);

       useEffect(()=> {
        const changeColor = ()=>{
          if(window.scrollY >=90){
            
             setTextColor('white')
             setIsScrolled(true)
             
          }else{
           
             setTextColor('black')
             setIsScrolled(false)
             
          }
        }
        window.addEventListener('scroll', changeColor)
       }, [])
    return (
        <div style={{color: `${textColor}`}}>
            <img className="w-20" src={isScrolled ? logo_white : logo_color} alt="" />
            
        </div>
    );
};

export default Logo;