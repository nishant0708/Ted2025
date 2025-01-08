import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(false); // Changed default to false
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.highlightsBG', 
          { opacity: 0 },
          {
            opacity: 0,
            scrollTrigger: {
              trigger: '.highlightsBG',
              start: 'top center',
              end: 'top top',
              scrub: true
            }
          }
        );

        gsap.fromTo(['.highlightsText'], 
          { xPercent: -100 },
          {
            xPercent: 0,
            scrollTrigger: {
              trigger: '.highlightsText',
              start: 'top 50%',
              toggleActions: 'play none none reverse'
            },
            duration: 0.8
          }
        );

        gsap.fromTo('.withoutSound',
          { opacity: 0, xPercent: 100 },
          {
            opacity: 1,
            xPercent: 0,
            scrollTrigger: {
              trigger: '.highlightsText',
              start: 'top 50%',
              toggleActions: 'play none none reverse'
            },
            duration: 0.8
          }
        );
      } catch (error) {
        console.error('Failed to load GSAP:', error);
      }
    };

    loadGSAP();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (!entry.isIntersecting && playerRef.current) {
            playerRef.current.mute();
            setIsMuted(true);
          } else if (entry.isIntersecting && playerRef.current) {
            playerRef.current.unMute();
            setIsMuted(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'jZRbOFMqESs',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          playlist: 'jZRbOFMqESs',
          mute: 0 // Start unmuted
        },
        events: {
          onReady: (event) => {
            event.target.unMute(); // Ensure video starts unmuted
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const toggleMute = () => {
    if (!isVisible) return;
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={sectionRef} className="relative flex flex-col-reverse py-20 lg:flex-row justify-center gap-12 lg:gap-24 items-center w-screen min-h-screen bg-black">
      <div className="blur-[7px] min-w-[120vw] rotate-12 text-[200px] font-black absolute bg-gradient-to-b from-purple-500 to-pink-500 overflow-hidden whitespace-nowrap animate-marquee">
        <span className="inline-block mr-20">HIGHLIGHTS</span>
      </div>

      <div className="withoutSound relative transform transition-transform duration-300 hover:scale-[1.02]">
        <div id="youtube-player" className="border-x-[3px] border-x-red-950 relative z-30 rounded-md md:rounded-3xl w-[330px] h-[590px]" />
        <button
          onClick={toggleMute}
          className={`absolute bottom-4 right-4 z-40 bg-black/50 hover:bg-black/70 transition-colors duration-200 rounded-full p-2 text-white ${!isVisible ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          disabled={!isVisible}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </div>

      <div className="text-left text-white font-thin space-y-12">
        <h2 className="highlightsText uppercase w-min overflow-clip leading-[48px] lg:leading-[70px] z-40 font-black text-[60px] lg:text-[80px] max-w-[90vw]">
          Reliving the magic
        </h2>
        <p className="highlightsText hidden md:block leading-8 max-w-[485px] text-justify">
          Last year's event was nothing short of extraordinary—a perfect blend of creativity, passion, and inspiration! Thrilling talks by our incredible speakers sparked ideas and the energy was contagious, the vibe unmatched—relive the magic through our highlights video!
        </p>
      </div>
    </div>
  );
};

export default VideoSection;