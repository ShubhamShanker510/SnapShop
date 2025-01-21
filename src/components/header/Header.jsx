import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import profile from "../../assets/images/profile-user.png";
import heart from "../../assets/images/heart.png";
import bag from "../../assets/images/bag.png";
import Box from "../hover_box/Box";
import Box2 from "../hover_box/Box2";
import Box3 from "../hover_box/Box3";
import Box4 from "../hover_box/Box4";
import ProfileBox from "../hover_box/ProfileBox";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [display, setDisplay] = useState(-1);
  const [scroll, setScroll] = useState(false);
  const [box,setBox]=useState(false)
  const [input,setInput]=useState('')
  const navigate=useNavigate()

  const onMouseEnter = (key) => {
    setDisplay(key);
  };

  const onMouseLeave = () => {
    setDisplay(-1);
  };

  const showBox=()=>{
    setBox(true)
  }

  const leaveBox=()=>{
    setBox(false)
  }

  const links = [
    {
      name: "MEN",
      link: "/categories/mens",
    },
    {
      name: "WOMEN",
      link: "/categories/womens",
    },
    {
      name: "ELECTRONICS",
      link: "/categories/eletronics",
    },
    {
      name: "JEWELERY",
      link: "/categories/jwelery"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch=()=>{
    if(input!==''){
      navigate('/products',{state:{category:input, data:''}})
    }
  }

  return (
    <div className={`nav flex justify-between p-[10px] fixed z-20 bg-white w-[100vw] ${scroll ? "border shadow shadow-black shadow-md" : ""}`}>
      <div className="left flex items-center">
        <div className="logo">
          <Link to='/'><img src={logo} alt="Logo" className="w-[200px]" /></Link>
        </div>
        <div className="nav-link">
          <ul className="path flex font-bold">
            {links.map((item, key) => (
              <li key={key} className="mr-3 hover:underline hover:text-red-500" onMouseEnter={() => onMouseEnter(key)} onMouseLeave={onMouseLeave}>
                <Link to={item.link} className="text-slate-800">{item.name}</Link>
                {display === key && item.name === "MEN" && <Box />}
                {display === key && item.name === "WOMEN" && <Box2 />}
                {display === key && item.name === "ELECTRONICS" && <Box3 />}
                {display === key && item.name === "JEWELERY" && <Box4 />}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right flex items-center w-[50vw] justify-around">
        <div className="input flex items-center mr-7">
          <input type="text" placeholder="Search for products..." className="border p-2 w-[500px] bg-gray-300 rounded-md relative" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <span><img src={search} alt="Search Icon" className="border border-gray-300 w-[40px] cursor-pointer rounded-r-md bg-gray-300 absolute top-4" onClick={handleSearch}/></span>
        </div>
        <div className="items flex">
          <div className="profile relative mr-3 flex flex-col items-center cursor-pointer hover:text-red-500" onMouseEnter={showBox} onMouseLeave={leaveBox}>
            <img src={profile} alt="Profile Icon" width={20} />
            <p className="text-sm font-medium hover:text-red-500 hover:underline">Profile</p>
            {box && <ProfileBox/>}
          </div>
          <div className="wishlist mr-3 flex flex-col items-center cursor-pointer">
            <img src={heart} alt="Wishlist Icon" width={20} />
            <p className="text-sm font-medium">Wishlist</p>
          </div>
          <div className="bag mr-3 flex flex-col items-center cursor-pointer">
            <img src={bag} alt="Bag Icon" width={20} />
            <p className="text-sm font-medium">Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
