"use client";
import Image from "next/image";
import style from "./page.module.css";
import Header from "@/components/Header/header";
import Banner from "@/components/Banner/banner";
import Footer from "@/components/Footer/footer";
import Facebook from "../../public/facebook.svg";
import Graduationcap from "../../public/graduation-cap-solid.svg";
import plusIcon from "../../public/plus-solid.svg";
import Head from "next/head";
// import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Form from "@/components/Form/form";
import Slider from "@/components/Slider/slider";
import Tech from "@/components/Techno/tech";
// import Help from "@/components/Help/help";
// import University from "@/components/University/university";
// import Question from "@/components/Question/question";
// import Review from "@/components/Reviews/review";

export default function Home() {
  return (
    <div>
      <Header styles={style} />
      <section>
        <div className={style.banner_main}>
          
          <div className={style.sub_main}>
            <div className={style.top_con}>
              <div className={style.support_con}>
                <div className={style.support_box}>
                  <Image src={Facebook} alt="icons" width={50} height={50} />
                  <p className={style.paragraph}>24X7 SUPPORT</p>
                </div>
                <div className={style.support_box}>
                  <Image src={Facebook} alt="icons" width={50} height={50} />
                  <p className={style.paragraph}>24X7 SUPPORT</p>
                </div>
                <div className={style.support_box}>
                  <Image src={Facebook} alt="icons" width={50} height={50} />
                  <p className={style.paragraph}>24X7 SUPPORT</p>
                </div>
              </div>
              <div className={style.form_con}>
                <div className={style.form_heading_con}>
                  <h2 className={style.form_headings}>Assignment Help India</h2>
                  <p className={style.paragraph}>
                    Affordable Essay Writing Service For Indians
                  </p>
                  <div className={style.form}>
                    <p className={style.paragraph}>
                      It’s Time Clear Your Doubt From <br />{" "}
                      assignmentwallah.com Experts
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
                        I accept the T&C and other policies of the website and
                        agree to receive offers and updates.
                        <input type="checkbox" />
                        <span className={style.checkmark}></span>
                      </label>
                    </div>
                    <div className={style.button_Con}>
                      <button className={style.getMoreInfo}>
                        Free Assistance
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.bottom_con}>
              <div className={style.List}>
                <p className={style.paragraph}>
                  100+ Students Support Executive to Listen Students Requirement
                </p>
                <p className={style.paragraph}>
                  5,215 Academic Assignment Writers
                </p>
                <p className={style.paragraph}>100+ Students Support</p>
                <p className={style.paragraph}>
                  5,215 Academic Assignment Writers
                </p>
                <p className={style.paragraph}>
                  5,215 Academic Assignment Writers
                </p>
                <p className={style.paragraph}>
                  5,215 Academic Assignment Writers
                </p>
                <p className={style.paragraph}>
                  5,215 Academic Assignment Writers
                </p>
                <p className={style.paragraph}>
                  5,215 Academic Assignment Writers
                </p>
                <p className={style.paragraph}>100+ Students Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.main_Containe}>
          <div className={style.container}>
            <div className={style.header_col}>
              <div className={style.content}>
                <h2 className={style.heading_h2}>
                  <span className={style.block}>Assignment Wallah — </span>Need
                  Solution! Think Assignment Wallah
                </h2>
                <p className={style.paragraph}>
                  <span className={style.bold}>Assignment Wallah</span> is a
                  co-friendly Assignment Help platform associated with Scholars.
                  This platform can provide the best assignment help to
                  students, researchers as well as working professionals. The
                  objective of this platform is to build trust and make your
                  doubt clear with real-world examples. Our experienced team
                  consistently researches your problems in homework and solves
                  them with perfect analysis . An online educational research
                  platform that connects students with Experienced Researchers
                  who can assist them in high-quality projects that will help
                  them score well. Our team of experts creates non-plagiarized
                  content for study papers and online classes, which helps
                  students enhance their knowledge.
                </p>
                <div className={style.rowCon}>
                  <div className={style.fadeInUp} data-wow-delay="0.1s">
                    <div className={style.service_item}>
                      <div className={style.content_con}>
                        <Image
                          unoptimized
                          src={
                            "https://assignmentwallah.com/wp-content/uploads/2023/03/original.svg"
                          }
                          alt="cap"
                          width="62"
                          height="62"
                          className={style.icons}
                        />
                        <h3 className={style.heading_h3}>
                          Skilled Instructors
                        </h3>
                        <p className={style.paragraph}>
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
                          src={
                            "https://assignmentwallah.com/wp-content/uploads/2023/03/original.svg"
                          }
                          alt="cap"
                          width="62"
                          height="62"
                          className={style.icons}
                        />
                        <h3 className={style.heading_h3}>
                          Skilled Instructors
                        </h3>
                        <p className={style.paragraph}>
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
                          src={
                            "https://assignmentwallah.com/wp-content/uploads/2023/03/original.svg"
                          }
                          alt="cap"
                          width="62"
                          height="62"
                          className={style.icons}
                        />
                        <h3 className={style.heading_h3}>
                          Skilled Instructors
                        </h3>
                        <p className={style.paragraph}>
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
            <div className={style.btn_con}>
              <button className={style.getMoreInfo}>Get More Info</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.main_con}>
          <div className={style.sub_con}>
            <div className={style.headings}>
              <h2 className={style.heading_h2}>
                Select Your Preferable Technology
              </h2>
              <p className={style.paragraph}>
                In the modern era, the latest frameworks and advanced
                technologies are very essential in developing real-time
                applications. Our Assignment Wallah platform is here to support
                you in clearing your doubtful questions related to framework or
                programming language. Our domain experts are always available
                for you to help in understanding the code of any advanced
                technology or framework.
              </p>
            </div>
            <Slider />
          </div>
        </div>
      </section>
      <section>
        <Tech styles={style} />
      </section>
      <section>
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
              <h2 className={style.heading_h2}>
                How We Help You To Get Your Doubt Clear?
              </h2>
              <p className={style.paragraph}>
                Hey students! Don’t need to worry. Here, the World’s Leading
                Technical Assignment Help Platform is close to you for clearing
                your doubts in your research module, education as well as
                project development which is the main objective of our Team. We
                promise to give our best in solving your problems. To make your
                doubt clear, we are following some waterfall approach. At first
                we received your doubts, then after we try to analyse your doubt
                to find out your particular domain expert. Now the complete task
                will be under domain expert who will be responsible for making a
                good content to your problem areas. After, receiving complete
                task from our technical team of {"expert's"}, will deliver to
                you via e-mail.
              </p>
              <p className={style.paragraph}>
                PLEASE NOTE: At Assignment Wallah, you will get a chance to
                connect with technical expert directly.
              </p>
              <Image
                className={style.doubts_img_con}
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
      </section>

      <section>
        <div className={style.main_con}>
          <div className={style.sub_con}>
            <div className={style.heading_con}>
              <h2 className={style.heading_h2}>
                University {"Student's"} Trust
              </h2>
              <p className={style.paragraph}>
                Our team Assignment Wallah helps more than 150000+ students
                belonging to the following prestigious universities in their
                education and research-oriented works. We are always here
                available for students. Students are able to save money thanks
                to the fact that we provide the most competitively priced
                solutions for their assignments. We support students to achieve
                their goals in careers with higher academics grade.
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
                  <h3 className={style.heading_h3}>university </h3>
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
                  <h3 className={style.heading_h3}>university </h3>
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
                  <h3 className={style.heading_h3}>university </h3>
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
                  <h3 className={style.heading_h3}>university </h3>
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
                  <h3 className={style.heading_h3}>university </h3>
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
                  <h3 className={style.heading_h3}>university </h3>
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
                  <h3 className={style.heading_h3}>university </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`${style.main_con} ${style.bck_color}`}>
          <div className={style.sub_con}>
            <div className={style.review_head}>
              <div className={style.headings}>
                <p className={style.heading_h3}>TESTIMONIALS</p>
                <h2 className={style.heading_h2}>
                  Trusted by Thousand of Students and <br /> Tutors
                </h2>
              </div>
              <div className={`${style.ratings}`}>
                <p className={style.num_font}>4.8</p>
                <p className={style.paragraph}>
                  2,394 Ratings
                  <br />
                  Google Reviews
                </p>
              </div>
            </div>
            <div className={style.review_cards_con}>
              <div className={style.review_cards}>
                <Image
                  unoptimized
                  src={
                    "https://assignmentwallah.com/wp-content/uploads/2022/10/online-programming-course-review-01.jpg"
                  }
                  width={80}
                  height={80}
                  alt="image"
                />
                <p className={style.paragraph}>
                  “I had a tonne of assignments to complete before my semester
                  exams. But, a classmate of mine suggested Assignment Wallah,
                  which offers quick responses. I am pleased with the client
                  care and writing assistance provided by Assignment Wallah. I
                  used this program often, and they guided me through all the
                  solutions, enabling me to receive good grades. Excellent work!
                  Thank you once more, Assignment Wallah.”
                </p>
                <h3 className={style.heading_h3}>Emma Hart</h3>
                <div className={style.starts}> * * * * * *</div>
              </div>
              <div className={style.review_cards}>
                <Image
                  unoptimized
                  src={
                    "https://assignmentwallah.com/wp-content/uploads/2022/10/online-programming-course-review-01.jpg"
                  }
                  width={80}
                  height={80}
                  alt="image"
                />
                <p className={style.paragraph}>
                  “I had a tonne of assignments to complete before my semester
                  exams. But, a classmate of mine suggested Assignment Wallah,
                  which offers quick responses. I am pleased with the client
                  care and writing assistance provided by Assignment Wallah. I
                  used this program often, and they guided me through all the
                  solutions, enabling me to receive good grades. Excellent work!
                  Thank you once more, Assignment Wallah.”
                </p>
                <h3 className={style.heading_h3}>Emma Hart</h3>
                <div className={style.starts}> * * * * * *</div>
              </div>
              <div className={style.review_cards}>
                <Image
                  unoptimized
                  src={
                    "https://assignmentwallah.com/wp-content/uploads/2022/10/online-programming-course-review-01.jpg"
                  }
                  width={80}
                  height={80}
                  alt="image"
                />
                <p className={style.paragraph}>
                  “I had a tonne of assignments to complete before my semester
                  exams. But, a classmate of mine suggested Assignment Wallah,
                  which offers quick responses. I am pleased with the client
                  care and writing assistance provided by Assignment Wallah. I
                  used this program often, and they guided me through all the
                  solutions, enabling me to receive good grades. Excellent work!
                  Thank you once more, Assignment Wallah.”
                </p>
                <h3 className={style.heading_h3}>Emma Hart</h3>F
                <div className={style.starts}> * * * * * *</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Tech />
      <Help />
      <Tech />

      <Banner />
      <University />
      <Review />
      <Question /> */}
      <section>
        <div className={style.main_con}>
          <div className={style.sub_con}>
            <div className={style.faqs_con}>
              <div className={style.image_boxs}></div>
              <div className={style.accordion_con}>
                <h2 className={style.heading_h2}>
                  Most Popular Questions Related To Assignment Wallah
                </h2>
                <Accordion
                  className={style.accodion}
                  alwaysOpen
                  transition={{
                    duration: "300ms",
                    timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                  }}
                >
                  <AccordionItem>
                    <AccordionHeader>
                      <h3 className={style.accordion_title}>
                        <p className={style.paragraph}>Title 1</p> <span></span>
                      </h3>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className={style.accordion_body}>
                        Lorem ipsum dolor sit amet.
                      </div>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader>
                      <h3 className={style.accordion_title}>
                        <p className={style.paragraph}>Title 2</p> <span></span>
                      </h3>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className={style.accordion_body}>
                        Lorem ipsum dolor sit amet.
                      </div>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader>
                      <h3 className={style.accordion_title}>
                        <p className={style.paragraph}>Title 2</p> <span></span>
                      </h3>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className={style.accordion_body}>
                        Lorem ipsum dolor sit amet.
                      </div>
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <div className={style.whatsapp_con}>
        <a
          href="https://api.whatsapp.com/send?phone=918388088212&amp;text=Hello,%20I%20have%20a%20question%20about%20"
          target="_blank"
        >
          <Image
            unoptimized
            src={
              "https://assignmentwallah.com/wp-content/uploads/2022/09/Whats-app-Made-with-PosterMyWall.png"
            }
            height={60}
            width={60}
            alt="whatsaap
        "
          />
        </a>
      </div>
    </div>
  );
}
