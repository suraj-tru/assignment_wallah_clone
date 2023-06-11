import React from "react";
import style from "./universirty.module.css";
import Image from "next/image";
export default function university() {
  return (
    <div className={style.main_con}>
      <div className={style.sub_con}>
        <div className={style.heading_con}>
          <h2>University {"Student's"} Trust</h2>
          <p>
            Our team Assignment Wallah helps more than 150000+ students
            belonging to the following prestigious universities in their
            education and research-oriented works. We are always here available
            for students. Students are able to save money thanks to the fact
            that we provide the most competitively priced solutions for their
            assignments. We support students to achieve their goals in careers
            with higher academics grade.
          </p>
          <div className={style.images_con}>
            <div className={style.image_box}>
              <Image
                unoptimized
                src={
                  "https://assignmentwallah.com/wp-content/uploads/2022/11/University-of-Greenwich.jpg"
                }
                height={130}
                width={130}
                alt="uni"
              />
              <h4>university </h4>
            </div>
            <div className={style.image_box}>
              <Image
                unoptimized
                src={
                  "https://assignmentwallah.com/wp-content/uploads/2022/11/University-of-Greenwich.jpg"
                }
                height={130}
                width={130}
                alt="uni"
              />
              <h4>university </h4>
            </div>
            <div className={style.image_box}>
              <Image
                unoptimized
                src={
                  "https://assignmentwallah.com/wp-content/uploads/2022/11/University-of-Greenwich.jpg"
                }
                height={130}
                width={130}
                alt="uni"
              />
              <h4>university </h4>
            </div>
            <div className={style.image_box}>
              <Image
                unoptimized
                src={
                  "https://assignmentwallah.com/wp-content/uploads/2022/11/University-of-Greenwich.jpg"
                }
                height={130}
                width={130}
                alt="uni"
              />
              <h4>university </h4>
            </div>
            <div className={style.image_box}>
              <Image
                unoptimized
                src={
                  "https://assignmentwallah.com/wp-content/uploads/2022/11/University-of-Greenwich.jpg"
                }
                height={130}
                width={130}
                alt="uni"
              />
              <h4>university </h4>
            </div>
            <div className={style.image_box}>
              <Image
                unoptimized
                src={
                  "https://assignmentwallah.com/wp-content/uploads/2022/11/University-of-Greenwich.jpg"
                }
                height={130}
                width={130}
                alt="uni"
              />
              <h4>university </h4>
            </div>
            <div className={style.image_box}>
              <Image
                unoptimized
                src={
                  "https://assignmentwallah.com/wp-content/uploads/2022/11/University-of-Greenwich.jpg"
                }
                height={130}
                width={130}
                alt="uni"
              />
              <h4>university </h4>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
