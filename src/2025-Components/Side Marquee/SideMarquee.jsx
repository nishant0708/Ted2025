import './SideMarquee.css';
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

const SideMarquee = (props) => {

    const sideMarqueeText = useRef(null);
    const sideMarqueeText2 = useRef(null);
    const [pageHeight, setPageHeight] = useState(null);
    let isRight = props.isRight;
    
    useEffect(() => {

        setPageHeight(document.documentElement.offsetHeight);

        gsap.fromTo([sideMarqueeText.current, sideMarqueeText2.current],{
            y: 0,
            rotate: -90,
            x: isRight? -195 : -205,
            
        },{
            // y: `${document.documentElement.offsetHeight}`,
            y: isRight ? '450dvh' :'560dvh',
            rotate: -90,
            x: isRight? -195 : -205,
            duration: 26,
            repeat: -1,
            ease: 'none'
        })

    },[])

    useEffect(() => {
        setPageHeight(document.documentElement.offsetHeight)
    },[document.documentElement.offsetHeight])

    
    console.log(document.documentElement.offsetHeight);
    return ( 
    <div style={{
        height: isRight ? `400dvh`: '350dvh',
        // height: `${pageHeight}px`,
      }}
    className={` w-7 SideMarqueeContainer  overflow-y-clip invisible md:visible ${isRight? 'right-2 absolute top-0' : 'left-10 absolute'} z-50 border-l-[1px] border-l-slate-200`}>
        {/* <div  className=' h-[1px] bg-white absolute top-[45%]'></div> */}
        
        <div ref={sideMarqueeText} className=' text-slate-300 px-2 relative z-40 bg-black h-fit w-max text-[12px]'>
            {isRight ?  'PEELING BACK THE LAYERS TO REVEAL THE ESSENCE OF SELF' : ' MOMENTS THAT REFLECT THE UNSPOKEN STORIES OF HUMANITY'}
        </div>

        <div ref={sideMarqueeText2} className={`  mt-[-200dvh] text-slate-300 px-2 relative z-40 bg-black h-fit w-max text-[12px]`}>
            {isRight ?  '' : ' MOMENTS THAT REFLECT THE UNSPOKEN STORIES OF HUMANITY'}
        </div>
    </div>
  )
}

export default SideMarquee