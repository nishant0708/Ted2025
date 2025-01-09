import gsap from 'gsap';
import ImageAbout from '../image About/ImageAbout';
import TypeHeading from '../TypeHeading/TypeHeading';
import TypePara from '../TypePara/TypePara';
import image1 from '../../Images/About Section image 1.jpeg';
import image2 from '../../Images/About Section image 2.jpeg';
import image3 from '../../Images/About Section image 3.jpeg';
import image4 from '../../Images/About Section image 4.jpeg';
import './About.css';

import React, { useEffect, useRef } from 'react'
import TypeSmall from '../Typing Small/TypingSmall';
import SideMarquee from '../Side Marquee/SideMarquee';

const About = () => {
    const aboutTextContainerRef = useRef(null);

    
  return (
    <div className='ABOUT_2025_main overflow-y-clip'>

        <SideMarquee isRight={false}/>


        <div className='about_section_1'>

            {/* <div className='about_2025_stars'></div> */}

            <ImageAbout img={image4} />

            <span ref={aboutTextContainerRef} className=' flex flex-col gap-[50px] w-[90dvw] lg:w-auto' >
                <TypeHeading content='Interconnectedness' />

                <TypePara para='Our identities are shaped by the reflections we see in others. Relationships and communities help reveal the chaos, the unspoken, and the unexplored within, guiding us toward deeper understanding and bringing us closer to the essence of the within.' />

                <div className=' lg:self-end md:mt-14 flex lg:flex-col gap-7'>
                    <TypeSmall para='Exploring Identity, Purpose, and the Duality of Being.' />
                    <TypeSmall para='From Surface to Soul: Our Speakers Share Transformative Journeys.' />
                </div>
            </span>
        </div>

        <div className='about_section_2'>

            {/* <div className='about_2025_stars'></div> */}

            <span className='' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
                <TypeHeading content='Self - discovery' />

                <TypePara para='The search for purpose leads us through uncertainty, where external pressures often cloud our inner voice. Breaking free from these constraints uncovers raw truths, revealing the core of The Within. It’s a journey toward clarity, where chaos gives way to self-realization.' />

                <div className=' self-start flex flex-col md:mt-10'>
                    <TypeSmall para='Be a Part of a Conversation ' />
                    <TypeSmall para='That Goes Beyond the Facade.' />
                </div>
            </span>

            <ImageAbout img={image1} />

        </div>

        <div className='about_section_3'>

            {/* <div className='about_2025_stars'></div> */}

            <ImageAbout img={image3} />

            <span className='' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
                <TypeHeading content='Unseen Forces' />

                <TypePara para='Emotions, beliefs, and memories shape our experiences in ways we don’t always see. Like gravity, these unseen forces guide our actions, creativity, and spirituality, leading us closer to The Within—the hidden energy that influences who we are.' />
            </span>
        </div>

        
    </div>
  )
}

export default About
