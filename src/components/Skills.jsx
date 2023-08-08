import React from 'react';
import jsImg from '../assets/images/javascript.png';
import reactImg from '../assets/images/react.png';
import htmlImg from '../assets/images/html.png';
import cssImg from '../assets/images/css-3.png';

const Skills = () => {
    return (
        <section id='skills' >
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                        My Expertise
                    </h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 '>Throughout my academic journey and personal projects, I have gained a solid foundation in HTML, CSS, and JavaScript. Additionally, I am familiar with popular front-end frameworks such as React, React-Router, and Firebase. For CSS, I also learn Tailwind and Bootstrap. I am constantly exploring the latest trends and best practices in web development, which allows me to implement modern and responsive designs.</p>
                </div>
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
                                                text-xl'>JavaScript</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:font-[500] leading-7 '>My expertise in JavaScript revolves around two critical domains: asynchronous programming and functional programming. With a strong command of asynchronous techniques, I adeptly manage callbacks, Promises, and utilize async/await to orchestrate seamless, non-blocking code execution. This proficiency ensures optimal performance and responsiveness in applications, resulting in smooth user experiences. In addition, my deep understanding of functional programming empowers me to create clean, modular code by emphasizing the use of pure functions, immutability, and declarative paradigms. This approach fosters maintainable, efficient codebases that are easier to understand and extend. </p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className=" rounded bg-primaryColor  w-10 h-10 absolute left-1/2 transfrom -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={jsImg} alt="" />
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
                                                text-xl'>React.js</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:font-[500] leading-7 '>Proficient in React, I specialize in building Single Page Applications (SPAs) with a focus on clean and maintainable code. My expertise spans React Hooks, enabling me to efficiently manage state and side effects, resulting in responsive and dynamic user interfaces. Additionally, I adeptly utilize React Router to create seamless, multi-route navigation experiences, enhancing user engagement and interaction.  </p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className=" rounded bg-primaryColor  w-10 h-10 absolute left-1/2 transfrom -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={reactImg} alt="" />
                                        </figure>
                                    </div>
                                </div>

                            </div>
                            {/*left  */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='1450' className=' p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600]
                                                text-xl'>HTML</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:font-[500] leading-7 '>Proficient in HTML, my skill set encompasses the creation of structured and semantically meaningful web content. With an in-depth understanding of HTML5, I craft well-organized documents using a variety of tags to define headings, paragraphs, lists, and more. Additionally, I leverage HTML to embed multimedia elements like images and videos, enhancing the visual appeal of web pages. My proficiency extends to form creation, employing input fields, buttons, and validation techniques to gather and process user data effectively.</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className=" rounded bg-primaryColor  w-10 h-10 absolute left-1/2 transfrom -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={htmlImg} alt="" />
                                        </figure>
                                    </div>
                                </div>

                            </div>

                            {/* right */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos='fade-left' data-aos-delay='100' data-aos-duration='1550' className=' p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600]
                                                text-xl'>CSS</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:font-[500] leading-7 '>With a strong command of CSS, I possess the skills to design visually captivating and responsive web interfaces. My expertise extends to frameworks like Bootstrap and Tailwind CSS, allowing me to expedite the development process by utilizing pre-designed components and utility classes. I adeptly leverage CSS to style and layout elements, achieving consistent and aesthetically pleasing designs across different screen sizes and devices.</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className=" rounded bg-primaryColor  w-10 h-10 absolute left-1/2 transfrom -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                                        <figure>
                                            <img src={cssImg} alt="" />
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

export default Skills;