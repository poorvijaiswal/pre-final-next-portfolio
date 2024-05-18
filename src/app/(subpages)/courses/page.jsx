"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

const items = [
  {
    id: 1,
    color: "from-slate-950 to-blue-950",
    title: "Javascript",
    desc: "JavaScript is a versatile programming language used to add interactivity and dynamic content to web pages. JavaScript is a fundamental skill for aspiring web developers.",
    img: "/background/js.jpg",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-950 to-slate-950",
    title: "C++",
    desc: "Explore foundational concepts and advanced techniques in C++ programming, including object-oriented programming principles, data structures and algorithms.",
    img: "/background/c1.jpg",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-slate-950 to-blue-950",
    title: "HTML",
    desc: "Dive into the world of web development with our HTML course. Learn to create stunning and functional web pages using the building blocks of the internet.",
    img: "/background/img12.webp",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-blue-950 to-slate-950",
    title: "CSS",
    desc: "Level up your website's appearance and layout with our CSS course. Learn how to make your web pages look beautiful and organized using easy-to-understand techniques.",
    img: "/background/img13.png",
    link: "https://lama.dev",
  },
];

export default function Courses() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-75%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="h-[500vh] relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-full h-[calc(100vh)] flex items-center justify-center text-2xl sm:text-4xl md:text-4xl text-center"
        >
          Explore the spotlighted courses listed below
        </motion.div>
        <div className="sticky top-0 flex h-screen gap-2 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r`}
                key={item.id}
              >
                <motion.div
                  className="flex flex-col gap-4 text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] overflow-hidden lg:h-[250px]">
                    <Image src={item.img} alt="" width={350} height={250} className="object-center" />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      Get Started
                    </button>
                  </Link>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
