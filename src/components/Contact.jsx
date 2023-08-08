import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='pb-16'>
            <div className="container">
                <h1 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in Touch</h1>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.1067144302946!2d90.42191783025666!3d23.732153018778593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b98bfb0f401b%3A0x12005640a753c66c!2z4Kau4KeH4Ka44Ka-4Kaw4KeN4Ka4IOCmq-CmvuCmsOCngeCmlSDgpp_gp43gprDgp4fgpqHgpr7gprDgp43gprg!5e0!3m2!1sen!2sbd!4v1691530673188!5m2!1sen!2sbd" className='border-0 rounded-lg w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex item-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <form className='w-full'>
                            <div className="md-5">
                                <input type="text" placeholder='Your Name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className="mt-5 md-5">
                                <input type="email" placeholder='Your Email' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className="mt-5 md-5">
                                <input type="text" placeholder='Your Subject' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className="mt-5 md-5">
                                <textarea type="text" rows={3} placeholder='Write your massage' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>Send Massage</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;