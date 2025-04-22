import React, { Fragment, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiMapPin } from "react-icons/hi2";
import { FaS, FaUserPen } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import {
  MdEmail,
  MdBusinessCenter,
  MdSubject,
  MdMessage,
} from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import useDeviceType from "../../utils/useDeviceType";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const ContactFirstSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  const deviceType = useDeviceType();

  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    const { name, email, company, title, message } = formData;

    if (!name || !email || !title || !company || !message) {
      setError("Please fill in all the required fields.");
      return;
    }

    setLoading(true);
    setError(null);

    const templateParams = event.target;

    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setIsSent(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timeoutId;

    if (isSent) {
      timeoutId = setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSent]);

  return (
    <Fragment>
      <div className="h-full flex flex-col justify-center items-center tablet:h-auto py-10 tablet:flex-col-reverse mobile:flex-col-reverse">
        <div className="w-[70%] mb-5 flex justify-between tablet:flex-col mobile:flex-col mobile:w-[90%]">
          <div className="p-4 border flex-1 tablet:mb-4 tablet:mt-4 mobile:mb-4 mobile:mt-4">
            <HiMapPin className="text-4xl mb-2" />
            <h4 className="mb-2 font-bold text-lg">Address</h4>
            <p>23E Almas tower JLT Dubai UAE</p>
          </div>
          <div className="p-4 border border-l-0 tablet:border flex-1 tablet:mb-4 mobile:border mobile:mb-4 ">
            <IoPhonePortraitOutline className="text-4xl mb-2" />
            <h4 className="mb-2 font-bold text-lg">Phone</h4>
            <p>+32484221800</p>
          </div>
          <div className="p-4 border border-l-0 tablet:border flex-1">
            <MdEmail className="text-4xl mb-2" />
            <h4 className="mb-2 font-bold text-lg">Email</h4>
            <p>adit@apgdiamonds.com</p>
          </div>
        </div>
        <div className="w-[70%] h-full flex border border-Light-Gray tablet:flex-col mobile:flex-col mobile:w-[90%]">
          <div className="w-[50%] flex tablet:w-full mobile:w-full">
            <img
              className="tablet:h-[30%]"
              src={
                deviceType === "tablet" || deviceType === "mobile"
                  ? "/assets/contact-diamond-tablet.png"
                  : "/assets/contact-diamond.png"
              }
              alt="contact-image"
            />
          </div>
          <div className="w-[50%] p-8 px-12 tablet:w-full tablet:px-7 mobile:w-full mobile:px-7">
            <div>
              <h4 className="text-4xl mb-4 smallLaptop:text-3xl">
                Connect With Us
              </h4>
              <p className="text-[12px] mb-6">
                Have questions or need assistance? We're always here to help!
                Feel free to give us a call or send us an email — we're just a
                message away.
              </p>
            </div>
            <form onSubmit={sendEmail}>
              {/* Name */}
              <label className="input validator w-full mb-2 text-lg smallLaptop:text-[15px]">
                <div className="flex justify-center items-center border border-Light-Gray p-2 mt-3 smallLaptop:p-1.5">
                  <FaUserPen />
                  <input
                    className="w-full outline-none ml-4"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </label>

              {/* Email */}
              <label className="input validator w-full mb-2 text-lg smallLaptop:text-[15px]">
                <div className="flex justify-center items-center border border-Light-Gray p-2 mt-3">
                  <MdEmail />
                  <input
                    className="w-full outline-none ml-4"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </label>

              {/* Company */}
              <label className="input validator w-full mb-2 text-lg smallLaptop:text-[15px]">
                <div className="flex justify-center items-center border border-Light-Gray p-2 mt-3">
                  <MdBusinessCenter />
                  <input
                    className="w-full outline-none ml-4"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                    required
                  />
                </div>
              </label>

              {/* Subject */}
              <label className="input validator w-full mb-2 text-lg smallLaptop:text-[15px]">
                <div className="flex justify-center items-center border border-Light-Gray p-2 mt-3">
                  <MdSubject />
                  <input
                    className="w-full outline-none ml-4"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
              </label>

              {/* Message */}
              <label className="input validator w-full mb-4 text-sm">
                <div className="flex border border-Light-Gray p-2 mt-3">
                  <MdMessage className="mt-1" />
                  <textarea
                    className="w-full outline-none ml-4 resize-none"
                    name="message"
                    rows="7"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  />
                </div>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="text-lg smallLaptop:text-[13px] border border-Charcoal-Gray py-2 smallLaptop:py-1 px-6 rounded-full hover:bg-Charcoal-Gray hover:text-white duration-500 mobile:text-sm mt-3 float-right"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Feedback */}
              {isSent && (
                <p className="bg-green-300 text-green-900 p-1 px-3 mt-3 text-sm flex justify-center items-center w-max rounded-md">
                  <FaRegCheckCircle className="mr-2" />
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="bg-red-300 text-red-900 p-1 px-3 mt-3 text-sm flex justify-center items-center w-max rounded-md">
                  <ImCancelCircle className="mr-2" />
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactFirstSection;
