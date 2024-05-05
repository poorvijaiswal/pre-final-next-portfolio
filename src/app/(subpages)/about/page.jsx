"use client"
import React, { Suspense } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../../constants'
import Image from "next/image";
const AboutModel = React.lazy(() => import("../../../portmodels/AboutModel"))
import RenderModel from "@/app/portcomponents/RenderModel";

const ExperienceCard = ({ experience }) => {
    // console.log(experience, "exp")
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#408",
                color: "#fff",
                // scale: "0.8",
            }}
            // style={{ width: 850 }}
            visible={true}
            contentArrowStyle={{ borderRight: "7px solid  #247631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center text-white items-center w-full h-full z-50'>
                    {/* <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    /> */}
                    <Image src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold z-50'>{experience.title}</h3>
                <p
                    className='text-secondary text-white z-50 text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const About = () => {

    return (
        <>

            <div className="w-full h-screen relative">
                <Suspense>
                    <RenderModel >
                        <AboutModel />
                    </RenderModel>
                </Suspense>
            </div>
            <div className="bgGradient pt-20">
                <div className=' flex flex-col mx-auto max-w-[1050px] bgGradient '>
                    <VerticalTimeline lineColor="#fff">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </div>
            </div>


        </>
    );
};

export default About;