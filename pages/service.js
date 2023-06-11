import Head from "next/head";

const ServicePage = () => (
    <div>
        <Head>
            <title>Our Services</title>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            />
            <style jsx>{`
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

                .service-item {
                    margin-bottom: 30px;
                }

                .service-item .service-icon {
                    margin-bottom: 20px;
                    text-align: center;
                }

                .service-item .service-icon i {
                    font-size: 48px;
                }

                .service-item .service-title {
                    font-size: 24px;
                    margin-bottom: 10px;
                }

                .service-item .service-description {
                    font-size: 16px;
                    color: #666;
                }

                /* Responsive Styles */
                @media (max-width: 576px) {
                    .service-item .service-icon i {
                        font-size: 36px;
                    }

                    .service-item .service-title {
                        font-size: 20px;
                    }

                    .service-item .service-description {
                        font-size: 14px;
                    }
                }

                @media (max-width: 768px) {
                    .service-item .service-icon i {
                        font-size: 40px;
                    }

                    .service-item .service-title {
                        font-size: 22px;
                    }

                    .service-item .service-description {
                        font-size: 15px;
                    }
                }

                @media (max-width: 992px) {
                    .service-item .service-icon i {
                        font-size: 44px;
                    }

                    .service-item .service-title {
                        font-size: 23px;
                    }

                    .service-item .service-description {
                        font-size: 16px;
                    }
                }

                @media (max-width: 1200px) {
                    .service-item .service-icon i {
                        font-size: 46px;
                    }

                    .service-item .service-title {
                        font-size: 24px;
                    }

                    .service-item .service-description {
                        font-size: 17px;
                    }
                }
            `}</style>
        </Head>

        <header>
            <h1>Our Services</h1>
        </header>

        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-desktop"></i>
                            </div>
                            <div className="service-title">Web Development</div>
                            <div className="service-description">
                                We offer professional web development services
                                to help you build modern and responsive
                                websites.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-mobile"></i>
                            </div>
                            <div className="service-title">
                                Mobile App Development
                            </div>
                            <div className="service-description">
                                Our mobile app development team can create
                                innovative and user-friendly mobile applications
                                for iOS and Android.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-cogs"></i>
                            </div>
                            <div className="service-title">
                                Custom Solutions
                            </div>
                            <div className="service-description">
                                We provide tailored solutions to meet your
                                specific business needs and help you achieve
                                your goals.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
);
export default ServicePage;
