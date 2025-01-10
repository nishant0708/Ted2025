import { transform } from 'framer-motion';
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const SideMarquee2 = () => {
    const rightMarqueeText = useRef(null);
    const rightMarqueeText2 = useRef(null);
    const leftMarqueeText = useRef(null);
    const leftMarqueeText2 = useRef(null);
    
    useEffect(() => {
        // Right side animation
        gsap.fromTo([rightMarqueeText.current, rightMarqueeText2.current], {
            y: 0,
            rotate: -90,
            x: -195,
        }, {
            y: '450dvh',
            rotate: -90,
            x: -195,
            duration: 20,
            repeat: -1,
            ease: 'none'
        });

        // Left side animation
        gsap.fromTo([leftMarqueeText.current, leftMarqueeText2.current], {
            y: 0,
            rotate: -90,
            x: -205,
        }, {
            y: '450dvh',
            rotate: -90,
            x: -205,
            duration: 26,
            repeat: -1,
            ease: 'none'
        });
    }, []);

    return (
        <>
            {/* Right Side Marquee */}
            <div style={{ height: '50dvh' }}
                className="w-7 SideMarqueeContainer overflow-y-clip invisible md:visible absolute right-2 top-0 z-50 border-l-[1px] border-l-slate-200">
                <div ref={rightMarqueeText} className="text-slate-300 px-2 relative z-40 bg-black h-fit w-max text-[12px]">
                    PEELING BACK THE LAYERS TO REVEAL THE ESSENCE OF SELF
                </div>
                <div ref={rightMarqueeText2} className="mt-[-200dvh] text-slate-300 px-2 relative z-40 bg-black h-fit w-max text-[12px]">
                    PEELING BACK THE LAYERS TO REVEAL THE ESSENCE OF SELF
                </div>
            </div>

            {/* Left Side Marquee */}
            <div style={{ transform:"translate(0dvh ,50dvh)", height: '100dvh' }}
                className="w-7 SideMarqueeContainer overflow-y-clip invisible md:visible absolute left-10 top-0 z-50 border-l-[1px] border-l-slate-200">
                <div ref={leftMarqueeText} className="text-slate-300 px-2 relative z-40 bg-black h-fit w-max text-[12px]">
                    MOMENTS THAT REFLECT THE UNSPOKEN STORIES OF HUMANITY
                </div>
                <div ref={leftMarqueeText2} className="mt-[-200dvh] text-slate-300 px-2 relative z-40 bg-black h-fit w-max text-[12px]">
                    MOMENTS THAT REFLECT THE UNSPOKEN STORIES OF HUMANITY
                </div>
            </div>
        </>
    );
}

export default SideMarquee2