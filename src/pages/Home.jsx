import React, { useState } from 'react'
import Header from '../components/Header'
import { GiHamburgerMenu, GiCctvCamera } from "react-icons/gi";
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaPlane, FaToriiGate, FaCcDinersClub, FaHandHoldingWater, FaRunning, FaRegBuilding, FaRegSquare, FaBalanceScaleLeft, FaFacebook, FaYoutube, FaMoneyBill, FaBusinessTime } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { LuMapPinned } from "react-icons/lu";
import { PiBuildingApartment } from "react-icons/pi";
import { GrConfigure, GrCertificate } from "react-icons/gr";
import { LuHouse, LuLeafyGreen, LuHandshake } from "react-icons/lu";
import { SiAirbyte } from "react-icons/si";
import { MdOutlineSportsGymnastics, MdOutlineWifiProtectedSetup } from "react-icons/md";
import { FaSquareParking, FaLocationDot, FaBrain } from "react-icons/fa6";
import { IoMdHappy } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import { BsPinterest } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Model from '../components/Model';
import InquryModel from '../components/InquryModel';




let Home =()=>{

  let [ModelForm,SetModelForm]=useState(0);

  let ModelValues={ModelForm,SetModelForm}

  let [hamburgerMenu,SethamburgerMenu]=useState(0)

  let hamburgerMenuValues={hamburgerMenu,SethamburgerMenu}

  let [InquiryForm,SetInqquiryForm]=useState(0)
  let inquryformvalues={InquiryForm,SetInqquiryForm}
  


 

  AOS.init();


  return (
    <>
      <Header hamburgerMenuKeys={hamburgerMenuValues} inquryformKeys={inquryformvalues} ModelsKey={ModelValues}/>

      <Model ModelsKey={ModelValues} />

      <InquryModel inquryformKeys={inquryformvalues} />

      <section data-aos="fade-up" data-aos-delay="50"
        className="sectionAboutUs bg-white my-[150px] lg:px-[50px] px-4">
        <div className="container max-w-[1320px] m-auto flex justify-between items-center lg:flex-nowrap flex-wrap gap-[0px] lg:gap-[100px]">
          <div className="AboutusLeft">

            <span className='text-[16px] italic text-[--var(primary-font-primary)]'>Who we are
            </span>
            <h1 className='lg:text-[48px]  text-[36px] font-[600] font-[--var(primary-font-primary)] capitalize text-[#173e62]'>We develop quality <br></br>
              infrastructure and real estate<br></br>
              projects since 2010</h1>

          </div>
          <div className=" flex gap-10 lg:mt-[0px] mt-[100px]">

            <div className="counterDiv1 flex flex-col items-center justify-center text-center">
              <h1 className='lg:text-[100px] text-[50px] font-[400] [font-family:var(--primary-font-primary)] capitalize text-[var(--button-color-primary)] relative'>6 <span className='absolute top-[-71px] left-[28px]'>+</span></h1>
              <p className='lg:text-[24px] text-[12px]'>Completed Projects
              </p>
            </div>

            <div className="counterDiv2 flex flex-col items-center justify-center text-center">
              <h1 className='lg:text-[100px] text-[50px]  font-[400] [font-family:var(--primary-font-primary)] capitalize text-[var(--button-color-primary)] relative'>1,500<span className='absolute lg:top-[-73px] lg:left-[202px] left-[105px] top-[-45px]'>+</span></h1>
              <p className='lg:text-[24px] text-[12px]'>Living Happy Families

              </p>
            </div>

          </div>

        </div>


      </section>

      <section data-aos="fade-left" data-aos-delay="50"
        className="AboutUptown bg-white relative">
        <div className="flex justify-end items-center gap-10 m-auto flex-wrap">
          <div className="Aboutuptown-left basis-[70%] absolute left-0">
            <figure className='lg:max-w-[45%] lg:px-0 px-2'>
              <img src="https://uptownskylla.in/wp-content/uploads/2022/09/01-1-2048x1497.jpg" className='w-[100%] h-[100%] object-cover' alt="" />
            </figure>

          </div>
          <div className="Aboutuptown-right bg-[#f7f2ee] basis-[70%] lg:py-[100px] py-[40px] flex justify-end px-2 lg:px-0">
            <div className="AboutuptownMid flex flex-col pl-[clamp(300px,1vw,400px)] lg:pr-[100px]">
              <h1 className='text-[24px] font-[500] [font-family:var(--primary-font-primary)] uppercase lg:mb-[50px] text-[#173e62] mb-[20px]'>About Uptown Skylla -Zirakpur
              </h1>
              <p className='text-[18px] text-[#6d777f] font-[--var(secondary-font-primary)]'>Redefining the standards of elegant living with meticulously planned apartments or flats in Zirakpur that are crafted with sophisticated taste, Uptown Skylla Zirakpur has outdone its residential stature with impeccable premium Flats. Available in configurations of 2, 3, 3+S, 4+S BHK luxurious Flats and Pent houses in Zirakpur , these upscale homes are truly a dream come true for young couples and growing families. One of the many great features of the Uptown Skylla flats in Zirakpur is its enviable location and excellent connectivity to the rest of the city. The location have been strategically chosen to offer close proximity to modern lifestyle conveniences, ample green spaces as well as a picturesque view. Another perk of living in a Uptown Skylla apartments is that you will never run out of things to do.
                Poker oyununu tecrübelenmeden belli bir seviyeye gelmeden oynamanızı tavsiye etmem. Mostb</p>

              <p className='py-4 text-[18px] text-[#6d777f]'>From amenities such as landscaped gardens, swimming pool, gym, indoor games and clubhouse to advanced security systems and promoting community living, make the perfect choice to buy an apartment in Zirakpur at Uptown Skylla luxury flats. Each apartment has been carefully designed to maximize the utilization of space, along with the use of best in choice fittings, tiles and other specifications. This attention to detail promises an ultra luxurious life for all members of the family.

              </p>
              <span>UPTOWN SKYLLA Rera No: PBRERA-SAS79-PR0546

              </span>
              <button className='bg-[#0077b9] px-[30px] py-[15px] max-w-[200px] text-white capitalize my-3 cursor-pointer' onClick={()=>SetInqquiryForm(1)}>enquiry Now</button>
            </div>
          </div>

        </div>

      </section>

      <section data-aos="fade-in" data-aos-delay="50"
        className="quickFacts bg-[white] lg:px-[50px]">
        <div className="quiclfactsMid max-w-[1320px]  mx-auto text-center py-[50px]">
          <h1 className='text-[36px] text-[#173e62] font-bold [font-family:var(--primary-font-primary)]'>Fun Facts</h1>
          <div className="grid lg:grid-cols-4 gap-1 my-[60px] grid-cols-1">
            <div className="gridItem px-6 py-[80px] bg-[#f7f2ee] flex flex-col items-center justify-center">
              <LuMapPinned className='text-[32px] text-black' />


              <h4 className='text-[32px] text-[#173e62] [font-family:var(--primary-font-primary)]'>Total Land Area

              </h4>
              <p className='text-[28px] [color:var(--button-color-primary)]'>8.5
              </p>


            </div>
            <div className="gridItem px-6 py-[80px] bg-[white] [font-family:var(--primary-font-primary)] flex flex-col items-center justify-center">
              <PiBuildingApartment className='text-[32px] text-black' />


              <h4 className='text-[32px] [font-family:var(--primary-font-primary)]'>Number of Apartments

              </h4>
              <p className='text-[28px] [color:var(--button-color-primary)]'>383

              </p>

            </div>
            <div className="gridItem px-6 py-[80px] bg-[#f7f2ee] [font-family:var(--primary-font-primary)] flex flex-col items-center justify-center">
              <GrConfigure className='text-[32px] text-black' />

              <h4 className='text-[32px] '>Configuration

              </h4>
              <p className='text-[28px] [color:var(--button-color-primary)]'>S+
                13
              </p>

            </div>
            <div className="gridItem px-6 py-[80px] bg-[white] [font-family:var(--primary-font-primary)] flex flex-col items-center justify-center">
              <LuHouse className='text-[32px] text-black' />

              <h4 className='text-[32px] text-black'>Ready to Move

              </h4>
              <p className='text-[28px] [color:var(--button-color-primary)]'>2,024

              </p>

            </div>

          </div>
        </div>
      </section>

      <section data-aos="fade-right" data-aos-delay="50"
        className="ourOffer bg-white py-[50px] lg:px-0 px-4">
        <div className="max-w-[1320px] mx-auto ourOfferMid">
          <div className="headingBlock flex justify-between mb-6">
            <h1 className='text-[28px] [font-family:var(--primary-font-primary)]'>Our Offering
            </h1>
            <button className='bg-[transparent] px-[30px] py-[15px] border-b border-[black] cursor-pointer'>LUXURY 2/3/4 BHK FLATS IN ZIRAKPUR</button>
          </div>

          <div className="grid lg:grid-cols-3 gap-y-10 grid-cols-1 md:grid-cols-2">
            <div className="griditems relative">


              <div class=" bg-white border border-gray-200 shadow-lg">
                <a href="#">
                  <img src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-06-700x479.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#173e62] [font-family:var(--primary-font-primary)]">2 BHK Flats</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 [font-family:var(--secondary-font-primary)]">Airport Road Zirakpur
                  </p>

                  <div className="DivPart1">
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Status</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>Ready to Move In - Few Units Left !

                    </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Area
                    </span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>1220 Sq ft



                      </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Type</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>2 BHK Luxury Apartment



                    </span></li>
                  </div>

                </div>
                <span className='absolute top-0 right-[0px]'><img src="https://uptownskylla.in/wp-content/uploads/2024/03/sold-out-png-14.png" alt="" /></span>
              </div>

            </div>
            <div className="griditems">


              <div class=" bg-white border border-gray-200 shadow-lg">
                <a href="#">
                  <img src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-08-700x479.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#173e62] [font-family:var(--primary-font-primary)]">2 BHK Flats</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 [font-family:var(--secondary-font-primary)]">Airport Road Zirakpur
                  </p>

                  <div className="DivPart1">
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Status</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>Ready to Move In - Few Units Left !

                    </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Area
                    </span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>1220 Sq ft



                      </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Type</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>2 BHK Luxury Apartment



                    </span></li>
                  </div>

                </div>
              </div>

            </div>
            <div className="griditems">


              <div class=" bg-white border border-gray-200 shadow-lg">
                <a href="#">
                  <img src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-10-700x479.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#173e62] [font-family:var(--primary-font-primary)]">2 BHK Flats</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 [font-family:var(--secondary-font-primary)]">Airport Road Zirakpur
                  </p>

                  <div className="DivPart1">
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Status</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>Ready to Move In - Few Units Left !

                    </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Area
                    </span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>1220 Sq ft



                      </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Type</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>2 BHK Luxury Apartment



                    </span></li>
                  </div>

                </div>
              </div>

            </div>
            <div className="griditems relative">


              <div class=" bg-white border border-gray-200 shadow-lg ">
                <a href="#">
                  <img src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-05-700x479.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#173e62] [font-family:var(--primary-font-primary)]">2 BHK Flats</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 [font-family:var(--secondary-font-primary)]">Airport Road Zirakpur
                  </p>

                  <div className="DivPart1">
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Status</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>Ready to Move In - Few Units Left !

                    </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Area
                    </span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>1220 Sq ft



                      </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Type</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>2 BHK Luxury Apartment



                    </span></li>
                  </div>

                  <span className='absolute top-0 right-[0px]'><img src="https://uptownskylla.in/wp-content/uploads/2024/03/sold-out-png-14.png" alt="" /></span>

                </div>
              </div>

            </div>
            <div className="griditems">


              <div class=" bg-white border border-gray-200 shadow-lg">
                <a href="#">
                  <img src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-05-700x479.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#173e62] [font-family:var(--primary-font-primary)]">2 BHK Flats</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 [font-family:var(--secondary-font-primary)]">Airport Road Zirakpur
                  </p>

                  <div className="DivPart1">
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Status</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>Ready to Move In - Few Units Left !

                    </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Area
                    </span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>1220 Sq ft



                      </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Type</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>2 BHK Luxury Apartment



                    </span></li>
                  </div>

                </div>

              </div>
            </div>
            <div className="griditems">


              <div class=" bg-white border border-gray-200 shadow-lg ">
                <a href="#">
                  <img src="https://uptownskylla.in/wp-content/uploads/2019/10/05-Contener-No-3rd-08-768x526.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#173e62] [font-family:var(--primary-font-primary)]">2 BHK Flats</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 [font-family:var(--secondary-font-primary)]">Airport Road Zirakpur
                  </p>

                  <div className="DivPart1">
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Status</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>Ready to Move In - Few Units Left !

                    </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Area
                    </span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>1220 Sq ft



                      </span></li>
                    <li className='flex justify-between'><span className='text-black [font-family:var(--secondary-font-primary)]'>Type</span> <span className='[color:var(--secondary-color-text)] [font-family:var(--secondary-font-primary)]'>2 BHK Luxury Apartment



                    </span></li>
                  </div>

                </div>

              </div>



            </div>
          </div>
        </div>
      </section>

      <section  data-aos="slide-left" data-aos-delay="50" className="projectHighlight bg-[#f7f2ec] py-[50px]">
        <div className="projectHightlightMid max-w-[1320px] mx-auto">
          <h1 className='text-[48px] [font-family:var(--primary-font-primary)] text-center [color:var(--accent-color)]'>Project Highlights
          </h1>
          <div className="projectHighlightItem grid lg:grid-cols-5 sm:grid-cols-2 lg:px-0 px-4 gap-y-[100px] my-[60px]">
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <FaPlane className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>LOCATED ON AIRPORT ROAD

              </h1>

            </div>
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <FaToriiGate
                className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>GATED TOWNSHIP



              </h1>

            </div>
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <GiCctvCamera
                className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>Surveillance System



              </h1>

            </div>
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <FaCcDinersClub
                className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>LAVISH CLUB HOUSE



              </h1>

            </div>
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <SiAirbyte
                className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>OPEN AIR THEATRE



              </h1>

            </div>
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <LuLeafyGreen
                className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>AMPLE GREEN ZONES



              </h1>

            </div>
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <MdOutlineSportsGymnastics
                className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>Children's play area



              </h1>

            </div>
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <FaHandHoldingWater
                className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>WATER BODIES & FOUNTAINS



              </h1>

            </div>
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <FaRunning
                className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>JOGGING TRACK



              </h1>

            </div>
            <div className="projectHighlightitems flex justify-center items-center flex-col gap-6">
              <FaSquareParking
                className='[color:var(--button-color-primary)] text-[70px]' />
              <h1 className='text-[16px] text-black capitalize'>SEPARATE GUEST PARKING





              </h1>

            </div>





          </div>
        </div>
      </section>

      <section data-aos="fade-in" data-aos-delay="50" className="walkThrough bg-[url(https://uptownskylla.in/wp-content/uploads/2019/10/bg1-h1.jpg)] bg-bg-center bg-bg-cover bg-no-bg-repeat text-white">

        <div className="walkthroughMid flex lg:flex-nowrap flex-wrap sm:gap-y-4 lg:gap-y-0 lg:px-0 px-4">
          <div className="walkthroughLeft flex lg:basis-[60%] items-start flex-col justify-center lg:px-[70px] px-4 lg:py-0 py-4 basis-[100%]">
            <span className='[font-family:var(--primary-font-primary)]'>Walk-Through
            </span>
            <h1 className='text-[36px] [font-family:var(--primary-font-primary)] mb-5'>An Impression <br></br>
              of True Opulence!

            </h1>

            <h4 className='[font-family:var(--primary-font-primary)] text-[18px] mb-3'>Best Flats in Zirakpur - Uptown Skylla
            </h4>
            <p className='[font-family:var(--secondary-font-primary)] text-[14px] mb-5 [color:var(--secondary-color-text)]'>Reckoned as the most sought after 2, 3, 3+S & 4+S BHK Luxury Apartments in Zirakpur and appointed with higher-end features, strategic location on PR-7, Chandigarh International Airport Road, Mohali, and distinct architecture. Uptown Skylla residences are slowly gaining landmark status in their respective neighborhoods, providing you with a host of lifestyle privileges that elevate your quality of life in Chandigarh Capital region Zirakpur.
            </p>
            <div className='border-b-2 w-[70px] '></div>
          </div>
          <div className="walkthroughRight grow-1">
            <video loop autoPlay muted>
              <source src='https://uptownskylla.in/wp-content/uploads/2022/11/04-Video.mp4' type="video/mp4" />
            </video>
          </div>

        </div>
      </section>


      <section data-aos="zoom-in" data-aos-delay="50" className="perfectGoal bg-white my-[70px]">
        <div className="perfectGoalMid max-w-[1120px] mx-auto">
          <h1 className='text-[48px] text-[#173e62] text-center [font-family:var(--primary-font-primary)]'>We are a Goal Oriented Organization
          </h1>
          <p className='[font-family:var(--secondary-font-primary)] py-[30px] lg:px-0 px-4'>We aspire to be the preferred choice for our customers and it fuels our efforts to overcome the innate challenges & strive to bring about innovation in product offerings, superior product design, styling and quality. Our promise on Value for money and On time delivery are a few more reasons to buy with us.
          </p>
          <div className="perfectGoalgriditems grid lg:grid-cols-4 grid-cols-1">
            <div className="perfectGoalgriditem flex justify-center items-center flex-col gap-4">
              <FaBalanceScaleLeft className='text-[36px] [color:var(--button-color-primary)]' />
              <h1 className='[font-family:var(--secondary-font-primary)] [color:var(--accent-color)] capitalize text-center'>Integrity and
                fairness
              </h1>
            </div>
            <div className="perfectGoalgriditem flex justify-center items-center flex-col gap-4">
              <LuHandshake className='text-[36px] [color:var(--button-color-primary)]' />
              <h1 className='[font-family:var(--secondary-font-primary)] [color:var(--accent-color)] capitalize text-center'>Mutual
                Respect
              </h1>
            </div>
            <div className="perfectGoalgriditem flex justify-center items-center flex-col gap-4">
              <MdOutlineWifiProtectedSetup className='text-[36px] [color:var(--button-color-primary)]' />
              <h1 className='[font-family:var(--secondary-font-primary)] [color:var(--accent-color)] capitalize text-center'>Transparency <br></br>and
                trustworthiness

              </h1>
            </div>
            <div className="perfectGoalgriditem flex justify-center items-center flex-col gap-4">
              <GoChecklist
                className='text-[36px] [color:var(--button-color-primary)]' />
              <h1 className='[font-family:var(--secondary-font-primary)] [color:var(--accent-color)] capitalize text-center'>Commitment to all<br></br>
                stakeholders

              </h1>
            </div>
          </div>
        </div>

      </section>

      <section data-aos="fade" data-aos-delay="50" className="secessStroy bg-white relative my-[70px] lg:my-[0px]">
        <div className="flex justify-end items-center gap-10 m-auto flex-wrap">
          <div className="Aboutuptown-left basis-[70%] absolute left-0">
            <figure className='lg:max-w-[45%] lg:px-0 px-2'>
              <img src="https://uptownskylla.in/wp-content/uploads/2022/09/01-1-2048x1497.jpg" className='w-[100%] h-[100%] object-cover' alt="" />
            </figure>

          </div>
          <div className="Aboutuptown-right bg-[#f7f2ee] basis-[70%] lg:py-[100px] py-[40px] flex justify-end px-2 lg:px-0">
            <div className="AboutuptownMid flex flex-col pl-[clamp(300px,1vw,400px)] lg:pr-[100px]">
              <h1 className='text-[24px] font-[500] [font-family:var(--primary-font-primary)] uppercase lg:mb-[50px] text-[#173e62] mb-[20px]'>Our Success Story
              </h1>
              <p className='text-[18px] text-[#6d777f] [font-family:var(--secondary-font-primary)]'>Artique Infratech is shaped by a team of professionals with diverse qualifications and over 15 years of proven track record of developing and completing residential & commercial projects strategically across Zirakpur’s property hotspots. We deliver exceptional design which is highlighted by strong partnership that we share with leading contemporary architects, engineers and interior designers.

              </p>

              <p className='py-4 text-[18px] text-[#6d777f]  [font-family:var(--secondary-font-primary)]'>Artique Infratech’s hallmark is architecturally stunning buildings that deliver a new standard in contemporary living. La Prisma, The Eminence, Hollywood Heights I (HH 1), Hollywood Heights II (HH 2), Savitry Heights II, Cherry Hill, etc. are some of our key projects that are catering to more than 900 happy and satisfied families.



              </p>
              <div className="Divcards grid lg:grid-cols-3 grid-cols-1 mt-7">
                <div className="Divcard flex justify-center items-center flex-col text-center">
                  <FaRegBuilding
                    className='text-[48px]' />
                  <h5 className='text-[16px] [font-family:var(--primary-font-primary)] mt-4'>15.5+</h5>
                  <h1 className='text-[18px] [font-family:var(--primary-font-primary)] text-[#173e62]'>Lakh Square Feet<br></br>
                    Already Constructed
                  </h1>


                </div>
                <div className="Divcard flex justify-center items-center flex-col text-center">
                  <IoMdHappy
                    className='text-[48px]' />
                  <h5 className='text-[16px] [font-family:var(--primary-font-primary)] mt-4'>15.5+</h5>
                  <h1 className='text-[18px] [font-family:var(--primary-font-primary)] text-[#173e62]'>Lakh Square Feet<br></br>
                    Already Constructed
                  </h1>


                </div>
                <div className="Divcard flex justify-center items-center flex-col text-center">
                  <FaRegSquare
                    className='text-[48px]' />
                  <h5 className='text-[16px] [font-family:var(--primary-font-primary)] mt-4'>15.5+</h5>
                  <h1 className='text-[18px] [font-family:var(--primary-font-primary)] text-[#173e62]'>Lakh Square Feet<br></br>
                    Already Constructed
                  </h1>


                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      <div className="OurCompetition my-[70px]" data-aos="fade-in" data-aos-delay="50">
        <div className="ourcompetitionMid max-w-[1320px] mx-auto">

          <div className="ourcompetitionItems grid lg:grid-cols-3 grid-cols-1">
            <div className="ourcompetitionItem border-r-1 border-[#BDA588]">

              <h1 className='[font-family:var(--primary-font-primary)] text-[48px] font-[500] text-center'>Our
                Competitive
                Advantages</h1>

            </div>
            <div className="ourcompetitionItem grid lg:grid-cols-2 grid-cols-1 gap-6 border-r-1 border-[#BDA588] pl-5 ">
              <div className="ourcompetitionItemOne flex justify-start items-center flex-col text-center gap-3 ">
                <FaBrain className='text-[48px] [color:var(--button-color-primary)]' />
                <h1 className='[font-family:var(--secondary-font-primary)]'>innovation in product offerings</h1>
              </div>
              <div className="ourcompetitionItemTwo flex justify-start items-center flex-col text-center gap-3">
                <FaMoneyBill className='text-[48px] [color:var(--button-color-primary)]' />
                <h1 className='[font-family:var(--secondary-font-primary)]'>Value for Money</h1>
              </div>
              <div className="ourcompetitionItemThree flex justify-start items-center  text-center flex-col gap-3">
                <GrCertificate className='text-[48px] [color:var(--button-color-primary)]' />
                <h1 className='[font-family:var(--secondary-font-primary)]'>Superior product design, styling and quality</h1>
              </div>
              <div className="ourcompetitionItemFour flex justify-start items-center flex-col text-center gap-3">
                <FaBusinessTime className='text-[48px] [color:var(--button-color-primary)]' />
                <h1 className='[font-family:var(--secondary-font-primary)]'>On-time delivery
                </h1>
              </div>
            </div>
            <div className="slider ">
              <div className="slider1 px-5 pb-4">
                <div className="firstPart flex justify-between">
                  <h1>6 PROJECT DELIVERED ONTIME
                  </h1>
                  <p>100%</p>

                </div>
                <div className="outpart bg-black max-w-[400px] h-[20px] ">
                  <div className="slidedy h-[20px] bg-[#28a745] w-[100%] animate-[wiggle_1s_ease-in-out]">

                  </div>

                </div>
              </div>
              <div className="slider2 px-5">
                <div className="secondPart flex justify-between">
                  <h1>NEARING COMPLETION 1

                  </h1>
                  <p>80%</p>

                </div>
                <div className="outpart bg-black max-w-[400px] h-[20px] ">
                  <div className="slidedy h-[20px] bg-[#17a2b8] w-[80%] animate-[wiggle_1s_ease-in-out]">

                  </div>

                </div>
              </div>
              <div className="Toprating flex justify-between px-5 pt-5">
                <h1 className='text-[24px]'>TOP RATING</h1>
                <p className='text-[24px]'>4.8 / 5
                </p>
              </div>
            </div>

          </div>





        </div>
      </div>

     <div className='text-center my-4'><button onClick={()=>SetModelForm(1)} className='[background:var(--accent-color)] cursor-pointer px-[60px] py-4 mx-auto text-white rounded-[50px]'>Download Brochure</button></div> 

      <footer className='bg-[url(https://uptownskylla.in/wp-content/uploads/2019/10/footer-01.jpg)] bg-cover bg-bg-no-repeat bg-bg-center'>
        <div className="footerMid max-w-[1320px] mx-auto pt-[50px]">
          <h1 className='text-white text-[36px] [font-family:var(--primary-font-primary)]'>Get in touch
          </h1>
          <div className="footerItems grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:px-0 px-3">
            <div className="footerItem flex items-start justify-center flex-col [font-family:var(--secondary-font-primary)] gap-4">
              <h2 className='text-white uppercase'>phone</h2>
              <span className='text-white'><a href="tel:+917009247378">+91 70092 47378</a></span>
              <p className='text-white'>PR-7, Chandigarh International Airport Road,<br></br>
                Zirakpur, Mohali,Punjab 140603 </p>
            </div>
            <div className="footerItem items-start justify-center [font-family:var(--secondary-font-primary)] flex gap-4 flex-col">

              <h2 className='text-white uppercase'>email</h2>
              <span className='text-white'><a href="emailto:info@uptownskylla.in"> info@uptownskylla.in</a></span>

              <div className="socialIcons">
                <h2 className='text-white'>FOLLOW US​</h2>
                <ul className='flex justify-center items-center flex-column gap-2 mt-[30px]'>
                  <li><FaFacebook className='text-white text-[32px]' /></li>
                  <li><FaTwitter className='text-white text-[32px]' />
                  </li>

                  <li><AiFillInstagram className='text-white text-[32px]' />
                  </li>

                  <li><BsPinterest className='text-white text-[32px]' />
                  </li>

                  <li><FaYoutube className='text-white text-[32px]' />
                  </li>

                </ul>
              </div>

            </div>
            <div className="footerItem flex-col items-start justify-start  text-white flex ">
              <h2>RERA NO:</h2>
              <p className='flex-col gap-4 text-[14px]'>PBRERA-SAS79-PR0546</p>
              <p>A project by : ARTIQUE INFRATECH
              </p>
            </div>

          </div>

          <div className='border-t-1 w-[100%] border-[#838181] my-[100px]'></div>

          <div className="footerItems grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:px-0 px-3">
            <div className="footerItem flex pr-[70px] items-start justify-start flex-col  gap-4 [font-family:var(--secondary-font-primary)]">
              <h2 className='text-[#bda588] text-[20px] uppercase'>about us
              </h2>

              <p className='text-white text-[14px]'>Uptown Skylla™️ offering Luxury 2/3/4 BHK Possession Ready Fats in Zirakpur with an Ultra Luxury Amenities & 5 Star Rated Club House.#1 Construction Quality.IGBC Gold Pre Certified Project.Possession Aug-23. Know More …

              </p>
            </div>
            <div className="footerItem items-start justify-start [font-family:var(--secondary-font-primary)] flex gap-4 flex-col">

              <h2 className='text-[#bda588] text-[20px] uppercase'>Useful Links
              </h2>

              <div className="listItems flex text-white gap-4">
                <ul clasName="flex flex-col">
                  <li className='text-[14px]'>Home</li>
                  <li className='text-[14px]'>Gallery</li>
                  <li className='text-[14px]'>Club Skylla</li>
                  <li className='text-[14px]'>gallery</li>


                </ul>
                <ul clasName="flex flex-col ">
                  <li className='text-[14px]'>Why Choose Us</li>
                  <li className='text-[14px]'>Site Plan</li>
                  <li className='text-[14px]'>Price List</li>



                </ul>
              </div>
            </div>

            <div className="footerItem items-start justify-start  text-white flex flex-col gap-4 [font-family:var(--secondary-font-primary)]">
              <h2 className='text-[#bda588] text-[20px] uppercase'>Floor Plan</h2>
              <ul className='text-[14px]'>
                <li>1 BHK Apartment</li>
                <li>2 BHK Flat</li>
                <li>3 BHK Luxury Apartment</li>
                <li>4 BHK Villa</li>
                <li>5 BHK Penthouse</li>
                <li>6 BHK Duplex House</li>
              </ul>
            </div>

            <div className="footerItem items-start justify-start  text-white flex flex-col gap-4 [font-family:var(--secondary-font-primary)]">
              <h2 className='text-[#bda588] text-[20px] uppercase'>Contact Us </h2>
              <ul class="list-none flex flex-col gap-3 [font-family:var(--secondary-font-primary)]">
                <li className='flex gap-1'><FaLocationDot className='text-white' /><a href="#" className='text-[14px] '>PR-7,Chandigarh International Airport Road, Zirakpur, Punjab 140603</a></li>
                <li className='flex gap-1'><IoCall /><a href="#" className='text-[14px]'>+91-1234567890</a></li>
                <li className='flex gap-1'><MdEmail /><a href="#" className='text-[14px]' >info@uptownskylla.in</a></li>
              </ul>
            </div>

          </div>
        </div>
        <div className="footerEnd text-center text-[14px] text-white [font-family:var(--secondary-font-primary)] p-[60px_0px_20px_0px]">
          Privacy Policy | Terms & Conditions |  Copyright © 2022 UPTOWNSKYLLA. All Right Reserved
        </div>


      </footer >



    </>
  )
}

export default Home