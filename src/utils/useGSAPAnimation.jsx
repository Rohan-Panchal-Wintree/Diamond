import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Main hook to handle multiple animations by effect type and class name
export const useGSAPAnimations = (className, effectType, options = {}) => {
  useEffect(() => {
    // Get all elements with the matching class name
    const elements = document.querySelectorAll(`.${className}`);
    if (elements.length === 0) return; // If no elements found, do nothing

    elements.forEach((element) => {
      // Reset opacity to 0 initially
      gsap.set(element, { opacity: 0 });

      // Setup ScrollTrigger on each element
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%", // When the element enters 80% of the viewport
        once: true, // Ensure the animation runs only once
        onEnter: () => {
          switch (effectType) {
            case "typing":
              gsap.fromTo(
                element,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1, stagger: 0.1, ...options }
              );
              break;

            case "fade":
              gsap.fromTo(
                element,
                { opacity: 0 },
                { opacity: 1, duration: 1, ...options }
              );
              break;

            // Slide Effects

            case "slideLeft":
              gsap.fromTo(
                element,
                { x: 100, opacity: 0 }, // Start 100px to the right of its final position
                { x: 0, opacity: 1, duration: 1, ...options } // Slide to the normal position (from right to left)
              );
              break;

            case "slideRight":
              gsap.fromTo(
                element,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ...options }
              );
              break;

            case "slideUp":
              gsap.fromTo(
                element,
                { y: 30, opacity: 0 }, // Start 100px below the final position
                { y: 0, opacity: 1, duration: 1, ...options } // Slide up to the final position
              );
              break;

            case "slideDown":
              gsap.fromTo(
                element,
                { y: -30, opacity: 0 }, // Start 100px above the final position
                { y: 0, opacity: 1, duration: 1, ...options } // Slide down to the final position
              );
              break;

            case "rotate":
              gsap.fromTo(
                element,
                { rotation: -90, opacity: 0 },
                { rotation: 0, opacity: 1, duration: 1, ...options }
              );
              break;

            default:
              console.warn(`Unknown effect type: ${effectType}`);
          }
        },
        ...options, // Allow custom ScrollTrigger options
      });
    });
  }, [className, effectType, options]); // Re-run when className or effectType changes
};
