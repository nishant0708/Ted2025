import React, { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";
import ReactParallaxTilt from "react-parallax-tilt";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Volume2, VolumeX } from "lucide-react";
import { useMediaQuery } from "react-responsive";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const sectionRef = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Load YouTube IFrame API
  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    };

    const createPlayer = () => {
      if (!videoRef.current) return;

      playerRef.current = new window.YT.Player(videoRef.current, {
        videoId: 'jZRbOFMqESs',
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          playlist: 'jZRbOFMqESs'
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          }
        }
      });
    };

    loadYouTubeAPI();

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".highlightsBG",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".highlightsBG",
          start: "top center",
          end: "top top",
          scrub: true,
          markers: false,
        },
        ease: "sine.out",
      }
    );

    gsap.fromTo(
      ".highlightsText",
      { xPercent: -100 },
      {
        xPercent: 0,
        scrollTrigger: {
          trigger: ".highlightsText",
          toggleActions: "play none none reverse",
          start: "top 50%",
          scrub: false,
          markers: false,
        },
        duration: 0.8,
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
          trigger: ".highlightsText",
          toggleActions: "play none none reverse",
          start: "top 50%",
          scrub: false,
          markers: false,
        },
        duration: 0.8,
        ease: "sine.out",
      }
    );

    const videoTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        setIsVisible(true);
        if (playerRef.current) {
          playerRef.current.playVideo();
        }
      },
      onLeave: () => {
        setIsVisible(false);
        setIsMuted(true);
        if (playerRef.current) {
          playerRef.current.pauseVideo();
        }
      },
      onEnterBack: () => {
        setIsVisible(true);
        if (playerRef.current) {
          playerRef.current.playVideo();
        }
      },
      onLeaveBack: () => {
        setIsVisible(false);
        setIsMuted(true);
        if (playerRef.current) {
          playerRef.current.pauseVideo();
        }
      },
      markers: false,
    });

    return () => {
      videoTrigger.kill();
    };
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (isVisible) {
      setIsMuted((prev) => !prev);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="videosection relative flex flex-col-reverse py-[80px] lg:flex-row justify-center gap-[50px] lg:gap-[100px] items-center w-screen min-h-screen bg-black z-20"
    >
      <Marquee
        autoFill={true}
        className="blur-[7px] min-w-[120vw] rotate-12 text-[200px] font-black absolute bg-gradient-to-b from-purple-500 to-pink-500"
      >
        <p className="mr-20">HIGHLIGHTS</p>
      </Marquee>

      {isMobile ? (
        <div className="withoutSound relative">
          <div
            ref={videoRef}
            className="border-y-0 border-x-[3px] border-x-red-950 relative z-30 rounded-md md:rounded-3xl"
            style={{ width: "330px", height: "590px" }}
          />
          <button
            onClick={toggleMute}
            className={`absolute bottom-4 right-4 z-40 bg-black/50 hover:bg-black/70 transition-colors duration-200 rounded-full p-2 text-white ${
              !isVisible ? `opacity-50 cursor-not-allowed` : `opacity-100`
            }`}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            disabled={!isVisible}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      ) : (
        <ReactParallaxTilt className="withoutSound relative">
          <div
            ref={videoRef}
            className="border-y-0 border-x-[3px] border-x-red-950 relative z-30 rounded-md md:rounded-3xl"
            style={{ width: "330px", height: "590px" }}
          />
          <button
            onClick={toggleMute}
            className={`absolute bottom-4 right-4 z-40 bg-black/50 hover:bg-black/70 transition-colors duration-200 rounded-full p-2 text-white ${
              !isVisible ? `opacity-50 cursor-not-allowed` : `opacity-100`
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