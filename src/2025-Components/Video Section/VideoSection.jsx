import './VideoSection.css';
import React, { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";
import ReactParallaxTilt from "react-parallax-tilt";
import gsap from "gsap";
import { Volume2, VolumeX } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {

    gsap.fromTo(
      ".highlightsText",
      { xPercent: -100 },
      {
        xPercent: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          toggleActions: "play none none reverse",
          start: "top 50%",
          scrub: false,
          markers: false,
        },
        duration: 0.8,
        stagger:{
          each: 0.6
        },
        ease: "sine.out",
      }
    );

    gsap.fromTo(
      ".withoutSound",
      { opacity: 0, xPercent: 100 },
      {
        opacity: 1,
        xPercent: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          toggleActions: "play none none reverse",
          start: "top 50%",
          scrub: false,
          markers: false,
        },
        duration: 0.8,
        ease: "sine.out",
      }
    );

    const toggleVideoPlayback = (play) => {
      console.log('play- ', play)
        const iframe = videoRef.current.contentWindow;
        iframe.postMessage(
          JSON.stringify({
            event: "command",
            func: play ? "playVideo" : "pauseVideo",
          }),
          "*"
        );
    };

    if(!isMobile){
     
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%", // When 50% of the section is visible
        end: "bottom 50%",
        markers: false,
        onEnter: () => {
          toggleVideoPlayback(true);
        },
        onLeave: () => {
          toggleVideoPlayback(false);
        },
        onEnterBack: () => {
          toggleVideoPlayback(true);
        },
        onLeaveBack: () => {
          toggleVideoPlayback(false);
        },
      }); 
    }else{
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%", // When 50% of the section is visible
        end: "bottom 50%",
        markers: true,
        onEnter: () => {
          toggleVideoPlayback(true);
          // setIsMuted(false);
          // console.log('entered')
        },
        onLeave: () => {
          toggleVideoPlayback(false);
          // setIsMuted(true);
          // console.log('left')
        },
        onEnterBack: () => {
          toggleVideoPlayback(true);
          // setIsMuted(false);
          // console.log('enter back')
        },
        onLeaveBack: () => {
          toggleVideoPlayback(false);
          // console.log('leaveback')
        },
      });
    }

    return () => {
      ScrollTrigger.killAll(); // Cleanup when component unmounts
    };

  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = `https://www.youtube.com/embed/jZRbOFMqESs?autoplay=1&loop=1&playlist=jZRbOFMqESs&controls=0&modestbranding=1&mute=${isMuted ? 1 : 0}&showinfo=0&rel=0&enablejsapi=1`;
    }
  }, [isMuted]);

  const toggleMute = () => {
      setIsMuted(!isMuted);
  };

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col-reverse py-[80px] lg:flex-row justify-center gap-[50px] lg:gap-[100px] items-center w-screen min-h-screen bg-black z-20"
    >
      <Marquee
        autoFill={true}
        className="blur-[7px] min-w-[150vw] rotate-12 text-[200px] font-black absolute bg-gradient-to-b from-purple-500 to-pink-500"
      >
        <p className="mr-20">HIGHLIGHTS</p>
      </Marquee>

      {isMobile ? (
        <div className="withoutSound relative">
          <iframe
            ref={videoRef}
            className="border-y-0 border-x-[3px] border-x-red-950 relative z-30 rounded-md md:rounded-3xl"
            width="330"
            height="590"
            title="YouTube Shorts Video"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          />
          <button
            onClick={toggleMute}
            className={`absolute bottom-4 right-4 z-40 bg-black/50 hover:bg-black/70 transition-colors duration-200 rounded-full p-2 text-white ${
              !isVisible ? `opacity-50` : `opacity-100`
            }`}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            disabled={!isVisible}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      ) : (
        <ReactParallaxTilt className="withoutSound relative">
          <iframe
            ref={videoRef}
            className="border-y-0 border-x-[3px] border-x-red-950 relative z-30 rounded-md md:rounded-3xl"
            width="330"
            height="590"
            title="YouTube Shorts Video"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          />
          <button
            onClick={toggleMute}
            className={`absolute bottom-4 right-4 z-40 bg-black/50 hover:bg-black/70 transition-colors duration-200 rounded-full p-2 text-white ${
              !isVisible ? `opacity-50` : `opacity-100`
            }`}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            disabled={!isVisible}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </ReactParallaxTilt>
      )}

      <span
        className="uppercase text-left text-white font-thin overflow-x-hidden"
        style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}
      >
        <h2 className="highlightsText uppercase w-min overflow-clip leading-[55px] lg:leading-[80px] z-40 text-left font-black text-[60px] lg:text-[80px] max-w-[90vw] text-white">
          Reliving the magic
        </h2>
        <p className="highlightsText text-justify hidden md:block leading-8 max-w-[485px]">
          Last year's event was nothing short of extraordinary—a perfect blend
          of creativity, passion, and inspiration! Thrilling talks by our
          incredible speakers sparked ideas and the energy was contagious, the
          vibe unmatched—relive the magic through our highlights video!
        </p>
      </span>
    </div>
  );
};

export default VideoSection;
