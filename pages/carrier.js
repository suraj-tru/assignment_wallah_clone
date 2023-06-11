import Head from "next/head";

const CareerPage = () => (
    <div>
        <Head>
            <title>Career</title>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            />
            <style>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        header {
          background-color: #333;
          color: #fff;
          padding: 20px;
          text-align: center;
        }

        h1 {
          font-size: 28px;
          margin: 0;
        }

        main {
          padding: 20px;
        }

        .job-item {
          margin-bottom: 30px;
        }

        .job-item .job-title {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .job-item .job-description {
          font-size: 16px;
          color: #666;
        }

        /* Responsive Styles */
        @media (max-width: 575px) {
          .job-item .job-title {
            font-size: 22px;
          }

          .job-item .job-description {
            font-size: 14px;
          }
        }

        @media (max-width: 767px) {
          .job-item .job-title {
            font-size: 20px;
          }

          .job-item .job-description {
            font-size: 13px;
          }
        }

        @media (max-width: 991px) {
          .job-item .job-title {
            font-size: 18px;
          }

          .job-item .job-description {
            font-size: 12px;
          }
        }
      `}</style>
        </Head>

        <header>
            <h1>Career Opportunities</h1>
        </header>

        <main>
            <div className="container">
                <div className="job-item">
                    <h2 className="job-title">Web Developer</h2>
                    <p className="job-description">
                        We are seeking a skilled Web Developer to join our team.
                        The ideal candidate will have experience in developing
                        responsive and user-friendly websites using modern web
                        technologies such as HTML5, CSS3, and JavaScript.
                        Knowledge of frameworks like React or Angular is a plus.
                    </p>
                </div>
                <div className="job-item">
                    <h2 className="job-title">Mobile App Developer</h2>
                    <p className="job-description">
                        We are looking for a talented Mobile App Developer to
                        create innovative and high-quality mobile applications
                        for iOS and Android platforms. The candidate should have
                        a strong understanding of mobile app development
                        concepts, as well as experience working with languages
                        like Swift and Kotlin.
                    </p>
                </div>
                <div className="job-item">
                    <h2 className="job-title">UI/UX Designer</h2>
                    <p className="job-description">
                        We are in need of a creative UI/UX Designer who can
                        translate our clients' requirements into visually
                        appealing and intuitive user interfaces. The ideal
                        candidate will have a strong portfolio showcasing their
                        design skills, as well as experience with design tools
                        like Adobe XD or Sketch.
                    </p>
                </div>
            </div>
        </main>
    </div>
);
export default CareerPage;
