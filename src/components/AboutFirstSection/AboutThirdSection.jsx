import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useDeviceType from "../../utils/useDeviceType";

if (!gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutThirdSection = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const contentRefs = useRef([]); // To store refs for each slide

  const deviceType = useDeviceType();

  const leftContent = [
    {
      title: "Our Diamond Creation Process",
      structure: (
        <div>
          <p>
            At APG, we take pride in our meticulous diamond creation process,
            combining innovation and craftsmanship to bring you diamonds of
            unmatched quality. From lab-grown to ethically sourced options,
            every diamond undergoes a journey that ensures brilliance,
            sustainability, and precision.
          </p>
        </div>
      ),
    },
    {
      title: "Chemical Vapour Deposition (CVD) Diamonds",
      structure: (
        <div>
          <p className="tablet:text-[15px]">
            Chemical Vapour Deposition (CVD) is an advanced process used to
            create lab-grown CVD diamonds. These diamonds are becoming
            increasingly popular, especially in places like Dubai, due to their
            affordability and ethical sourcing. CVD diamonds are identical to
            mined diamonds in terms of their physical, chemical, and optical
            properties. The only difference lies in their origin—CVD diamonds
            are created in labs using cutting-edge technology, while mined
            diamonds form naturally beneath the Earth's surface over millions of
            years.
          </p>
        </div>
      ),
    },
    {
      title: "What is the Difference Between CVD Diamonds and Mined Diamonds?",
      structure: (
        <div>
          <p>
            The primary difference between lab-grown diamonds and earth-mined
            diamonds is their origin. CVD diamonds are created in a controlled
            lab environment using advanced technology, while natural diamonds
            are formed deep beneath the Earth’s surface over millions of years.
            Despite this difference, CVD diamonds possess the same physical,
            chemical, and optical properties as natural diamonds, offering the
            same brilliance, hardness, and durability.
          </p>
        </div>
      ),
    },
    {
      title: "Are CVD Diamonds Real?",
      structure: (
        <div>
          <p>
            Yes! CVD diamonds are real diamonds. While they are sometimes
            referred to as synthetic or man-made, these terms do not undermine
            their authenticity. CVD diamonds are chemically identical to mined
            diamonds, and their brilliance, durability, and hardness are the
            same. They are a genuine, high-quality option for those seeking a
            more sustainable and affordable diamond.
          </p>
        </div>
      ),
    },
    {
      title: "Why Choose CVD Diamonds?",
      structure: (
        <div>
          <ul>
            <li key="p1" className="pb-4">
              <b className="gilda">Affordability:</b> CVD diamonds generally
              cost less than mined diamonds, providing an excellent value for
              those seeking high-quality diamonds at a more accessible price
              point.
            </li>
            <li key="p2" className="pb-4">
              <b className="gilda">Sustainability:</b> CVD diamonds are a more
              eco-friendly choice, as they don’t require the environmental
              damage associated with traditional diamond mining.
            </li>
            <li key="p3" className="pb-4">
              <b className="gilda">Ethical sourcing:</b> Lab-grown diamonds
              avoid the ethical concerns tied to conflict diamonds, making them
              a responsible and transparent choice.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "The 4Cs of Diamond Craftsmanship",
      structure: (
        <div>
          <p>
            At APG, we believe in the brilliance of the 4Cs—Clarity, Cut,
            Colour, and Carat. Each diamond crafted in our facilities is made
            with passion, ensuring it showcases the very best of these four
            essential qualities.
          </p>
        </div>
      ),
    },
  ];

  const rightImages = [
    "/assets/about-us-lab-grown-diamonds.png",
    "/assets/about-us-lab-grown-diamonds-2.png",
    "/assets/about-us-lab-grown-diamonds-3.png",
    "/assets/about-us-lab-grown-diamonds-4.png",
    "/assets/about-us-lab-grown-diamonds-5.png",
    "/assets/about-us-lab-grown-diamonds-6.png",
  ];

  // Animation for when contentIndex changes
  useEffect(() => {
    // Animate Left Content (Text)
    if (contentRefs.current[contentIndex]?.leftContent) {
      gsap.fromTo(
        contentRefs.current[contentIndex].leftContent,
        {
          opacity: 0,
          y: "50%", // Start position (off the screen to the left)
        },
        {
          opacity: 1,
          y: "0%", // End position (in place)
          duration: 1,
          ease: "power2.out",
        }
      );
    }

    // Animate Right Content (Image)
    if (contentRefs.current[contentIndex]?.rightContent) {
      gsap.fromTo(
        contentRefs.current[contentIndex].rightContent,
        {
          //   opacity: 0,
          //   y: "100%", // Start position (off the screen to the right)
        },
        {
          opacity: 1,
          //   y: "0%", // End position (in place)
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, [contentIndex]); // This will run every time the contentIndex changes

  useEffect(() => {
    if (!deviceType || deviceType === "mobile" || deviceType === "tablet")
      return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      pin: true,
      start: "top top",
      end: () =>
        `${
          contentWrapperRef.current.scrollWidth - sectionRef.current.offsetWidth
        }`,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress * (leftContent.length - 1);
        const index = Math.round(progress);
        setContentIndex(index);
      },
    });

    return () => {
      trigger?.kill();
    };
  }, [deviceType, leftContent.length]);

  // Ensure ScrollTrigger recalculates after screen resize/device type change
  useEffect(() => {
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => clearTimeout(timeout);
  }, [deviceType]);

  return (
    <div className="relative border overflow-hidden">
      <section
        ref={sectionRef}
        className="relative w-full h-screen tablet:h-auto tablet:max-h-max mobile:h-auto mobile:max-h-max"
      >
        {/* <h4 className="text-center text-xl font-light">
          Understanding the{" "}
          <span className="italic gilda">Creation of Lab-Grown</span> Diamonds
        </h4> */}
        <div
          ref={contentWrapperRef}
          className={`relative flex tablet:flex-col h-auto mobile:flex-col`}
          // style={{ width: `${leftContent.length * 100}vw` }}
          style={
            deviceType === "tablet"
              ? { width: "100%" }
              : deviceType === "mobile"
              ? { width: "100%" }
              : { width: `${leftContent.length * 100}vw` }
          }
        >
          {leftContent.map((text, index) => {
            return (
              <div
                key={index}
                // className={`w-screen flex tablet:flex-col items-center justify-center transition-opacity duration-300`}
                className={`w-screen tablet:w-full flex tablet:flex-col items-center justify-center transition-opacity duration-300 tablet:p-10 border-b border-Light-Gray mobile:w-full mobile:flex-col-reverse`}
                style={
                  deviceType === "tablet"
                    ? {}
                    : deviceType === "mobile"
                    ? {}
                    : {
                        opacity: contentIndex === index ? 1 : 0, // Fade out the other content
                        display: contentIndex === index ? "flex" : "none", // Hide content when it doesn't match the current index
                        pointerEvents: contentIndex === index ? "auto" : "none", // Prevent interaction with hidden content
                      }
                }
              >
                {/* Left content (Text) */}
                <div
                  ref={(el) =>
                    (contentRefs.current[index] = {
                      ...contentRefs.current[index],
                      leftContent: el,
                    })
                  }
                  className="w-1/2 tablet:w-full p-10 pr-28 tablet:pr-10 tablet:pl-0 mobile:w-full mobile:px-7"
                >
                  {deviceType === "tablet" ? (
                    ""
                  ) : deviceType === "mobile" ? (
                    ""
                  ) : (
                    <div className="bg-Light-Gray inline-block mb-5 p-1 px-4 rounded-full">
                      <p className="text-xl gilda">
                        {index + 1} / {leftContent.length}
                      </p>
                    </div>
                  )}
                  {/* <p className="mb-2">About</p> */}
                  <h2 className="text-5xl gilda mb-4 text-Charcoal-Gray tablet:text-4xl mobile:text-4xl">
                    {text.title}
                  </h2>
                  {/*<p className="text-xl">{text.description}</p> */}
                  {text.structure}
                </div>

                {/* Right content (Image) */}
                <div
                  ref={(el) =>
                    (contentRefs.current[index] = {
                      ...contentRefs.current[index],
                      rightContent: el,
                    })
                  }
                  className="w-1/2 tablet:w-full flex justify-center items-center tablet:justify-start mobile:w-[90%]"
                >
                  <img
                    src={rightImages[index]}
                    alt={`Image ${index + 1}`}
                    className="object-contain tablet:w-full tablet:max-w-[55%] tablet:rounded-xl mobile:w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutThirdSection;
