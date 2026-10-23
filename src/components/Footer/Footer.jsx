import s from "./Footer.module.scss";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";

import visa from "../../assets/visa.svg";
import Badge from "../../assets/Badge (1).svg";
import paypal from "../../assets/paypal.svg";
import applePay from "../../assets/apple_pay.svg";
import googlePay from "../../assets/google_pay.svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footer__item}>
          <div className={s.footer__top}>
            <div className={s.footer__social}>
              <h2 className={s.footer__logo}>SHOP.CO</h2>
              <p className={s.footer__description}>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className={s.social__logo}>
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={github} alt="" />
              </div>
            </div>
            <div className={s.footer__info}>
              <span className={s.footer__infoTitle}>Company</span>
              <a href="" className={s.footer__infoOther}>
                About
              </a>
              <a href="" className={s.footer__infoOther}>
                Features
              </a>
              <a href="" className={s.footer__infoOther}>
                Works
              </a>
              <a href="" className={s.footer__infoOther}>
                Career
              </a>
            </div>
            <div className={s.footer__info}>
              <span className={s.footer__infoTitle}>Help</span>
              <a href="" className={s.footer__infoOther}>
                Customer Support
              </a>
              <a href="" className={s.footer__infoOther}>
                Delivery Details
              </a>
              <a href="" className={s.footer__infoOther}>
                Terms & Conditions
              </a>
              <a href="" className={s.footer__infoOther}>
                Privacy Policy
              </a>
            </div>
            <div className={s.footer__info}>
              <span className={s.footer__infoTitle}>FAQ</span>
              <a href="" className={s.footer__infoOther}>
                Account
              </a>
              <a href="" className={s.footer__infoOther}>
                Manage Deliveries
              </a>
              <a href="" className={s.footer__infoOther}>
                Orders
              </a>
              <a href="" className={s.footer__infoOther}>
                Payments
              </a>
            </div>
            <div className={s.footer__info}>
              <span className={s.footer__infoTitle}>Resources</span>
              <a href="" className={s.footer__infoOther}>
                Free eBooks
              </a>
              <a href="" className={s.footer__infoOther}>
                Development Tutorial
              </a>
              <a href="" className={s.footer__infoOther}>
                How to - Blog
              </a>
              <a href="" className={s.footer__infoOther}>
                Youtube Playlist
              </a>
            </div>
          </div>
          <hr className={s.footer__line} />
          <div className={s.footer__bottom}>
            <span className={s.footer__rights}>
              Shop.co © 2000-2023, All Rights Reserved
            </span>
            <div className={s.footer__payment}>
              <img src={visa} alt="" />
              <img src={Badge} alt="" />
              <img src={paypal} alt="" />
              <img src={applePay} alt="" />
              <img src={googlePay} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
