import './ImageAbout.css';
// import aboutImage from '../../Images/About Section image 1.jpeg';

import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const ImageAbout = (props) => {

    const isMobile = window.innerWidth <= 768 ? true: false; 
    let aboutImage = props.img;

    const aboutImagesContainerRef = useRef(null);
    const aboutImage1 = useRef(null);
    const aboutImage2 = useRef(null);
    const aboutImage3 = useRef(null);
    const aboutImage4 = useRef(null);
    const aboutImage5 = useRef(null);
    const aboutImage6 = useRef(null);
    const aboutImage7 = useRef(null);
    const aboutImage8 = useRef(null);

    const [scrollSpeed ,setScrollSpeed] = useState(false);

    useEffect(() => {
    //   const container = aboutImagesContainerRef.current;
      let lastScrollY = 0;
    //   let gap = 7
        const SCROLL_SPEED_THRESHOLD = 50; // Define the scroll speed threshold

        const updateGap = () => {
            const currentScrollY = window.scrollY;
            const scrollSpeed = Math.abs(currentScrollY - lastScrollY);
            lastScrollY = currentScrollY;

            // Determine the gap based on scroll speed
            if(scrollSpeed > SCROLL_SPEED_THRESHOLD){
                setScrollSpeed(true);
            }else{
                setScrollSpeed(false);
            }

        
        };
  
      // Attach scroll listener
      window.addEventListener('scroll', updateGap);
  
      // Cleanup on component unmount
      return () => {
        window.removeEventListener('scroll', updateGap);
      };
    }, []);

    useEffect(() => {

        if(scrollSpeed){
            gsap.to(aboutImagesContainerRef.current, {
                y: -80,
                rowGap: 30,
                duration: 0.84,
                ease: 'power3.out',
            });
        }else{
            gsap.to(aboutImagesContainerRef.current, {
                y:0,
                rowGap: 7,
                duration: 0.8,
                delay: 0.4,
                ease: 'power3.out',
            });
        }

    },[scrollSpeed])

    useEffect(() => {

        const parentElement = aboutImagesContainerRef.current.parentElement;
        
        const tl1 = gsap.timeline({
            scrollTrigger:{
                trigger: aboutImagesContainerRef.current,
                start: isMobile? 'top center' :'top 20%',
                end: isMobile? '+=3000' :'+=2000',
                pin: parentElement,
                pinSpacing: true,
                scrub: isMobile? true: false,
                markers: false,
            }
        })

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: aboutImagesContainerRef.current,
                start: 'top 35%',
                // pin: '',
                // pinSpacing: true
            }
        })

        tl1.fromTo(aboutImage3.current,{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.1,
            ease: 'power2.out'
        }).fromTo(aboutImage7.current,{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }).fromTo(aboutImage4.current,{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        }).fromTo(aboutImage1.current,{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.1,
            ease: 'power2.out'
        }).fromTo(aboutImage6.current,{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        }).fromTo(aboutImage8.current,{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }).fromTo(aboutImage2.current,{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.1,
            ease: 'power2.out'
        }).fromTo(aboutImage5.current,{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        })



    },[])


  return (
    <div ref={aboutImagesContainerRef} className=' ImageAbout_2025_main'>

        {/* image div 1 */}
        <div ref={aboutImage1} className=' AboutImage_1' style={{height: '8px', overflow: 'hidden'}}>
            <img loading='lazy' src={aboutImage} alt="" width={'100%'} height={'auto'} />
        </div>

        
        {/* image div 2 */}
        <div ref={aboutImage2} className=' AboutImage_2' style={{height: '13px', overflow: 'hidden'}}>
            <img loading='lazy' src={aboutImage} alt="" width={'100%'} height={'auto'} />
        </div>

        {/* image div 3 */}
        <div ref={aboutImage3} className=' AboutImage_3' style={{height: '18px', overflow: 'hidden' }}>
            <img loading='lazy' src={aboutImage} alt="" width={'100%'} height={'auto'} />
        </div>

        {/* image div 4 */}
        <div ref={aboutImage4} className=' AboutImage_4' style={{height: '26px', overflow: 'hidden'}}>
            <img loading='lazy' src={aboutImage} alt="" width={'100%'} height={'auto'} />
        </div>

        {/* image div 5 */}
        <div ref={aboutImage5} className=' AboutImage_5' style={{height: '40px', overflow: 'hidden'}}>
            <img loading='lazy' src={aboutImage} alt="" width={'100%'} height={'auto'} />
        </div>

        {/* image div 6 */}
        <div ref={aboutImage6} className=' AboutImage_6' style={{height: '60px', overflow: 'hidden'}}>
            <img loading='lazy' src={aboutImage} alt="" width={'100%'} height={'auto'} />
        </div>

        {/* image div 7 */}
        <div ref={aboutImage7} className=' AboutImage_7' style={{height: '100px', overflow: 'hidden'}}>
            <img loading='lazy' src={aboutImage} alt="" width={'100%'} height={'auto'} />
        </div>

        {/* image div 8 */}
        <div ref={aboutImage8} className=' AboutImage_8 block md:hidden lg:block' style={{height: '233px', overflow: 'hidden'}}>
            <img loading='lazy' src={aboutImage} alt="" width={'100%'} height={'auto'} />
        </div>

        
    </div>
  )
}

export default ImageAbout