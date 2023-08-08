import React from 'react';
import img from '../assets/images/port_auvy.png';
import CountUp from 'react-countup';


const Ui = () => {
    return (
        <div className=' pt-0 ' id='home'>
            <div className="container pt-14">
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>

                    <div className="w-full md:basis-1/2">
                        <h5 data-aos="fade-down" data-aos-duration="1500" className='text-headingColor font-[600] text-[16px]'>Hello,</h5>
                        <h1 data-aos="fade-up" data-aos-duration="1500" className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px]leading-[30px] sm:leading-[46px]'>I'm <span className='text-primaryColor'>Akib Al Mahmud Auvy</span><br />Frontend Developer</h1>
                        <div data-aos="fade-up" data-aos-duration="1900" data-aos-delay='200' className=' flex items-center gap-6 mt-7'>
                            <a href="#contact">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i class="ri-mail-fill"></i>Hire Me</button>
                            </a>
                            <a href="AkibAlMahmudAuvy_CV_2.4.pdf" download='AkibAlMahmudAuvy_CV_2.4.pdf' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>Download Resume</a>

                        </div>
                        <p data-aos="fade-left" data-aos-duration="1500" className='flex gap-2 text-headingColor font-[500] text-[15px] leading-7 mt-14 sm:pl-14 sm:pr-10'> <span><i class="ri-apps-2-fill"></i></span>A motivated graduate is eager to learn and gain experience.
                            Detail-oriented and passionate about strategic planning. Committed
                            to developing skills. Self-motivated. Open to constructive criticism.</p>
                        <div className='flex items-center gap-9 mt-14'>
                            <span className='text-smallTextColor text-[15px] font-[600]'>Follow Me:</span>
                            <span><a target='_blank' href="https://github.com/auvy09" className='text-smallTextColor text-[17px] font-[600]'><i class="ri-github-fill"></i></a></span>
                            <span><a target='_blank' href="https://www.linkedin.com/in/akibalmahmudauvy/" className='text-smallTextColor text-[17px] font-[600]'><i class="ri-linkedin-box-fill"></i></a></span>
                            <span><a target='_blank' href="https://www.facebook.com/akibal.mahmud" className='text-smallTextColor text-[17px] font-[600]'><i class="ri-facebook-box-fill"></i></a></span>
                        </div>
                    </div>
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={img} alt="" />
                        </figure>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Ui;