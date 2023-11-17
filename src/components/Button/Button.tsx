import React from "react"
import './Button.scss';
import svg from '../svg/japanese-food.svg';
import icon from '../icon/4.svg';
import image from '../image/1.svg';
import svg2 from '../svg2/2.svg';
import svg3 from '../svg3/3.svg';



const Button =() => {
    return (
        <header>
        <div className="container">
          <div className="logo-mail">
            <div className="flex-between">
              <a href="tel:(414)857-0107" className="phone"
                ><i
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 3.75C2.25 2.92157 2.92157 2.25 3.75 2.25H6.20943C6.53225 2.25 6.81886 2.45657 6.92094 2.76283L8.0443 6.13291C8.16233 6.48699 8.00203 6.87398 7.6682 7.0409L5.97525 7.88737C6.80194 9.72091 8.27909 11.1981 10.1126 12.0247L10.9591 10.3318C11.126 9.99796 11.513 9.83767 11.8671 9.9557L15.2372 11.0791C15.5434 11.1811 15.75 11.4677 15.75 11.7906V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H13.5C7.2868 15.75 2.25 10.7132 2.25 4.5V3.75Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg></i>
                <span>(414)857-0107</span></a>
              
              <a href="mailto:yummy@bistrobliss" className="mail">
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 6L8.16795 9.9453C8.6718 10.2812 9.3282 10.2812 9.83205 9.9453L15.75 6M3.75 14.25H14.25C15.0784 14.25 15.75 13.5784 15.75 12.75V5.25C15.75 4.42157 15.0784 3.75 14.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V12.75C2.25 13.5784 2.92157 14.25 3.75 14.25Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
                <span>yummy@bistrobliss</span>
              </a>
            </div>
            <div className="div-slogo">
              <a href="https://twitter.com"
                ><img src={image} alt=""
              /></a>
              <a href="https://facebook.com"
                ><img src={svg2} alt=""
              /></a>
              <a href="https://instagram.com"
                ><img src={icon} alt=""
              /></a>
              <a href="https://github.com"
                ><img src={svg3} alt=""
              /></a>
            </div>
          </div>
        </div>
        <div className="container3">
          <a className="logo">
            <img src={svg} className="Bistro" />
            <h2 className="Bistro">Bistro Bliss</h2>
          </a>
          <ul className="list1">
            <li><a href="main.html" className="link">Home</a></li>
            <li><a href="about.html" className="link">About</a></li>
            <li><a href="manu.html" className="link">Menu</a></li>
            <li><a href="pages.html" className="link">Pages</a></li>
            <li><a href="contact.html" className="link">Contact</a></li>
            <button className="button0">
              <a href="#" className="button0">Book A Table</a>
            </button>
          </ul>
        </div>
        </header>
    );
};
export default Button;

