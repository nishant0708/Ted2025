import './SponsorsSection.css';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import Sponsors from './Sponsors';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import SponsorData from '../../Sponors.json';

gsap.registerPlugin(ScrollTrigger);

function SponsorsSection() {
    const [year, setYear] = useState(2025);
    
    useEffect(() => {
        let tl2 = gsap.timeline();
        tl2.fromTo('.word', {
            y: 340,
            opacity: 0
        },
        {
            y: 100,
            opacity: 1,
            stagger: { each: 0.1 },
            delay: 0.7,
            duration: 1.5,
            ease: "elastic.out(1,0.5)",
        });
    }, []);
    
    let sponsorList = SponsorData[2024] || [];
    const sponsorTriggerRef = useRef(null);
    const sponsorContainerRef = useRef(null);

    return (
        <div className='sponsor-wrapper' ref={sponsorTriggerRef}>
            <div className="header-container">
                <h1 className='sponsor-heading'>
                    {'Sponsors'.split('').map((char, index) => (
                        <div key={index} className='word'>{char === ' ' ? '\u00A0' : char}</div>
                    ))}
                </h1>
                <select className="year-drop" value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
                    <option className="option" value="2025">2025</option>
                    <option className="option" value="2024">2024</option>
                </select>
            </div>
            
            <Marquee speed={100} pauseOnClick={true}>
                <div className='sponsors-container' ref={sponsorContainerRef}>
                    {sponsorList.map((sponsor, index) => (
                        <Sponsors key={index} Image={sponsor} />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}

export default SponsorsSection;
