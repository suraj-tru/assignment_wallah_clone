import Image from "next/image";
import style from "./header.module.css";
import meggage from "../../../public/envelope-solid.svg";
import facebook from "../../../public/facebook.svg";
import hamburger from "../../../public/hamburger.png";
import calling from "../../../public/phone-solid.svg";
import twitter from "../../../public/twitter.svg";
import instagram from "../../../public/instagram.svg";
import linkedin from "../../../public/linkedin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function header({ styles }:any) {
  return (
    <div className={style.header_Wrpper}>
      <div className={style.subHeader_Wrapper}>
        <div className={style.logo_Wrapper}>
          <Image
            unoptimized
            src={
              "https://assignmentwallah.com/wp-content/uploads/2022/09/Ass_logo_Under_fnl-300x104.png"
            }
            width={200}
            height={70}
            alt="assignmentwala"
          />
        </div>
        <div className={style.info_Wrapper}>
          <div className={style.list}>
            <a href="mailto:help@assignmentwallah.com">
              <p>
                <Image src={meggage} alt="icon" height={16} width={16} />
                <span className={styles.paragraph}>
                  help@assignmentwallah.com
                </span>
              </p>
            </a>
          </div>
          <div className={style.list}>
            <a href="tel:+91-83880%2088212">
              <p>
                <Image src={calling} alt="icon" height={16} width={16} />
                <span className={styles.paragraph}>help@1826474840.com</span>
              </p>
            </a>
          </div>
        </div>
        <div className={style.socialMediaIcon_Wrapper}>
          <div className={style.list}>
            <a>
              <Image src={facebook} alt="facebook" height={32} width={32} />
            </a>

            <a>
              <Image src={twitter} alt="facebook" height={32} width={32} />
            </a>

            <a>
              <Image src={instagram} alt="facebook" height={32} width={32} />
            </a>

            <a>
              <Image src={linkedin} alt="facebook" height={32} width={32} />
            </a>
          </div>
        </div>
      </div>
      <div className={style.mainNavbar_Wrapper}>
        <div className={style.mobile_nav}>
          <Image
            unoptimized
            src={hamburger}
            height={20}
            width={20}
            alt="hamburger"
          />
        </div>
        <div className={style.navbar_Wrapper}>
          <div className={style.navbar_links}>
            <div className={style.navList}>
              <a className={styles.heading_h3}>About Us</a>
              <a className={styles.heading_h3}>Services</a>
              <a className={styles.heading_h3}>Contact Us</a>
              <a className={styles.heading_h3}>Carriers</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
