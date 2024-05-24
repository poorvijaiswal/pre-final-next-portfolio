import React from "react";
import ItemLayout from "./ItemLayout";
// import Link from "next/link";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

const AboutDetails = () => {
    return (
        <section className="py-20 w-full bgGradient">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 lg:px-8 md:px-4 md:gap-8 w-full sm:px-4 px-4">
                <ItemLayout
                    className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
                >
                    <Image
                        className="w-full h-auto text-white"
                        alt="Profile Image"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={
                    " col-span-full lg:col-span-8  flex-col items-start"
                }>
                    <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
                        Poorvi Jaiswal
                    </h2>
                    <p className="font-light  text-xs sm:text-sm md:text-base   ">
                        As a current professor, I bring extensive expertise in SalesForce, Robotic Process Automation, and computer networking.
                        With a deep understanding of computer software development, I impart practical insights and theoretical foundations to students. Proficient in programming languages such as LISP, C, C++, Java, and web technologies like HTML and CSS, I foster an engaging learning environment. Additionally, my command over Linux ensures a comprehensive understanding of operating systems. Committed to empowering future industry leaders, I aim to inspire students to excel in the dynamic field of technology with hands-on experience and theoretical knowledge
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

                        <p className="pt-1">C++</p>
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
                        5+ <sub className="font-semibold text-base">Research Papers</sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        8+{" "}
                        <sub className="font-semibold text-base">years of experience</sub>
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