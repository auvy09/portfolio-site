import React from 'react';
import uni from '../assets/images/uni (1).png';
import college from '../assets/images/uni (2).png';
import school from '../assets/images/uni (3).png';

const Qualification = () => {
    return (
        <section id='qualification'>
            <div className="container lg:pt-5">
                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>


                            {/*  */}
                            <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2 '></div>

                            {/*left  */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos='fade-right' data-aos-duration='1250' className=' p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600]
                                                text-xl'>BRAC UNIVERSITY</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:font-[500] leading-7 '>Bachelor of Science <br /><small>Computer Science and Engineering, </small> <br />
                                                    <small>CGPA-3.09</small><br />
                                                    <small>Completed in 2023
                                                    </small> </p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className=" rounded bg-primaryColor  w-10 h-10 absolute left-1/2 transfrom -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={uni} alt="" />
                                        </figure>
                                    </div>
                                </div>

                            </div>

                            {/* right */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1350' className=' p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600]
                                                text-xl'>DHAKA COLLEGE</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:font-[500] leading-7 '>HSC<br /><small> Science,GPA-4.67 </small> <br />

                                                    <small>Completed in 2017
                                                    </small></p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className=" rounded bg-primaryColor  w-10 h-10 absolute left-1/2 transfrom -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={college} alt="" />
                                        </figure>
                                    </div>
                                </div>

                            </div>
                            {/*left  */}
                            <div className='mt-6  sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos='fade-right' data-aos-duration='1250' className=' p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-100'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600]
                                                text-xl'>IDEAL SCHOOL AND COLLAGE </h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:font-[500] leading-7 '>SSC<br /><small> Science,GPA-5.00 </small> <br />

                                                    <small>Completed in 2015
                                                    </small></p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className=" rounded bg-primaryColor  w-10 h-10 absolute left-1/2 transfrom -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={school} alt="" />
                                        </figure>
                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Qualification;