import Image from "next/image";
import style from "./form.module.css";
import Facebook from "../../../public/facebook.svg";
export default function form() {
  return (
    <div className={style.banner_main}>
      <div className={style.sub_main}>
        <div className={style.top_con}>
          <div className={style.support_con}>
            <div className={style.support_box}>
              <Image src={Facebook} alt="icons" width={50} height={50} />
              <p>24X7 SUPPORT</p>
            </div>
            <div className={style.support_box}>
              <Image src={Facebook} alt="icons" width={50} height={50} />
              <p>24X7 SUPPORT</p>
            </div>
            <div className={style.support_box}>
              <Image src={Facebook} alt="icons" width={50} height={50} />
              <p>24X7 SUPPORT</p>
            </div>
          </div>
          <div className={style.form_con}>
            <div className={style.form_headings}>
              <h2>Assignment Help India</h2>
              <p>Affordable Essay Writing Service For Indians</p>
              <div className={style.form}>
                <p>
                  It’s Time Clear Your Doubt From <br /> assignmentwallah.com
                  Experts
                </p>
                <div className={style.specailOffer_con_inputs}>
                  <div className={style.input_con}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Your email" />
                    <input type="text" placeholder="Phone" />
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div className={style.input_con}>
                    <input type="text" placeholder="Name" />
                    <textarea placeholder="textarea" />
                  </div>
                </div>
                <div className={style.checkbox_Con}>
                  <label className={style.content_check_box}>
                    Yes! I’d like to subscribe to marketing and promotional
                    electronic commuications. I can opt out at any time.†
                    <input type="checkbox" />
                    <span className={style.checkmark}></span>
                  </label>
                </div>
                <div className={style.button_Con}>
                  <button className={style.getMoreInfo}>Free Assistance</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottom_con}>
          <div className={style.List}>
            <p>
              100+ Students Support Executive to Listen Students Requirement
            </p>
            <p>5,215 Academic Assignment Writers</p>
            <p>
              100+ Students Support
            </p>
            <p>5,215 Academic Assignment Writers</p>
            <p>5,215 Academic Assignment Writers</p>
            <p>5,215 Academic Assignment Writers</p>
            <p>5,215 Academic Assignment Writers</p>
            <p>5,215 Academic Assignment Writers</p>
            <p>100+ Students Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
