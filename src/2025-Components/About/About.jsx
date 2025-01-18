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
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {


    
  return (
    <div className='ABOUT_2025_main overflow-y-clip bg-black'>

        <SideMarquee isRight={false}/>


        <div className='about_section_1'>

            {/* <div className='about_2025_stars'></div> */}

            <ImageAbout img={image4} />

            <span className=' flex flex-col gap-[50px] max-w-[500px]' >
                <TypeHeading content='Interconnectedness' />

                <TypePara para='Our identities are shaped by how we view ourselves through the eyes of others. It is in these relationships and communities that the chaos hidden from our view is revealed, thus bringing us closer to the understanding of our true essence within.' />

                <div className=' lg:self-end md:mt-14 flex lg:flex-col gap-7'>
                    <TypeSmall para='Exploring Identity, Purpose, and the Duality of Being.' />
                    <TypeSmall para='From Surface to Soul: Our Speakers Share Transformative Journeys.' />
                </div>
            </span>
        </div>

        <div className='about_section_2'>

            {/* <div className='about_2025_stars'></div> */}

            <span className=' max-w-[500px]' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
                <TypeHeading content='Self - discovery' />

                <TypePara para='The search for purpose can take us through uncertain times, where outside pressures make it hard to hear our inner voice. By freeing ourselves from these distractions, we start to uncover important truths. It’s a journey of clarity, where confusion slowly turns into self-awareness.' />

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

            <span className=' max-w-[500px]' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
                <TypeHeading content='Unseen Forces' />

                <TypePara para='Our thoughts, emotions, and even past events may shape us subconsciously into who we become. Such hidden influences take control over our decisions, creativity, and spiritual life and inspire us to unlock deeper levels within ourselves.' />
            </span>
        </div>

        
    </div>
  )
}

export default About
