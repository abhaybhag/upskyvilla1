import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { LuMapPinned } from "react-icons/lu";
import { PiBuildingApartment } from "react-icons/pi";
import { GrConfigure } from "react-icons/gr";
import { LuHouse } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";














let Header = ({ hamburgerMenuKeys }) => {
    let { hamburgerMenu, SethamburgerMenu } = hamburgerMenuKeys
    console.log(hamburgerMenu)

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <>

            <section className="heroPage">

                <header className='w-[100%] lg:bg-[transparent] [background:var(--accent-color)] lg:py-0 py-4 mx-[auto!important] absolute top-0 left-0 z-[9999]'>
                    <nav className='flex justify-between items-center px-[10px!important] relative container max-w-[1320px] m-[auto!important]'>
                        <div className="navLeft">
                            <div className="imaLogo max-w-[100px]">
                                <img src="https://uptownskylla.in/wp-content/uploads/2022/09/cropped-Logo-White-1-1.png" className='w-[100%]' alt="" />
                            </div>

                        </div>
                        <GiHamburgerMenu className='lg:hidden block text-white text-[24px] z-[9999] cursor-pointer' onClick={() => SethamburgerMenu(hamburgerMenu == 1 ? 0 : 1)}  />

                        <div className="navRight DesktopVersion px-4 hidden lg:block">
                            <ul className='flex gap-4'>
                                <li><a href="#" className='text-white text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Home</a></li>
                                <li><a href="#" className='text-white text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Location</a></li>
                                <li><a href="#" className='text-white text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Site Plan</a></li>
                                <li><a href="#" className='text-white text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Floor Plan</a></li>
                                <li><a href="#" className='text-white text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Club Skylla</a></li>
                                <li><a href="#" className='text-white text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Price List</a></li>
                                <li><a href="#" className='text-white text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Gallery</a></li>
                                <li><a href="#" className='text-white text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Compliances</a></li>
                                <li><a href="#" className='text-white text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Contact us</a></li>
                            </ul>
                        </div>
                        <div className={`MobileVersion duration-75  flex  flex-col bg-white lg:hidden w-[60%] h-[70vh] fixed  top-0 left-[${hamburgerMenu == 1 ? "0" : "-1000px"}]`}>

                            <ul className='flex gap-4 flex-col p-5'>
                                <li><a href="#" className='text-black text-[18px] font-[500] [font-family:var(--primary-font-primary)] '>Home</a></li>
                                <li><a href="#" className='text-black text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Location</a></li>
                                <li><a href="#" className='text-black text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Site Plan</a></li>
                                <li><a href="#" className='text-black text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Floor Plan</a></li>
                                <li><a href="#" className='text-black  text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Club Skylla</a></li>
                                <li><a href="#" className='text-black text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Price List</a></li>
                                <li><a href="#" className='text-black text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Gallery</a></li>
                                <li><a href="#" className='text-black text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Compliances</a></li>
                                <li><a href="#" className='text-black text-[18px] font-[500] [font-family:var(--primary-font-primary)]'>Contact us</a></li>
                                <span className='absolute right-[10px] top-[20px] cursor-pointer' onClick={() => SethamburgerMenu(0)}><RxCross1 />
                                </span>

                            </ul>

                        </div>
                    </nav>

                </header>

                <div className="socialIocnsdesign absolute left-5 top-[30%] z-[9999] hidden sm:block">
                    <div className='h-[300px] w-[1px] text-white p-2 border-l-1 ml-2 mb-2'></div>
                    <span><ImFacebook className='text-white text-[16px] mb-2' />
                    </span>
                    <span><FaTwitter className='text-white text-[16px] mb-2' />
                    </span>
                    <span>

                        <AiFillInstagram className='text-white text-[16px]' />

                    </span>
                </div>
                {/* fixed iconslist */}

                <div class="lefticonsList inline-grid right-0 top-[50%] translate-y-[-50%] z-[9999] fixed">
                    <div class="iconslistitem w-[50px] h-[50px] m-[10px_10px] relative cursor-pointer flex items-center">
                        <img src="https://smartcitymohaliplots.realtynivesh.com/img/enquiry.png" alt="" className='w-[100%] h-[100%] transiton-transform duration-500 ease transform-[rotate(0deg)]' />
                        <div className="innerDiv h-[30px] bg-[white] absolute right-[45px] top-[10px] scale-0 transition-transform duration-500 ease-in-out origin-right p-[10px_10px] w-[200px] text-center text-black rounded-[10px] flex items-center justify-center capitalize " >Book an site visit</div>
                    </div>
                    <div class="iconslistitem iconslistitem w-[50px] h-[50px] m-[10px_10px] relative cursor-pointer flex items-center">
                        <img src="https://smartcitymohaliplots.realtynivesh.com/img/whatapp.png" alt="" className='w-[100%] h-[100%] transiton-transform duration-500 ease transform-[rotate(0deg)]' />
                        <div className="innerDiv h-[30px] bg-[white] absolute right-[45px] top-[10px] scale-0 transition-transform duration-500 ease-in-out origin-right p-[10px_10px] w-[200px] text-center text-black rounded-[10px] flex items-center justify-center  capitalize">Watsapp</div>
                    </div>
                    <div class="iconslistitem iconslistitem w-[50px] h-[50px] m-[10px_10px] relative cursor-pointer flex items-center">
                        <img src="https://smartcitymohaliplots.realtynivesh.com/img/Walkthrough.png" className='w-[100%] h-[100%] transiton-transform duration-500 ease transform-[rotate(0deg)]' alt="" />
                        <div className="innerDiv innerDiv h-[30px] bg-[white] absolute right-[45px] top-[10px] scale-0 transition-transform duration-500 ease-in-out origin-right p-[10px_10px] w-[200px] text-center text-black rounded-[10px] flex items-center justify-center  capitalize">walkthrough</div>
                    </div>
                    <div className="iconslistitem iconslistitem w-[50px] h-[50px] m-[10px_10px] relative cursor-pointer flex items-center">
                        <img src="https://smartcitymohaliplots.realtynivesh.com/img/Call.png" className='w-[100%] h-[100%] transiton-transform duration-500 ease transform-[rotate(0deg)]' alt="" />

                        <div className="innerDiv h-[30px] bg-[white] absolute right-[45px] top-[10px] scale-0 transition-transform duration-500 ease-in-out origin-right p-[10px_10px] w-[200px] text-center text-black rounded-[10px] flex items-center justify-center  capitalize">Price List</div>
                    </div>

                    <div className="iconslistitem w-[50px] h-[50px] m-[10px_10px] relative cursor-pointer flex items-center">
                        <img src="https://smartcitymohaliplots.realtynivesh.com/img/Download.png" className='w-[100%] h-[100%] transiton-transform duration-500 ease transform-[rotate(0deg)]' alt="" />

                        <div className="innerDiv h-[30px] bg-[white] absolute right-[45px] top-[10px] scale-0 transition-transform duration-500 ease-in-out origin-right p-[10px_10px] w-[200px] text-center text-black rounded-[10px] flex items-center justify-center  capitalize">call</div>



                    </div>
                </div>

                <Slider {...settings}>
                    <div className='h-[100vh] w-100 relative'>
                        <img className='h-[100vh] w-[100%] object-cover' src="https://uptownskylla.in/wp-content/uploads/2022/09/03_01-scaled.jpg" alt="" />
                        <div className="fluid-container">
                            <div className="container max-w-[1320px] m-[auto!important] absolute z-[9999] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-left lg:px-[50px] pt-[100px] px-[70px]">
                                <p className='text-[14px] text-white font-bold'>A project by: ARTIQUE INFRATECH</p>
                                <h1 className='text-white lg:text-[64px] text-[32px] [font-family:var(--primary-font-primary)] font-bold lg:pb-[60px!important] pb-[30px!important]'>Perfect View from <br></br>
                                    Every Angle</h1>

                                <div className="buttonGroup flex gap-4">
                                    <button className='bg-[var(--button-color-primary)] px-[40px!important] py-[10px!important] text-white lg:text-[16px] text-[10px]'>
                                        Enquire Now
                                    </button>
                                    <button className='bg-[var(--button-color-primary)] px-[40px!important] py-[10px!important] text-white lg:text-[16px] text-[10px]'>
                                        Enquire Now
                                    </button>

                                </div>
                                <p className='text-lg text-white py-[50px] font-bold'>UPTOWN SKYLLA (PBRERA-SAS79-PR0546)</p>


                            </div>
                        </div>
                    </div>
                    <div className='h-[100vh] w-100 relative'>
                        <img className='h-[100vh] w-[100%] object-cover' src="https://uptownskylla.in/wp-content/uploads/2022/09/01_01-scaled.jpg" alt="" />
                        <div className="fluid-container">
                            <div className="container max-w-[1320px] m-[auto!important] absolute z-[9999] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-left lg:px-[50px] pt-[100px] px-[70px]">
                                <p className='text-[14px] text-white font-bold'>A project by: ARTIQUE INFRATECH</p>
                                <h1 className='text-white lg:text-[64px] [font-family:var(--primary-font-primary)] text-[32px] font-bold lg:pb-[60px!important] pb-[30px!important]'>Perfect View from <br></br>
                                    Every Angle</h1>

                                <div className="buttonGroup flex gap-4">
                                    <button className='bg-[var(--button-color-primary)] px-[40px!important] py-[10px!important] text-white lg:text-[16px] text-[10px]'>
                                        Enquire Now
                                    </button>
                                    <button className='bg-[var(--button-color-primary)] px-[40px!important] py-[10px!important] text-white lg:text-[16px] text-[10px]'>
                                        Enquire Now
                                    </button>

                                </div>
                                <p className='text-lg text-white py-[50px] font-bold'>UPTOWN SKYLLA (PBRERA-SAS79-PR0546)</p>


                            </div>
                        </div>

                    </div>

                </Slider>


            </section>


        </>
    )
}

export default Header


