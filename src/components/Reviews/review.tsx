import Image from "next/image";
import style from "./reviews.module.css";
export default function review() {
    return (
        <div className={style.main_con}>
            <div className={style.sub_con}>
                <div className={style.review_head}>
                    <div className={style.headings}>
                        <p>TESTIMONIALS</p>
                        <p>Trusted by Thousand of Students and Tutors</p>
                    </div>
                    <div className={style.ratings}>
                        <p>4.8</p>
                        <p>
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
                        <p>
                            “I had a tonne of assignments to complete before my
                            semester exams. But, a classmate of mine suggested
                            Assignment Wallah, which offers quick responses. I
                            am pleased with the client care and writing
                            assistance provided by Assignment Wallah. I used
                            this program often, and they guided me through all
                            the solutions, enabling me to receive good grades.
                            Excellent work! Thank you once more, Assignment
                            Wallah.”
                        </p>
                        <p>Emma Hart</p>
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
                        <p>
                            “I had a tonne of assignments to complete before my
                            semester exams. But, a classmate of mine suggested
                            Assignment Wallah, which offers quick responses. I
                            am pleased with the client care and writing
                            assistance provided by Assignment Wallah. I used
                            this program often, and they guided me through all
                            the solutions, enabling me to receive good grades.
                            Excellent work! Thank you once more, Assignment
                            Wallah.”
                        </p>
                        <p>Emma Hart</p>
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
                        <p>
                            “I had a tonne of assignments to complete before my
                            semester exams. But, a classmate of mine suggested
                            Assignment Wallah, which offers quick responses. I
                            am pleased with the client care and writing
                            assistance provided by Assignment Wallah. I used
                            this program often, and they guided me through all
                            the solutions, enabling me to receive good grades.
                            Excellent work! Thank you once more, Assignment
                            Wallah.”
                        </p>
                        <p>Emma Hart</p>
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
                        <p>
                            “I had a tonne of assignments to complete before my
                            semester exams. But, a classmate of mine suggested
                            Assignment Wallah, which offers quick responses. I
                            am pleased with the client care and writing
                            assistance provided by Assignment Wallah. I used
                            this program often, and they guided me through all
                            the solutions, enabling me to receive good grades.
                            Excellent work! Thank you once more, Assignment
                            Wallah.”
                        </p>
                        <p>Emma Hart</p>
                        <div className={style.starts}> * * * * * *</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
