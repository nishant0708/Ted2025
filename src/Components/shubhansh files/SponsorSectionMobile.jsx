import './SponsorSectionMobile.css';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import Sponsors from './Sponsors';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

import SponsorData from '../../Sponors.json';
import galaxy from '../../Images/landing2025_milky.png';
gsap.registerPlugin(ScrollTrigger);

function SponsorMobileSection() {
    const [selectedYear, setSelectedYear] = useState('2025');

useEffect(() => {
    let tl2 = gsap.timeline();
    tl2.fromTo('.word', {
        y: 140,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        stagger: {
            each: 0.1
        },
        delay: 0.05,
        duration: 1.5,
        ease: "elastic.out(1,0.9)",
    });

    gsap.fromTo('.sponsor_image', {
        yPercent: 100,
        scale: 0.2,
        opacity: 0.4
    }, {
        yPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 2,
        ease: "power2.out"
    });
}, [selectedYear]);

    const sponsor_data = SponsorData[selectedYear];
    const sponsorLen = sponsor_data?.length || 0;

    const sponsorTriggerRefMobile = useRef(null);
    const sponsorContainerRefMobile = useRef(null);
    const sponsorContainerRefMobile2 = useRef(null);

    return (
        <div className='sponsor-wrapper-Mobile' ref={sponsorTriggerRefMobile}>
            <img loading="lazy" src={galaxy} alt="galaxy" className="galaxy2025" />
            
            {/* Year Selection Dropdown - Repositioned */}
            <div className="year-selector-container" style={{
                position: 'relative',
                zIndex: 10,
                padding: '2.4rem',
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: '25px',
                paddingRight: '2rem'
            }}>
                <select 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        border: '2px solid #ffffff',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: '#ffffff',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}
                >
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                </select>
            </div>

            <div className='sponsor-heading-Mobile-container'>
                {[...Array(10)].map((_, index) => (
                    <>
                        <h1 className='sponsor-heading-Mobile'>
                            {
                                'Sponsors'.split('').map((word) => (
                                    word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                                ))
                            }
                        </h1>
                        <h1 className='sponsor-heading-Mobile and'>
                            {
                                'Sponsors'.split('').map((word) => (
                                    word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                                ))
                            }
                        </h1>
                    </>
                ))}
            </div>

            <Marquee speed={80} pauseOnClick={true}>
    <div className='sponsors-container-Mobile'>
        {sponsor_data?.map((sponsor, index) => (
            <Sponsors key={index} className='sponsor_image' Image={sponsor} />
        ))}
    </div>
</Marquee>

<Marquee speed={80} pauseOnClick={true}>
    <div className='sponsors-container-Mobile2'>
        {sponsor_data?.map((sponsor, index) => (
            <Sponsors key={index} className='sponsor_image' Image={sponsor} />
        ))}
    </div>
</Marquee>
        </div>
    );
}

export default SponsorMobileSection;