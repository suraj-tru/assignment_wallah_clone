import Head from "next/head";

const ContactUs = () => (
    <div>
        <Head>
            <title>Contact Us</title>
        </Head>

        <header>
            <h1>Contact Us</h1>
        </header>

        <main>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" required></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </main>

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

            .contact-form {
                max-width: 400px;
                margin: 0 auto;
            }

            .form-group {
                margin-bottom: 20px;
            }

            .form-group label {
                display: block;
                font-size: 16px;
                margin-bottom: 5px;
            }

            .form-group input,
            .form-group textarea {
                width: 100%;
                padding: 10px;
                font-size: 14px;
            }

            .form-group textarea {
                height: 150px;
            }

            .form-group button {
                padding: 10px 20px;
                background-color: #333;
                color: #fff;
                border: none;
                font-size: 16px;
                cursor: pointer;
            }

            /* Responsive Styles */
            @media (max-width: 576px) {
                .contact-form {
                    max-width: 100%;
                    padding: 20px;
                }

                .form-group label {
                    font-size: 14px;
                }

                .form-group input,
                .form-group textarea {
                    font-size: 12px;
                }
            }

            @media (max-width: 768px) {
                .contact-form {
                    max-width: 100%;
                    padding: 20px;
                }
            }

            @media (max-width: 992px) {
                .contact-form {
                    max-width: 500px;
                    padding: 20px;
                }
            }

            @media (max-width: 1200px) {
                .contact-form {
                    max-width: 600px;
                    padding: 20px;
                }
            }
        `}</style>
    </div>
);

export default ContactUs;
