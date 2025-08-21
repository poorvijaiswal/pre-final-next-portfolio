import React from "react";
import ItemLayout from "./ItemLayout";
// import Link from "next/link";
import Image from "next/image";
import js from "../../../../public/background/profile.jpeg";
import ProgressBar from "@ramonak/react-progress-bar";

const AboutDetails = () => {
    return (
        <section className="py-20 w-full bgGradient">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 lg:px-8 md:px-4 md:gap-8 w-full sm:px-4 px-4">
                <ItemLayout
                    className={"col-span-full sm:col-span-4 md:col-span-4 lg:col-span-3 !p-0"} style={{ height: '100px', width:'200px'}} 
                >
                    <Image
                        className="w-full h-auto text-white object-cover" 
                        alt="Profile Picture"
                        loading="lazy"
                        src={js} style={{ width: '100%', height: '100%', borderRadius: '12px' }} 
                    />
                </ItemLayout>

                <ItemLayout className={
                    " col-span-full sm:col-span-8 md:col-span-8 flex-col items-start lg:col-span-9"
                }>
                    <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
                        Poorvi Jaiswal
                    </h2>
                    <p className="font-light  text-xs sm:text-sm md:text-base   ">
                        I am Poorvi Jaiswal, an aspiring web developer with a strong passion for creating efficient, scalable, and user-friendly 
                        digital solutions. With hands-on experience in React, Node.js, SQL, and API integration.<br /><br />
                        I enjoy designing and developing applications that focus on performance and seamless user experiences. I am continuously enhancing my technical expertise and 
                        staying updated with the latest industry trends to deliver impactful and innovative solutions.
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full sm:col-span-6  md:col-span-4 lg:col-span-4 !p-0 flex flex-col"}
                >
                    {/* <img
                        className="w-full h-auto"
                        // src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=poorvijaiswal&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
                        alt="CodeBucks"
                        loading="lazy"
                    /> */}
                    <div className="text-2xl text-accent  px-3">Skills</div>
                    <div className="items-center w-full p-3">
                        <p className="pt-1">HTML</p>
                        <ProgressBar completed={80} bgColor="fuchsia" animateOnRender={true} height={15} />

                        <p className="pt-1">CSS</p>
                        <ProgressBar completed={76} bgColor="cyan" animateOnRender={true} height={15} />

                        <p className="pt-1">JS</p>
                        <ProgressBar completed={65} bgColor="orange" animateOnRender={true} height={15} />

                        <p className="pt-1">ReactJS</p>
                        <ProgressBar completed={89} bgColor="green" animateOnRender={true} height={15} />
                    </div>
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img
                        className="w-full h-auto"
                        src="https://github-readme-stats.vercel.app/api?username=poorvijaiswal&hide=contribs,prs&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" //replace username wd ur github username
                        // src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                        alt="CodeBucks"
                        loading="lazy"
                    />
                </ItemLayout>


                <ItemLayout className={"lg:col-span-8 md:row-span-2 col-span-full"}>
                    <img
                        className="w-full h-auto"
                        src={`https://skillicons.dev/icons?i=aws,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,js,jquery,kubernetes,linux,mongodb,mysql,nextjs,nodejs,npm,react,redux,replit,sass,tailwind,threejs,vercel,vite,vscode`}
                        alt="CodeBucks"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout
                    className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        1 <sub className="font-semibold text-base">Research Paper</sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        4+{" "}
                        <sub className="font-semibold text-base">Certifications</sub>
                    </p>
                </ItemLayout>

                {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img
                        className="w-full h-auto"
                        src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=codebucks27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
                        alt="CodeBucks"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <Link
                        href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
                        target="_blank"
                        className="w-full"
                    >
                        <img
                            className="w-full h-auto"
                            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                            alt="CodeBucks"
                            loading="lazy"
                        />
                    </Link>
                </ItemLayout> */}
            </div>
        </section>
    );
};

export default AboutDetails;