import style from "./footer.module.css";

import facebook from "../../../public/facebook.svg";
import twitter from "../../../public/twitter.svg";
import instagram from "../../../public/instagram.svg";
import linkedin from "../../../public/linkedin.svg";

import Image from "next/image";
export default function footer() {
  return (
    <div className={style.footer_Wrapper}>
      <div className={style.footer_SubWrapper}>
        <div className={style.row_con}>
          <div className={style.information}>
            <div className={style.quicklink_content_wrapper}>
              <h4 className="">INFORMATION</h4>
              <p>About Us</p>
              <p>Sample</p>
              <p>Contact Us</p>
              <p>Carrer</p>
              <p>Blogs</p>
              <p>{"Hots's"}</p>
            </div>
          </div>
          <div className={style.contact}>
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York,
              USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div className={style.socialmedia_icons}>
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
          <div className={style.quickLinks}>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <p>Assignmetn Help</p>
              <p>Techinal Assignment Help</p>
              <p>Thesis Help</p>
              <p>Dissertation Help</p>
              <p>Best Assignmetn Help</p>
              <p>Engineering Assignmetn Help</p>
            </div>
          </div>
          <div className={style.specailOffer_con}>
            <h4 className="text-white mb-3">SECAIL OFFERS</h4>

            <div className={style.specailOffer_con_inputs}>
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Name"
              />
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Phone"
              />
            </div>
            <button type="button" className={style.btn}>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
