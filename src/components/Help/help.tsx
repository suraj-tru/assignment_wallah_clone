import Image from "next/image";
import style from "./help.module.css";

export default function help() {
  return (
    <div className={style.main_con}>
      <div className={style.sub_con}>
        <div className={style.content_box}>
          <Image
            unoptimized
            src={
              "https://assignmentwallah.com/wp-content/uploads/2022/10/5210980.jpg"
            }
            width={320}
            height={295}
            alt="p"
          />
          <h2>How We Help You To Get Your Doubt Clear?</h2>
          <p>
            Hey students! Don’t need to worry. Here, the World’s Leading
            Technical Assignment Help Platform is close to you for clearing your
            doubts in your research module, education as well as project
            development which is the main objective of our Team. We promise to
            give our best in solving your problems. To make your doubt clear, we
            are following some waterfall approach. At first we received your
            doubts, then after we try to analyse your doubt to find out your
            particular domain expert. Now the complete task will be under domain
            expert who will be responsible for making a good content to your
            problem areas. After, receiving complete task from our technical
            team of {"expert's"}, will deliver to you via e-mail.
          </p>
          <p>
            PLEASE NOTE: At Assignment Wallah, you will get a chance to connect
            with technical expert directly.
          </p>
          <Image
            unoptimized
            src={
              "https://assignmentwallah.com/wp-content/uploads/2022/11/Collect-your-doubts-form-your-bucke.png"
            }
            width={992}
            height={543}
            alt="k"
          />
          <div>
            <button className={style.getMoreInfo}>Ask Your Doubt</button>
          </div>
        </div>
      </div>
    </div>
  );
}
