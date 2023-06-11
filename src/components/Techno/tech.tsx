import React from "react";
import style from "./tech.module.css";
import Image from "next/image";
export default function tech({ styles }: any) {
    return (
        <div className={styles.main_con}>
            <div className={styles.sub_con}>
                <div className={style.heading_con}>
                    <h2 className={styles.heading_h2}>
                        Trending Technologies We Assist in Data Science
                    </h2>
                    <p className={style.paragraph}>
                        Now-a-day, data science is a trending advanced
                        technology. In
                        {`today's`} era, every student needs to understand
                        progressive and advanced technology (ML, AI) in depth
                        for future career development. Here, we support you to
                        solve your module-related problems in the data science
                        course by making depth analysis of R, Python, and
                        MATLAB. If you need help in project development with
                        trending technologies, you can request a demo class, and
                        then we efficiently try to show how our experienced
                        experts solve doubtful queries with real-time instances.
                        Ultimately, our platform is here for supporting you as
                        per your needs.
                    </p>
                </div>
                <div className={styles.rowCon}>
                    <div className={style.fadeInUp} data-wow-delay="0.1s">
                        <div className={style.service_item}>
                            <div className={style.content_con}>
                                <Image
                                    unoptimized
                                    src={
                                        "https://assignmentwallah.com/wp-content/uploads/2022/09/innovation.png"
                                    }
                                    alt="cap"
                                    width="80"
                                    height="80"
                                    className={style.icons}
                                />
                                <h3 className={style.heading_h3}>
                                    Skilled Instructors
                                </h3>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo
                                    dolor sed clita amet diam
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
                                        "https://assignmentwallah.com/wp-content/uploads/2022/09/innovation.png"
                                    }
                                    alt="cap"
                                    width="80"
                                    height="80"
                                    className={style.icons}
                                />
                                <h3 className={style.heading_h3}>
                                    Skilled Instructors
                                </h3>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo
                                    dolor sed clita amet diam
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
                                        "https://assignmentwallah.com/wp-content/uploads/2022/09/innovation.png"
                                    }
                                    alt="cap"
                                    width="80"
                                    height="80"
                                    className={style.icons}
                                />
                                <h3 className={style.heading_h3}>
                                    Skilled Instructors
                                </h3>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo
                                    dolor sed clita amet diam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rowCon}>
                    <div className={style.fadeInUp} data-wow-delay="0.1s">
                        <div className={style.service_item}>
                            <div className={style.content_con}>
                                <Image
                                    unoptimized
                                    src={
                                        "https://assignmentwallah.com/wp-content/uploads/2022/09/innovation.png"
                                    }
                                    alt="cap"
                                    width="80"
                                    height="80"
                                    className={style.icons}
                                />
                                <h5 className="mb-3">Skilled Instructors</h5>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo
                                    dolor sed clita amet diam
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
                                        "https://assignmentwallah.com/wp-content/uploads/2022/09/innovation.png"
                                    }
                                    alt="cap"
                                    width="80"
                                    height="80"
                                    className={style.icons}
                                />
                                <h5 className="mb-3">Skilled Instructors</h5>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo
                                    dolor sed clita amet diam
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
                                        "https://assignmentwallah.com/wp-content/uploads/2022/09/innovation.png"
                                    }
                                    alt="cap"
                                    width="80"
                                    height="80"
                                    className={style.icons}
                                />
                                <h5 className="mb-3">Skilled Instructors</h5>
                                <p>
                                    Diam elitr kasd sed at elitr sed ipsum justo
                                    dolor sed clita amet diam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className={style.getMoreInfo}>
                        get assistance
                    </button>
                </div>
            </div>
        </div>
    );
}
