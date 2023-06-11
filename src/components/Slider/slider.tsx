import Image from "next/image";
import Slider from "react-slick";
import style from "./slider.module.css";
export default function slider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className={style.image_con}>
        <Image
          unoptimized
          src={
            "https://assignmentwallah.com/wp-content/uploads/2022/11/2002.i039.010_chatbot_messenger_ai_isometric_set-05-8.png"
          }
          width={244}
          height={244}
          alt="image"
        />
      </div>
      <div className={style.image_con}>
        <Image
          unoptimized
          src={
            "https://assignmentwallah.com/wp-content/uploads/2022/11/2002.i039.010_chatbot_messenger_ai_isometric_set-05-8.png"
          }
          width={244}
          height={244}
          alt="image"
        />
      </div>
      <div className={style.image_con}>
        <Image
          unoptimized
          src={
            "https://assignmentwallah.com/wp-content/uploads/2022/11/2002.i039.010_chatbot_messenger_ai_isometric_set-05-8.png"
          }
          width={244}
          height={244}
          alt="image"
        />
      </div>
      <div className={style.image_con}>
        <Image
          unoptimized
          src={
            "https://assignmentwallah.com/wp-content/uploads/2022/11/2002.i039.010_chatbot_messenger_ai_isometric_set-05-8.png"
          }
          width={244}
          height={244}
          alt="image"
        />
      </div>
      <div className={style.image_con}>
        <Image
          unoptimized
          src={
            "https://assignmentwallah.com/wp-content/uploads/2022/11/2002.i039.010_chatbot_messenger_ai_isometric_set-05-8.png"
          }
          width={244}
          height={244}
          alt="image"
        />
      </div>
      <div className={style.image_con}>
        <Image
          unoptimized
          src={
            "https://assignmentwallah.com/wp-content/uploads/2022/11/2002.i039.010_chatbot_messenger_ai_isometric_set-05-8.png"
          }
          width={244}
          height={244}
          alt="image"
        />
      </div>
      <div className={style.image_con}>
        <Image
          unoptimized
          src={
            "https://assignmentwallah.com/wp-content/uploads/2022/11/2002.i039.010_chatbot_messenger_ai_isometric_set-05-8.png"
          }
          width={244}
          height={244}
          alt="image"
        />
      </div>
    </Slider>
  );
}
