import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [color, setColor]= useState('transparent');
  const [textColor, setTextColor] = useState('#2B1B9A')

       useEffect(()=> {
        const changeColor = ()=>{
          if(window.scrollY >=90){
             setColor('#2B1B9A')
             setTextColor('white')
          }else{
            setColor('transparent')
             setTextColor('black')
          }
        }
        window.addEventListener('scroll', changeColor)
       }, [])

  return (
    
      <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
        <nav className="flex justify-between items-center max-w-[1300px] mx-auto mt-3 pb-3">
          <Link to='/'>
             <Logo></Logo>
          </Link>
          <ul style={{color: `${textColor}`}} className="flex gap-5 font-semibold text-[#2B1B9A]">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FA585A] underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FA585A] underline" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FA585A] underline" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    
  );
};

export default Navbar;
