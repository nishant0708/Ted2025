import React, { useEffect, useState, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import ReactParallaxTilt from 'react-parallax-tilt';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Volume2, VolumeX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [player, setPlayer] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Load YouTube API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('youtube-player', {
                videoId: 'jZRbOFMqESs',
                playerVars: {
                    autoplay: 1,
                    loop: 1,
                    controls: 0,
                    modestbranding: 1,
                    mute: 1,
                    playlist: 'jZRbOFMqESs'
                },
                events: {
                    onReady: (event) => {
                        setPlayer(event.target);
                    }
                }
            });
        };

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => {
                    setIsVisible(true);
                    if (player) {
                        player.playVideo();
                        !isMuted && player.unMute();
                    }
                },
                onLeave: () => {
                    setIsVisible(false);
                    if (player) {
                        player.mute();
                        player.pauseVideo();
                    }
                },
                onEnterBack: () => {
                    setIsVisible(true);
                    if (player) {
                        player.playVideo();
                        !isMuted && player.unMute();
                    }
                },
                onLeaveBack: () => {
                    setIsVisible(false);
                    if (player) {
                        player.mute();
                        player.pauseVideo();
                    }
                }
            });

            gsap.fromTo('.highlightsBG', {
                opacity: 0,
            }, {
                opacity: 0,
                scrollTrigger: {
                    trigger: '.highlightsBG',
                    start: 'top center',
                    end: 'top top',
                    scrub: true,
                },
                ease: 'sine.out'
            });

            gsap.fromTo('.highlightsText', {
                xPercent: -100,
            }, {
                xPercent: 0,
                scrollTrigger: {
                    trigger: '.highlightsText',
                    toggleActions: 'play none none reverse',
                    start: 'top 50%',
                },
                duration: 0.8,
                ease: 'sine.out',
            });

            gsap.fromTo('.withoutSound', {
                opacity: 0,
                xPercent: 100,
            }, {
                opacity: 1,
                xPercent: 0,
                scrollTrigger: {
                    trigger: '.highlightsText',
                    toggleActions: 'play none none reverse',
                    start: 'top 50%',
                },
                duration: 0.8,
                ease: 'sine.out',
            });
        });

        return () => ctx.revert();
    }, [player, isMuted]);

    const toggleMute = () => {
        if (isVisible && player) {
            setIsMuted(!isMuted);
            isMuted ? player.unMute() : player.mute();
        }
    };

    return (
        <div ref={sectionRef} className="relative flex flex-col-reverse py-[80px] lg:flex-row justify-center gap-[50px] lg:gap-[100px] items-center w-screen min-h-screen bg-black z-20">
            <Marquee autoFill={true} className="blur-[7px] min-w-[120vw] rotate-12 text-[200px] font-black absolute bg-gradient-to-b from-purple-500 to-pink-500">
                <p className="mr-20">HIGHLIGHTS</p>
            </Marquee>

            <ReactParallaxTilt className="withoutSound relative">
                <div className="relative">
                    <div 
                        id="youtube-player"
                        className="border-y-0 border-x-[3px] border-x-red-950 relative z-30 rounded-md md:rounded-3xl w-[330px] h-[590px]"
                    />
                    <button
                        onClick={toggleMute}
                        className={`absolute bottom-4 right-4 z-40 bg-black/50 hover:bg-black/70 transition-colors duration-200 rounded-full p-2 text-white ${!isVisible ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                        disabled={!isVisible}
                    >
                        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </button>
                </div>
            </ReactParallaxTilt>

            <span className="uppercase text-left text-white font-thin overflow-x-hidden" style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}}>
                <h2 className="highlightsText uppercase w-min overflow-clip leading-[48px] lg:leading-[70px] z-40 text-left font-black text-[60px] lg:text-[80px] max-w-[90vw] text-white">
                    Reliving the magic
                </h2>
                <p className="highlightsText text-justify hidden md:block leading-8 max-w-[485px]">
                    Last year's event was nothing short of extraordinary—a perfect blend of creativity, passion, and inspiration! Thrilling talks by our incredible speakers sparked ideas and the energy was contagious, the vibe unmatched—relive the magic through our highlights video!
                </p>
            </span>
        </div>
    );
};

export default VideoSection;