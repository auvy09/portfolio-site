import React, { useState } from 'react';
import data from '../assets/data/portfolioData';
import Modal from './Modal';

const Project = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const handleModalShow = id => {
        setShowModal(true);
        setActiveId(id);
    }

    return (
        <section id='projects'>
            <div className="container">
                <div className="flex item-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h2 className='text-headingColor text-[2rem] font-[700]'>My recent Projects</h2>
                    </div>
                    <div className="flex gap-3"></div>
                </div>
                {console.log(data)}
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {
                        data.map((project, index) => (
                            <div data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000' key={index} className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                                <figure>
                                    <img className='rounded-[8px]' src={project.imgUrl} alt="" />
                                </figure>
                                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5]
                                hidden group-hover:block">
                                    <div onClick={() => handleModalShow(project.id)} className="w-full h-full flex items-center justify-center">
                                        <button className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500]ease-in duration-200'>See Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} activateId={activeId} />}
        </section>
    );
};

export default Project;