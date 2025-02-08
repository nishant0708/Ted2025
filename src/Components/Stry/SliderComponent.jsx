import React, { useLayoutEffect } from "react";
import "./SliderComponent.css";
import { useEffect, useState, useRef } from "react";
import samp_image from "../Assests/Images/rev.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import linkedin from "../Assests/Images/linkedin.png";
import instagram from "../Assests/Images/instagram (2).png";
import badal from "../../Images/Group 83.svg";
import badal2 from "../../Images/Group 84.svg";
const SliderComponent = () => {
  const progressBarRef = useRef(null);
  const [showTitle, setShowTitle] = useState(false);
  const sliderRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState("2024");
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // DOM vars
    const slider = document.getElementById("slider");
    const title = document.getElementById("title");
    const toggle = document.getElementById("toggle");
    const sliderStyles = slider.style;

    // Scroll trigger
    let scrollPerc = 0;
    let scrollVel = 0;
    let velocity;
    let proxy = {
      velocity: 0,
    };

    let titleSetter = gsap.quickSetter(title, "y", "px");
    let clamp = gsap.utils.clamp(-1, 1);

    // ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: slider,
      start: "Top 80%",
      onUpdate: (self) => {
        // Scroll percentage
      
        scrollPerc = round(
          (window.scrollY / (slider.offsetHeight - window.innerHeight)) * 100,
          2
        ) -(isInitialLoad ? 250 : 80);
        sliderStyles.setProperty("--scroll-perc", scrollPerc);
        velocity = clamp(self.getVelocity() / -300);
        if (Math.abs(velocity) > Math.abs(proxy.velocity)) {
          proxy.velocity = velocity;
          gsap.to(proxy, {
            velocity: 0,
            snap: {
              velocity: 0.001,
            },
            duration: 0.4,
            ease: "power3",
            overwrite: true,
            onUpdate: () => {
              // Scroll direction
              sliderStyles.setProperty(
                "--scroll-y",
                proxy.velocity > 0 ? 1 : -1
              );

              // Scroll velocity
              scrollVel = Math.abs(proxy.velocity);
              sliderStyles.setProperty("--scroll-vel", scrollVel);

              // Animate title
              gsap.set(title, {
                skewX: `${proxy.velocity * 5}deg`,
                x:
                  (-scrollPerc / 100) * (title.offsetWidth - window.innerWidth),
              });
            },
          });
        }
      },
    });

    const round = (x, n = 2) => {
      const decimals = 10 ** n;
      return Math.round(x * decimals) / decimals;
    };
  }, [selectedYear]);

  /**
   ** Round number with n decimals
   */
  const speakerData2024 = [
    {
      name: "Abhishek",
      surname: "Kar",
      designation: "Finance Enthusiast, YouTube, Startup Consultant",
      description:
        "An IIPS DAVV alumni who has made a name for himself in the finance influencers community with 1.6 million followers on insta and 1.2 million on youtube along with an amazon bestseller book -Stocks and Life.",
      image: "https://imgur.com/iCd3rhC.png",
      instagramLink:
        "https://www.instagram.com/abhishekkarofficial?igsh=Zm9wZG9jejVjd3o1",
      linkedinLink:
        "https://www.linkedin.com/in/abhishek-kar-/?originalSubdomain=in",
    },
    {
      name: "Ashu",
      surname: "Ghai",
      designation: "Educator, Content Creator, Youth Icon",
      description:
        "A household name in the digital education community for his specialization in teaching through experiments rather than the conventional theory system. Has a major follower count of 6 million on youtube with the channel becoming the 3rd fastest growing channel in India.",
      image: "https://imgur.com/lqGbHub.png",
      instagramLink: "https://www.instagram.com/ashu.ghai/",
      linkedinLink:
        "https://www.linkedin.com/in/ashu-ghai-179892254/?originalSubdomain=in",
    },
    {
      name: "Rahul",
      surname: "Laddha",
      designation: "Networking, Brand Building",
      description:
        "A man with diverse roles:Podcaster, anchor, speaker, published author along with 15+ years of work experience as a chief of staff,business analyst and other prestigious corporate positions.",
      image: "https://imgur.com/A50aOyu.png",
      instagramLink: "",
      linkedinLink:
        "https://www.linkedin.com/in/rahulladha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    {
      name: "Ananad",
      surname: "Nahaar",
      designation:
        "Startup Founder, Inspirational, Recently seen on Shark Tank India",
      description:
        "Just recently came and pitched his really successful business venture on the shark tank. With a food chain startup -ZORKO. He has effortlessly collaborated for 150 plus franchises in a small time of one year.",
      image: "https://imgur.com/4M3NoKA.png",
      instagramLink: "https://www.instagram.com/anand.zorko/",
      linkedinLink:
        "https://www.linkedin.com/in/anandnahar4/?originalSubdomain=in",
    },
    {
      name: "Sri Pundrik",
      surname: "Goswami",
      designation: "Psychology, Spritual",
      description:
        "A renowned Vaishnava leader,speaker and the scholar of vedic knowledge With a total of 500k+ followers on various social media platforms.",
      image: "https://imgur.com/Jq4Leef.png",
      instagramLink:
        "https://www.instagram.com/sripundrik?igsh=MTRnM2ppand4ZTA3ZA",
      linkedinLink: "",
    },
    {
      name: "Saanand",
      surname: "Verma",
      designation: "Actor, Content Creator, TV Icon",
      description:
        "A renowned Indian film and television actor who has worked for numerous projects like mardaani,raid,chicchore and shows like C.I.D,F.I.R and Sacred games to name a few",
      image: "https://imgur.com/vJ5kBL1.png",
      instagramLink: "https://www.instagram.com/saanandverma/?hl=en",
      linkedinLink: "",
    },
  ];

  const speakerData2023 = [
    {
      name: "Ella D'",
      surname: "Verma",
      description:
        "Ella D'Verma, delivered a powerful speech on ''Acceptance'', highlighting the significance of embracing diversity and  fostering an inclusive society.",
      image: "https://imgur.com/0xIsfCm.jpeg",
      designation: "Miss International Trans Queen",
      instagramLink:
        "https://www.instagram.com/elladverma?igsh=MXQ0eHNicGF2b2FsaA",
      linkedinLink:
        "https://www.linkedin.com/in/ella-verma-ab6889236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    {
      name: "Abhishek ",
      surname: "Mishra",
      designation: "CTO and Co-founder at Pisarv Technology",
      description:
        'Abhishek Mishra captivated the audience with his talk on "Transhumanism" and how technology is reshaping the evolutionary path of humanity',
      image: "https://imgur.com/fL2xzjD.jpeg",
      instagramLink:
        "https://www.instagram.com/abhisek.mnit?igsh=MTM2MGg2Y3VweGJveQ",
      linkedinLink: "",
    },

    {
      name: "Dr. Ragini",
      surname: "Makkhar",
      designation: "Member of UNESCO & Winner of India’s Got Talent Season 5",
      description:
        "Dr. Ragini Makkhar, the winner of India's Got Talent Season 5 inspired the audience with her talk on ''Evolve with Dance,'' showcasing the transformative power of dance in personal growth and self-expression.",
      image: "https://imgur.com/n00f9ob.jpeg",
      instagramLink:
        "https://www.instagram.com/dr.raginimakkad?igsh=MXJlN245ZWh3N2phZw==",
      linkedinLink: "",
    },

    {
      name: "Bhaskar",
      surname: "Indrakanti",
      description:
        'Bhaskar Indrakanti delivered a thought-provoking talk on "Mental Awareness," raising awareness about mental health and emphasising the importance of de-stigmatization.',
      image: "https://imgur.com/K1pcQzu.jpeg",
      designation: "Entrepreneur & Social Engineer",
      instagramLink:
        "https://www.instagram.com/bhaskar_indrakanti?igsh=MWZjOG1iMzh0bDAzYw==",
      linkedinLink:
        "https://www.linkedin.com/in/bh%C4%81skar-indrakanti-424b6051?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Akshay",
      surname: "Singh",
      designation: "The youngest deputy collector of the MP government.",
      description:
        'Akshay Singh, shared his insights on "Social Rights," advocating for equal opportunities and social justice',
      image: "https://imgur.com/dLQqQ8B.png",
      instagramLink:
        "https://www.instagram.com/theakshay_jointcollector?igsh=MTF6NjZldWNqbWVqOQ==",
      linkedinLink:
        "https://www.linkedin.com/in/akshay-singh-markam-a70178204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Abhijit",
      surname: "Chavda",
      designation: "Geopolitics, History & Science Expert., Youtuber",
      description:
        'Abhijit Chavda delivered a compelling talk on "Geo Politics," shedding light on the dynamic interplay of politics and geography in shaping the global landscape',
      image: "https://imgur.com/LQcW3ZO.jpeg",
      instagramLink:
        "https://www.instagram.com/theabhijitchavda?igsh=aXRqMTV2cGljb3pi",
      linkedinLink:
        "https://www.linkedin.com/in/abhijitchavda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Dr. Vineet",
      surname: "Agrawal",
      designation: "Author, History and Mythology Expert",
      description:
        'Dr. Vineet Agrawal engaged the audience with his enlightening presentation on "Science and Scriptures," exploring the intersections between scientific advancements and ancient wisdom.',
      image: "https://imgur.com/GmbPB9w.jpeg",
      instagramLink:
        "https://www.instagram.com/drvineetaggarwal?igsh=MWV5bmxlejN4eXdjcA==",
      linkedinLink:
        "https://www.linkedin.com/in/drvineetaggarwal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Aryan",
      surname: "Vijayvergiya",
      designation:
        "Student at IIPS Founder at Mission Vasundhara & Satat Productions",
      description:
        "In his talk, Aryan discussed the power of positive thinking and its potential to drive the evolution of humanity as a whole.",
      image: "https://imgur.com/JZvsw1P.jpeg",
      instagramLink:
        "https://www.instagram.com/aryanvijayvergiya?igsh=MWJib2RhcG44dWhwcg==",
      linkedinLink:
        "https://www.linkedin.com/in/aryan-vijayvergiya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const SpeakerComponent = ({
    name,
    surname,
    description,
    designation,
    image,
    instagramLink,
    linkedinLink,
  }) => {
    // Refs for elements to animate
    const imgRef = useRef(null);
    const descRef = useRef(null);
    const nameRef = useRef(null);
    const desgRef = useRef(null);

    const [animationInitialized, setAnimationInitialized] = useState(false);

    useEffect(() => {
      if (!animationInitialized) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(imgRef.current, {
          yPercent: -80,
          duration: 1,
          scrollTrigger: {
            trigger: imgRef.current.closest(".o-slider__item"),
            scrub: 1,
            start: "top 40%",
            end: "top 90%",
          },
        });

        gsap.to(descRef.current, {
          xPercent: 170,
          duration: 1,
          scrollTrigger: {
            trigger: descRef.current.closest(".o-slider__item"),
            scrub: 1,
            start: "top 40%",
            end: "top 90%",
          },
        });

        gsap.to(nameRef.current, {
          xPercent: -190,
          duration: 1,
          scrollTrigger: {
            trigger: nameRef.current.closest(".o-slider__item"),
            scrub: 1,
            start: "top 30%",
            end: "top 90%",
          },
        });
        gsap.to(desgRef.current, {
          xPercent: 155,
          duration: 1,
          scrollTrigger: {
            trigger: nameRef.current.closest(".o-slider__item"),
            scrub: 1,
            start: "top 40%",
            end: "top 90%",
          },
        });

        // Set animationInitialized to true after initial animation setup
        setAnimationInitialized(true);
      }
    }, [animationInitialized]);
    const speakerNameClass = getSpeakerNameClass(name);

    return (
      <li className={`o-slider__item ${speakerNameClass}`}>
        <div className="speaker_img_container"><img loading="lazy" className="o-slider__img" src={image} alt="" ref={imgRef} /></div>
        <p className="slider__desc" ref={descRef}>
          {description}
        </p>
        <p className="speaker_desg" ref={desgRef}>
          {designation}
        </p>
        <p className={`speaker-name  `} ref={nameRef}>
          {name}
          <br /> <span className="sir">{surname} </span> <br />
          <span className="log">
            {instagramLink && (
              <a href={instagramLink}>
                <img loading="lazy" /*style={{ width: "35px" }}*/ src={instagram} alt="" />
              </a>
            )}
            &nbsp;
            {linkedinLink && (
              <a href={linkedinLink}>
                <img loading="lazy" /*style={{ width: "35px" }}*/ src={linkedin} alt="" />
              </a>
            )}
          </span>
        </p>
      </li>
    );
  };

  const SpeakerList = ({ selectedYear }) => {
    let speakers;

    if (selectedYear === "2023") {
      speakers = speakerData2023;
    } else if (selectedYear === "2024") {
      speakers = speakerData2024;
    }

    return (
      <ul className="o-slider__list">
        {speakers.map((speaker, index) => (
          <SpeakerComponent key={index} {...speaker} />
        ))}
      </ul>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const oSliderItems = document.querySelectorAll(".o-slider__item");
    const sliderContainer = document.querySelector(".o-slider");
    
    // Calculate total scroll distance
    const totalDistance = sliderContainer.offsetHeight - window.innerHeight;

    // Create a ScrollTrigger for the progress bar
    ScrollTrigger.create({
      trigger: sliderContainer,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = (self.progress * 100).toFixed(2);
        if (progressBarRef.current) {
          gsap.to(progressBarRef.current, {
            width: `${progress}%`,
            duration: 0.1,
            ease: "none"
          });
        }
      }
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selectedYear]);

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
    setIsInitialLoad(false);
    
    // Add setTimeout to ensure content is updated before scrolling
    setTimeout(() => {
      const offsetTop = sliderRef.current.offsetTop - window.innerHeight * 0.7;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }, 100); // 100ms delay should be sufficient
  };


  // console.log("Selected Year:", selectedYear);

  return (
    <div id="slider" className="o-slider" ref={sliderRef}>
    <div className="landing_2025_stars"></div>
      {/* <div className="badal1">
        <img loading="lazy" src={badal} className="badal" />
      </div>
      <div className="badal2">
        <img loading="lazy" src={badal2} className="badal" />
      </div> */}
      <h1
        className={`o-slider__title ${
          selectedYear === "2024" ? "o-slider__title-2024" : ""
        }`}
        style={{
          position: showTitle ? "fixed" : "block",
          transition: "opacity 0.5s ease",
        }}
      >
        <span id="title">Speakers </span>
      </h1>
      <select className="year-drop" onChange={handleChange}>
        <option className="option" value="2024" selected>
          2024
        </option>
        <option value="2023">2023</option>
      </select>

      <SpeakerList selectedYear={selectedYear} />
      <div className="progress-bar">
        <div ref={progressBarRef} className="progress"></div>
      </div>
    </div>
  );
};

export default SliderComponent;
const getSpeakerNameClass = (name) => {
  switch (name) {
    case "Aryan":
      return "Aryan-style";
    case "Akshay":
      return "akshay-style";

    case "Abhijit":
      return "Abhijit-style";
    case "Dr. Vineet":
      return "vineet-style";
    case "Ella D'":
      return "ella-style";
    case "Dr. Ragini":
      return "Ragini-style";
    case "REVEALING":
      return "Reveal-style";
    case "Abhishek":
      return "Abhishek";
    case "Ashu":
      return "Ashupc";
    case "Sri Pundrik":
      return "sripc";
    case "Ananad":
      return "Ananadpc";
    case "Abhishek ":
      return "abhishek23"
    case "Saanand":
      return "Saanandpc";
    case "Rahul":
      return "Rahulpc";
    case "Bhaskar":
    return "Bhaskar";
    default:
      return "";
  }
};
