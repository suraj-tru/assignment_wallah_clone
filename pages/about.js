import Head from "next/head";

const AboutUsPage = () => (
    <div>
        <Head>
            <title>About Us</title>
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

        .about-section {
          margin-bottom: 30px;
        }

        .about-section h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .about-section p {
          font-size: 16px;
          color: #666;
        }

        /* Responsive Styles */
        @media (max-width: 767px) {
          h1 {
            font-size: 24px;
          }

          .about-section h2 {
            font-size: 20px;
          }

          .about-section p {
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 20px;
          }

          .about-section h2 {
            font-size: 18px;
          }

          .about-section p {
            font-size: 12px;
          }
        }
      `}</style>
        </Head>

        <header>
            <h1>About Us</h1>
        </header>

        <main>
            <div className="container">
                <section className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ultricies vestibulum augue, id tincidunt nisi
                        consectetur ut. Suspendisse potenti. Aliquam et diam
                        ligula. Fusce porttitor auctor tellus, eu rhoncus neque
                        semper ut. Cras eget pulvinar est. Proin a lorem metus.
                        Ut ut pharetra massa. Nulla lacinia mauris vel nisi
                        suscipit lobortis. Suspendisse potenti.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Integer in consequat arcu, vel commodo risus. Nullam nec
                        ultrices felis. Sed bibendum iaculis velit a egestas. In
                        lacinia magna nec sagittis iaculis. Curabitur faucibus
                        neque et magna sollicitudin, ut blandit arcu ultrices.
                        Quisque dapibus mi et libero laoreet tincidunt. Aenean
                        ultrices eu nunc in tincidunt. Praesent at dapibus
                        risus, a venenatis nisl.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Team</h2>
                    <p>
                        Vestibulum sollicitudin pharetra ipsum sed ornare. Etiam
                        id fringilla risus. Maecenas quis ligula nulla.
                        Curabitur id lectus fringilla, pharetra nisl id,
                        facilisis risus. Nam aliquam dapibus lectus, vitae
                        faucibus felis rhoncus nec. Integer efficitur felis a
                        metus interdum, et varius lorem lobortis.
                    </p>
                </section>
            </div>
        </main>
    </div>
);

export default AboutUsPage;
