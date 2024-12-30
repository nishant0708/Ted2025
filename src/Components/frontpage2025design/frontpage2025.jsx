import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./frontpage2025.css";
import About from "../../2025-Components/About/About";
import SideMarquee2 from "../../2025-Components/sidemarquee2/sidemarquee2";
import TypePara from "../../2025-Components/TypePara/TypePara";
import TypePara2 from "../../2025-Components/typepara2/typepara2";

// Debounce helper function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const FrontPage2025 = ({ onScaleComplete }) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const yearRef = useRef();
  const taglineRef = useRef();
  const zeroRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Debounced refresh function
    const debouncedRefresh = debounce(() => {
      ScrollTrigger.refresh();
    }, 250);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top",
        end: "+=2000",
        scrub: true,
        pin: true,
        onLeave: debounce(() => onScaleComplete && onScaleComplete(), 250),
      },
    });

    timeline.fromTo(
      containerRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    timeline.fromTo(
      yearRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 3, ease: "power2.out" },
      "<"
    );

    timeline.to(
      yearRef.current.querySelector(".zero"),
      { opacity: 0.5, duration: 0.5, ease: "power2.out" },
      "-=0.5"
    );

    textRefs.current.forEach((text, index) => {
      timeline.fromTo(
        text,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "+=0.2"
      );
    });

    timeline.to(
      [taglineRef.current, ...textRefs.current],
      { opacity: 0, duration: 1, ease: "power2.out" },
      "+=0.5"
    );

    const zero = yearRef.current.querySelector(".zero");
    const zeroBounds = zero.getBoundingClientRect();
    const containerBounds = containerRef.current.getBoundingClientRect();
    
    const xOffset = (zeroBounds.left + zeroBounds.width / 2) - (containerBounds.left + containerBounds.width / 2);
    const yOffset = (zeroBounds.top + zeroBounds.height / 2) - (containerBounds.top + containerBounds.height / 2);

    const leftOffset = 40;

    timeline.to(containerRef.current, {
      scale: 30,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      transformOrigin: `${50 + ((xOffset - leftOffset) / containerBounds.width) * 100}% ${50 + (yOffset / containerBounds.height) * 100}%`,
      onComplete: debounce(() => {
        onScaleComplete && onScaleComplete();
      }, 250)
    });

    // Add debounced window resize handler
    window.addEventListener('resize', debouncedRefresh);
    
    ScrollTrigger.refresh();
    return () => {
      window.removeEventListener('resize', debouncedRefresh);
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [onScaleComplete]);

  useEffect(() => {
    const letters = document.querySelectorAll(".tagline-letter25");
    const addBlinkingEffect = debounce(() => {
      letters.forEach(letter => {
        const shouldBlink = Math.random() > 0.8;
        if (shouldBlink) {
          letter.classList.add("blinking25");
        } else {
          letter.classList.remove("blinking25");
        }
      });
    }, 250);

    const interval = setInterval(addBlinkingEffect, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container25">
      <div ref={containerRef} className="frontpage-container25">
        <SideMarquee2/>
        <div className="landing_2025_stars"></div>
        <div className="line-overlay25"></div>
        <div className="columns-container25">
          <div className="column25">
            <span ref={el => (textRefs.current[0] = el)} className="text25">
              <TypePara2 para="CAPTURING THE CONNECTION BETWEEN THE SEEN AND THE UNSEEN"/>
            </span>
          </div>
          <div className="column25">
            <p ref={el => (textRefs.current[1] = el)} className="text25">
              <div className="text2">
                <TypePara2 para="SNAPSHOTS OF IDEAS THAT RESONATED WITHIN AND BEYOND"/>
              </div>
            </p>
          </div>
          <div className="column25 combined-column25">
            <p ref={el => (textRefs.current[2] = el)} className="text25">
              <TypePara2 para="UNMASKING THE HIDDEN TRUTHS THROUGH WORDS THAT INSPIRE"/>
            </p>
            <p ref={el => (textRefs.current[3] = el)} className="text25">
              <TypePara2 para="OUR SPEAKERS SHARE STORIES THAT IGNITE YOUR INNER JOURNEY"/>
            </p>
          </div>
        </div>
        <div className="year-container25">
          <span ref={yearRef} className="year25">
            2&nbsp;<span ref={zeroRef} className="zero">0</span>&nbsp;2&nbsp;5
          </span>
        </div>
        <div className="tagline-container25" ref={taglineRef}>
          <div className="tagline25">
            {Array.from("THE DATE AWAITS, BUT THE EXCITEMENT STARTS NOW").map((char, index) => (
              <span key={index} className="tagline-letter25">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage2025;