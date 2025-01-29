import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  
    });
  };

  return (
    <div className="bg-purple-700 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-center mb-8">
          Stay informed with our latest news, events, and insights!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Your Fullname"
            className="w-full md:w-1/3 p-3 rounded-lg text-gray-700"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:w-1/3 p-3 rounded-lg text-gray-700"
          />
          <button className="bg-purple-900 text-white px-6 py-3 rounded-lg">
            Subscribe
          </button>
        </div>

        <div className="text-center mb-12">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox mr-2" />
            <span>
              I agree to receive notifications, updates, publications, and
              alerts from the Wunti Alkhair Foundation
            </span>
          </label>
        </div>

        <div className="border-t border-gray-400 pt-6">
          <div className="flex flex-wrap justify-between text-sm">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img src={logo} alt="logo" className="w-[150px] hover:scale-100 transition duration-300 mb-5"/>
      
              <p>
                WAKF is a non-profitable organization dedicated to driving
                impactful change in Nigeria. It has successfully transformed the
                lives of thousands through quality education, accessible
                healthcare, economic empowerment, and community development.
              </p>
            </div>

            <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
              <p className="mb-2 font-bold text-2xl">Quick Links</p>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Impact</a>
                </li>
                <li>
                  <a href="#">Get Involved</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3">
              <p className="mb-2 font-bold text-2xl">Contact us</p>
              <p>Address: B303 Wunti Street, Bauchi, Bauchi State, Nigeria.</p>
              <p>Email: info@thewakf.org</p>
              <p>Phone: +234 8087894868</p>
            </div>
          </div>

          <div className="mt-6 text-center text-2xl">
            <p className="mb-2 font-bold">Follow us</p>
            <div className="flex justify-center space-x-4 mb-7">
              <a href="#" className="text-white">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 pt-4 ">
        <p>
          Copyright {"\u00A9"} 2025 Wunti Al-Khair Foundation Privacy Policy
        </p>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-purple-900 text-white rounded-full shadow-lg hover:bg-purple-800 transition-all"
        title="Back to Top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default Footer;
