import React from "react";
import Navbar from "./components/Navbar";
import { FaStar } from "react-icons/fa6";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const SoftSellLandingPage = () => {
  const dark = useSelector((state) => state.theme.dark);

  const Steps = [
    {
      Title: "Upload License",
      Des: "You have the option to conveniently upload your existing license agreements directly through our platform, or alternatively, send them via email for manual upload by our team.",
    },
    {
      Title: "Get Valuation",
      Des: "Our dedicated team will thoroughly analyze your provided materials, utilizing our expertise in licensing and industry trends to deliver an accurate valuation within 48 hours.",
    },
    {
      Title: "Get Paid",
      Des: "Once the valuation is completed, you'll receive a quote for the purchase of your license. If you accept the offer, we handle the payment process, ensuring you receive your funds promptly and securely.",
    },
  ];

  const Why = [
    {
      Title: "Best Valuations Guaranteed",
      Img: "https://img.freepik.com/premium-vector/best-value-golden-stamp-seal-vector-template_917138-5102.jpg?ga=GA1.1.1329927775.1744784904&semt=ais_hybrid&w=740",
    },
    {
      Title: "Fast & Secure Transactions",
      Img: "https://img.freepik.com/free-vector/shield_78370-582.jpg?ga=GA1.1.1329927775.1744784904&semt=ais_hybrid&w=740",
    },
    {
      Title: "Trusted by Thousands",
      Img: "https://img.freepik.com/premium-vector/trusted-seller-stamp-logo-design_468322-18.jpg?w=826",
    },
    {
      Title: "Expert Support & Guidance",
      Img: "https://img.freepik.com/premium-vector/enhancing-customer-satisfaction-through-effective-support-services_809852-927.jpg?ga=GA1.1.1329927775.1744784904&semt=ais_hybrid&w=740",
    },
  ];

  const Testimonials = [
    {
      name: "John Doe",
      role: "Marketing Manager",
      company: "XYZ Corporation",
      Img: "https://images.unsplash.com/photo-1656338997878-279d71d48f6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwUE9SVFJBSVR8ZW58MHx8MHx8fDA%3D",
      testimonial:
        "This platform has completely transformed the way we manage our inventory. It's fast, reliable, and extremely user-friendly. Highly recommended!",
    },
    {
      name: "Jane Smith",
      role: "Project Coordinator",
      company: "Alpha Solutions",
      Img: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwUE9SVFJBSVR8ZW58MHx8MHx8fDA%3D",
      testimonial:
        "We've seen a massive improvement in our workflow efficiency since switching to this solution. It's truly a game-changer for our team.",
    },
    {
      name: "Michael Brown",
      role: "CEO",
      company: "FutureTech Innovations",
      Img: "https://plus.unsplash.com/premium_photo-1661573482405-b091e1d9a128?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwUE9SVFJBSVR8ZW58MHx8MHx8fDA%3D",
      testimonial:
        "The integration was seamless, and the support team was fantastic. Our operations are now smoother and more efficient than ever before.",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen  bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-[#2a5ed7]  pt-[9vh] h-[80vh] px-5 text-white flex flex-col items-center justify-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">
              Maximize Value from Your Unused Software Licenses
            </h1>
            <p className="text-lg mb-8">
              Sell your software licenses easily and securely. Get the best
              value in just a few steps.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition duration-300">
              Get a Quote
            </button>
          </motion.div>
        </motion.section>

        {/* How It Works */}
        <section
          className={`py-[10vh] md:h-[85vh] px-10 text-center ${
            dark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
          }`}
        >
          <h2 className="text-2xl  font-bold mt-[3vh] mb-[9vh]">
            How It Works
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-10 md:px-[3vw]">
            {Steps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                key={index}
                className={`${
                  dark ? " bg-white text-[#394040]" : "bg-[#2C3333] text-white"
                } shadow-2xl md:mt-[3vh] h-[35vh] md:w-[25vw] p-6 rounded-xl hover:shadow-lg transition duration-300`}
              >
                <h3 className="text-xl font-semibold mb-8">{step.Title}</h3>
                <p>{step.Des}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#FB2576] md:h-[80vh] py-[15vh] text-center">
          <h2 className="text-2xl font-bold mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-12">
            {Why.map((why, index) => (
              <motion.div
                initial={{ x2: -50, opacity: 0, y: 60 }}
                whileInView={{ x2: 0, opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                viewport={{ once: true }}
                key={index}
                className="bg-white h-[25vh] md:h-[30vh] mt-5 shadow-2xl p-6 rounded-xl hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <h3 className="text-xl font-semibold mb-2">{why.Title}</h3>
                <div className=" flex justify-center">
                  <img
                    className=" :w-[20vh] h-[18vh] md:h-[20vh]"
                    src={why.Img}
                    alt=""
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section
          className={`py-[11vh] text-center h-[80vh] md:h-[90vh] ${
            dark ? "bg-zinc-900 text-[#f0f0f0]" : "bg-white "
          }`}
        >
          <h2 className="text-2xl font-bold mb-10 ">Customer Testimonials</h2>
          <div className="md:px-[20vw] px-[8vw] md:pt-[5vh] w-full">
            <Slider {...settings} className="slick-slider">
              {Testimonials.map((item, index) => (
                <div className="bg-[#288ca0] text-[#f1f1f1] md:px-[3vw]  py-10 shadow-md p-6  md:h-[40vh] w-[90vw] rounded-xl hover:shadow-lg transition duration-300">
                  <h1 className="flex gap-2 justify-center md:justify-start text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </h1>
                  <p className="text-[#f1f1f1] text-start italic mt-7 ">
                    “{item.testimonial}”
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="pt-10">
                      <img
                        className="md:w-[5vw] w-[20vw] h-[9vh] rounded-xl  object-cover"
                        src={item.Img}
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#A9333A]  mt-4 md:mt-10 md:text-start">
                        {item.name}
                      </h4>
                      <h4 className=" mt-2 text-[#f1f1f1] text-sm md:text-start">
                        {item.role} AT {item.company}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Contact Form */}
        <section
          className={`py-20 px-[5vw] text-center ${
            dark ? "bg-white " : "bg-[#232323] text-white"
          }`}
        >
          <h2 className="text-2xl font-bold mb-10">Contact Us</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Enter the Name"
              className={`p-3 rounded-xl focus:outline-yellow-500 ${
                dark ? "bg-zinc-900 text-white" : "text-zinc-900"
              }`}
              required
            />
            <input
              type="email"
              placeholder="Enter the Email"
              className={`p-3 rounded-xl focus:outline-yellow-500 ${
                dark ? "bg-zinc-900 text-white" : "text-zinc-900"
              }`}
              required
            />
            <input
              type="text"
              placeholder="Enter the Company"
              className={`p-3 rounded-xl focus:outline-yellow-500 ${
                dark ? "bg-zinc-900 text-white" : "text-zinc-900"
              }`}
            />
            <select
              className={`p-3 rounded-xl focus:outline-yellow-500 ${
                dark ? "bg-zinc-900 text-white" : "text-zinc-900"
              }`}
              required
            >
              <option value="">Select License Type</option>
              <option value="Software License A">Software License A</option>
              <option value="Software License B">Software License B</option>
            </select>
            <textarea
              placeholder="Enter the Message"
              className={`p-3 rounded-xl focus:outline-yellow-500 ${
                dark ? "bg-zinc-900 text-white" : "text-zinc-900"
              }`}
              required
            ></textarea>
            <button
              className={`${
                dark ? "bg-zinc-900 text-white" : "bg-white"
              } w-[50%] mx-auto mt-5 text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition duration-300 md:col-span-2`}
            >
              Submit
            </button>
          </form>
        </section>

        <div>
          <TawkMessengerReact
            propertyId="681dab2ec662191910df0956"
            widgetId="1iqpu9bv8"
          />
        </div>
      </div>
    </>
  );
};

export default SoftSellLandingPage;
