import React from "react";

const WhatsappBtn = () => {
  const phoneNumber = "32484221800";
  const message = `Hello APG Diamonds, I came across your website and I’m interested in learning more about your products and services. Kindly assist me with more information.`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <style>{`
        .origin-right {
          transform-origin: right;
        }
        /* Animate the width of the text container */
        .text-container {
          width: 0;
          opacity: 0;
          transition:
            opacity 0.3s ease-in-out;
          overflow: hidden;
          white-space: nowrap;
        }
        a:hover .text-container {
          width: 90%; 
          opacity: 1;
          text-align: center;
         
        }
      `}</style>

      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center bg-green-500 hover:bg-green-600 rounded-full shadow-lg
                   overflow-hidden cursor-pointer
                   transition-all duration-300 ease-in-out
                   w-12 hover:w-44 origin-right p-3 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white flex-shrink-0"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 .396C7.164.396.001 7.56.001 16.396c0 2.891.754 5.719 2.184 8.203L.042 32l7.524-2.088a15.903 15.903 0 0 0 8.434 2.396c8.836 0 16-7.164 16-16.001C31.999 7.56 24.835.396 16 .396zm0 29.208a13.174 13.174 0 0 1-6.737-1.857l-.483-.285-4.466 1.24 1.193-4.35-.314-.508A13.16 13.16 0 0 1 2.791 16.396c0-7.278 5.931-13.208 13.209-13.208 7.277 0 13.208 5.93 13.208 13.208 0 7.278-5.931 13.208-13.208 13.208zm7.18-9.944c-.393-.196-2.327-1.148-2.687-1.279-.36-.131-.623-.196-.886.196-.262.392-1.016 1.278-1.247 1.54-.23.262-.459.294-.852.098-.393-.196-1.659-.611-3.162-1.949-1.17-1.043-1.957-2.329-2.188-2.721-.23-.392-.025-.604.17-.8.174-.174.393-.459.589-.688.196-.229.262-.393.393-.654.131-.262.065-.49-.033-.688-.098-.196-.886-2.135-1.213-2.924-.32-.77-.643-.666-.886-.676l-.754-.012c-.262 0-.688.098-1.048.49-.36.392-1.378 1.345-1.378 3.278s1.411 3.795 1.606 4.058c.196.262 2.767 4.229 6.71 5.926.938.404 1.67.645 2.238.825.94.298 1.795.256 2.47.155.753-.113 2.327-.951 2.658-1.87.33-.918.33-1.703.23-1.87-.098-.165-.36-.262-.753-.459z" />
        </svg>

        <p className="text-white text-container">Whatsapp Us</p>
      </a>
    </>
  );
};

export default WhatsappBtn;
