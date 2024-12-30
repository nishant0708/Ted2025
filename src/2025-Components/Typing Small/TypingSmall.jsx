import './TypingSmall.css';
import { TypeAnimation } from 'react-type-animation';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TypeSmall = (props) => {
    const typeSmallRef = useRef(null);
    const [hasSmallPlayed, setHasSmallPlayed] = useState(false);

    useEffect(() => {
      
        if (!hasSmallPlayed) {
            const animation = gsap.fromTo(
                typeSmallRef.current,
                {
                    opacity: 1,
                },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: typeSmallRef.current,
                        start: 'top 27%',
                        scrub: false,
                        markers: false,
                        toggleActions: 'play none none none', // Ensure it plays only once
                        onEnter: () => setHasSmallPlayed(true), // Mark as played on enter
                    },
                }
            );

            // Cleanup the ScrollTrigger instance on component unmount
            return () => {
                if (animation.scrollTrigger) {
                    animation.scrollTrigger.kill();
                }
            };
        }
    }, [hasSmallPlayed]);

    return (
        <span className='typing_text_para relative' ref={typeSmallRef} 
            style={{width: '100px',}}  
        >
            {hasSmallPlayed && (
                <TypeAnimation
                    sequence={[props.para]}
                    wrapper="span"
                    speed={40}
                    style={{whiteSpace: 'pre-line', fontWeight: '100', fontSize: '8px', display: 'inline-block', textAlign: 'justify' }}
                    repeat={0}
                    cursor={false}
                />
            )}
        </span>
    );
};

export default TypeSmall;
