import style from "./banner.module.css";
import Graduationcap from "../../../public/graduation-cap-solid.svg";
import Image from "next/image";
export default function banner() {
  return (
    <div className={style.main_Containe}>
      <div className={style.container}>
        <div className={style.header_col}>
          <div className={style.content}>
            <h2>
              <span className={style.block}>Assignment Wallah — </span>Need
              Solution! Think Assignment Wallah
            </h2>
            <p>
              <span className={style.block}>Assignment Wallah</span> is a
              co-friendly Assignment Help platform associated with Scholars.
              This platform can provide the best assignment help to students,
              researchers as well as working professionals. The objective of
              this platform is to build trust and make your doubt clear with
              real-world examples. Our experienced team consistently researches
              your problems in homework and solves them with perfect analysis .
              An online educational research platform that connects students
              with Experienced Researchers who can assist them in high-quality
              projects that will help them score well. Our team of experts
              creates non-plagiarized content for study papers and online
              classes, which helps students enhance their knowledge.
            </p>
            <div className={style.rowCon}>
              <div className={style.fadeInUp} data-wow-delay="0.1s">
                <div className={style.service_item}>
                  <div className={style.content_con}>
                    <Image
                      unoptimized
                      src={Graduationcap}
                      alt="cap"
                      width="60"
                      height="48"
                      className={style.icons}
                    />
                    <h5 className="mb-3">Skilled Instructors</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.fadeInUp} data-wow-delay="0.1s">
                <div className={style.service_item}>
                  <div className={style.content_con}>
                    <Image
                      unoptimized
                      src={Graduationcap}
                      alt="cap"
                      width="60"
                      height="48"
                      className={style.icons}
                    />
                    <h5 className="mb-3">Skilled Instructors</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>

              <div className={style.fadeInUp} data-wow-delay="0.1s">
                <div className={style.service_item}>
                  <div className={style.content_con}>
                    <Image
                      unoptimized
                      src={Graduationcap}
                      alt="cap"
                      width="60"
                      height="48"
                      className={style.icons}
                    />
                    <h5 className="mb-3">Skilled Instructors</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.image_Con}></div>

        </div>
          <button className={style.getMoreInfo}>Get More Info</button>
      </div>
    </div>
  );
}
