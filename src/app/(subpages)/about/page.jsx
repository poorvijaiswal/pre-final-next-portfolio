"use client"
import React, { Suspense } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../../constants'
import { BsPersonWorkspace } from "react-icons/bs";
import Image from "next/image";
const AboutModel = React.lazy(() => import("../../../portmodels/AboutModel"))
import RenderModel from "@/app/portcomponents/RenderModel"
import FireFliesBg from "../../portcomponents/FireFliesBg"
import AboutDetails from "@/app/portcomponents/about/index"


const ExperienceCard = ({ experience }) => {
    // console.log(experience, "exp")
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#4088",
                color: "#fff",
                // scale: "0.8",
            }}
            // style={{ width: 850 }}
            visible={true}
            contentArrowStyle={{ borderRight: "7px solid  #408" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center text-white items-center w-full h-full z-50 absolute -top-[40%] -left-[40%] '>
                    {/* <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    /> */}
                    {/* <Image src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" /> */}
                    <BsPersonWorkspace />
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
                <div className="absolute flex flex-col items-center text-center top-[80%] sm:top-[70%] left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className="font-bold  text-5xl xs:text-5xl sm:text-6xl  lg:text-7xl text-accent">
                        Hello!
                    </h1>
                    <p className="font-light text-foreground text-lg mt-1">
                        Please scroll down to discover more about Poorvi Jaiswal.
                    </p>
                </div>
                <FireFliesBg />
            </div>

            {/* <div className="relative w-full h-screen flex flex-col items-center justify-center">

            </div> */}

            <AboutDetails />
            <div className="text-4xl lg:text-6xl text-accent justify-center bgGradient flex -tracking-tight font-bold">
                Experience
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