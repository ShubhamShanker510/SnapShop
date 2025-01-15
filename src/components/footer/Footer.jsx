import React from "react";
import playStore from '../../assets/images/playStore.png'
import socialMedia from '../../assets/images/social-media.png'
import offer from '../../assets/images/offer.png'

const Footer = () => {
  return (
    <div className="footer flex flex-col p-4 border border-gray-300">
      <div className="sec1 grid grid-cols-4 mb-5 text-sm">
        <div className="shopping flex flex-col justify-center">
          <p className="font-semibold text-slate-500">ONLINE SHOPPING</p>
          <ul className="text-gray-800 font-thin cursor-pointer">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </div>
        <div className="customer">
            <p className="font-semibold text-slate-500">CUSTOMER POLICIES</p>
            <ul className="text-gray-800 font-thin cursor-pointer">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Terms of Use</li>
                <li>Track Order</li>
                <li>Shipping Orders</li>
            </ul>
        </div>
        <div className="social">
            <div className="label">
                <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
            </div>
            <div className="play_store cursor-pointer">
                <a href="/"><img src={playStore} alt="" /></a>
            </div>
            <div className="social-media cursor-pointer">
                <a href="/"><img src={socialMedia} alt="" /></a>
            </div>
        </div>
        <div className="offer">
            <img src={offer} alt="" />
        </div>

      </div>
      <div className="sec2 flex justify-around text-slate-800 font-light text-sm">
        <p>In case of any concern, Contact Us</p>
        <p>© 2025 All rights reserved.</p>
      </div>
      
    </div>
  );
};

export default Footer;
