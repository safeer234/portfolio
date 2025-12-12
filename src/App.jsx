import "./App.css";
import ProjectCard from "./component/ProjectCard";
import SkillCard from "./component/SkillCard";
import profileimg1 from "./images/WhatsApp Image 2025-09-06 at 20.58.52_74b47452.jpg";
import projectimg1 from "./images/Screenshot 2025-10-13 191417.png";
import projectimg2 from "./images/Screenshot 2025-11-16 222312.png";
import projectimg3 from "./images/Screenshot 2025-11-24 225354.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion as MOTION } from "framer-motion";
import downloadres from "../src/download/Safeer_Frontend_Resume_90plus.pdf"


import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isRise, setIsRise] = useState(false);
  const [isPop, setIsPop] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Html" },
    { name: "Css" },
    { name: "JavaScript" },
    { name: "React Js" },
    { name: "Tailwind CSS" },
    { name: "GitHub" },
    { name: "Redux" },
    { name: "Bootstrap" },
    { name: "Netlify" },
    { name: "Vite" },
    { name: "Material UI" },
    { name: "Figma" },
  ];

  const projects = [
    {
      image: projectimg3,
      title: "Food order Website",
      info: "Food Ordering website created using Html, CSS, JavaScript and React.",
      link: "https://food-order-website-opal.vercel.app/",
    },
    {
      image: projectimg1,
      title: "Black Jack Game",
      info: "Interactive Blackjack game that recognizes winning conditions and provides instant feedback.",
      link: "https://safeer234.github.io/Blackjack-game/",
    },
    {
      image: projectimg2,
      title: "Simple Calculator",
      info: "Simple working calculator created using Html, CSS and JavaScript.",
      link: "https://poetic-custard-c30868.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur">
        <nav className="flex items-center justify-between lg:pr-70 mx-auto px-4 py-4 text-lg font-semibold">
          <a href="#home" className="text-[#34d399] lg:px-6 text-2xl">
            Safeer.
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex gap-12">
            {["home", "about", "skills", "projects", "contact"].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className={` nav pb-1 transition ${
                  activeSection === sec
                    ? "border-b-2 border-[#34d399] text-[#34d399]"
                    : "border-b-2 border-transparent"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="lg:hidden flex flex-col gap-3 bg-white text-sm text-[#57534e] p-4 shadow-md absolute top-16 left-0 right-0 z-40">
            {["home", "about", "skills", "projects", "contact"].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#ef4444]"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </ul>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-24">
        {/* HOME SECTION */}
        <section id="home" className="max-w-6xl mx-auto px-4 py-10 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Text — Animated from Left */}
            <MOTION.div
              className="flex-1"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-sm lg:text-2xl text-gray-300">Hello, I'm</h1>
              <h2 className="text-3xl lg:text-6xl font-bold mt-2">
                <span className="text-[#34d399]">Safeer</span> <br />
                <span className="text-[#34d399]">Mohammed K</span>
              </h2>

              <p className="mt-3 text-sm lg:text-2xl">
                And{" "}
                <span className="animate-pulse text-[#34d399]">
                  I'm a Front-End Developer
                </span>
              </p>

              <p className="mt-4 text-sm lg:text-base text-gray-300 max-w-xl">
                Aspiring Frontend Developer skilled in creating responsive and
                user-friendly web interfaces using React.js, JavaScript, HTML5,
                CSS3, and Tailwind CSS.
              </p>

              {/* Socials */}
              <div className="flex gap-3 mt-6">
                {/* icons unchanged */}
                <a href="https://github.com/safeer234" target="_blank" rel="noreferrer" className=" w-10 h-10 rounded-full overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_30px_#34d399] transition duration-300" > <svg className="w-full h-full bg-[#34d399]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" > <path d="M316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z" /> </svg> </a> 
                <a href="https://www.linkedin.com/in/safeermohammedk" target="_blank" rel="noreferrer" className=" w-10 h-10 rounded-full overflow-hidden hover:shadow-[0_0_30px_#34d399]  hover:-translate-y-1 transition duration-300" > <svg className="w-full h-full bg-[#34d399]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" > <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" /> </svg> </a>
                 <a href="" target="_blank" rel="noreferrer" className=" w-10 h-10 rounded-full overflow-hidden hover:-translate-y-1 transition duration-300 hover:shadow-[0_0_30px_#34d399] " > <svg className="w-full h-full bg-[#34d399]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" > <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /> </svg> </a> 
                 <a href="" target="_blank" rel="noreferrer" className=" w-10 h-10 rounded-full overflow-hidden hover:-translate-y-1 transition duration-300 hover:shadow-[0_0_30px_#34d399] " > <svg className="w-full h-full bg-[#34d399]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" > <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM447.3 263.3C447.3 350 381.3 449.9 260.7 449.9C223.5 449.9 189 439.1 160 420.5C165.3 421.1 170.4 421.3 175.8 421.3C206.5 421.3 234.7 410.9 257.2 393.3C228.4 392.7 204.2 373.8 195.9 347.8C206 349.3 215.1 349.3 225.5 346.6C195.5 340.5 173 314.1 173 282.2L173 281.4C181.7 286.3 191.9 289.3 202.6 289.7C193.6 283.7 186.2 275.6 181.1 266.1C176 256.6 173.3 245.9 173.4 235.1C173.4 222.9 176.6 211.7 182.3 202C214.6 241.8 263.1 267.8 317.5 270.6C308.2 226.1 341.5 190 381.5 190C400.4 190 417.4 197.9 429.4 210.7C444.2 207.9 458.4 202.4 471 194.9C466.1 210.1 455.8 222.9 442.2 231C455.4 229.6 468.2 225.9 480 220.8C471.1 233.9 459.9 245.5 447.1 254.8C447.3 257.6 447.3 260.5 447.3 263.3z" /> </svg> </a>

                {/* ... */}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                href={downloadres}
                download={downloadres}
                  onClick={() => {
                    setIsPop("cv");
                    setTimeout(() => setIsPop(false), 200);
                  }}
                  className={`border-2 border-[#34d399] text-[#34d399] font-semibold rounded-3xl px-6 py-2 transition ${
                    isPop === "cv" ? "bg-[#34d399] text-black shadow-[0_0_30px_#34d399]" : " border-2 border-[#34d399] text-[#34d399] shadow-none "
                  }`}
                >
                  Download CV
                </a>

                <a
                  href="#contact"
                  onClick={() => {
                    setIsPop("contact");
                    setTimeout(() => setIsPop(false), 200);
                  }}
                  className={`font-semibold  rounded-3xl px-6 py-2 duration-300 ease-out ${
                    isPop === "contact"
                      ? "bg-[#020617] border-2 border-[#34d399] text-emerald-300 shadow-[0_0_30px_#34d399]"
                      : "text-black bg-[#34d399] shadow-none"
                  }`}
                >
                  Contact Me
                </a>
              </div>
            </MOTION.div>

            {/* Image — Animated from Right */}
            <MOTION.div
              className="flex-1 flex items-center justify-center relative mt-6 lg:mt-0"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full border-4 border-l-[#34d399] border-[#0f172a] animate-spin"></div>

              <div className="absolute w-32 h-32 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-[#34d399] bg-[#020617]">
                <img src={profileimg1} className="w-full h-full object-cover" />
              </div>
            </MOTION.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-20 lg:py-35 mt-28 lg:mt-40">

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-30">

            {/* Image — from Left */}
            <MOTION.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                onClick={() => {
                  setIsRise(!isRise);
                  setTimeout(() => setIsRise(isRise), 700);
                }}
                className={`
                  w-40 h-40 lg:w-64 lg:h-64 
                  rounded-full overflow-hidden 
                  flex items-center justify-center 
                  transition-transform duration-300 ease-in-out cursor-pointer
                  ${
                    isRise
                      ? "scale-100 bg-white"
                      : "scale-125 bg-[#34d399] shadow-[0_0_30px_#34d399]"
                  }
                `}
              >
                <img
                  src={profileimg1}
                  className="w-36 h-36 lg:w-60 lg:h-60 rounded-full object-cover"
                />
              </div>
            </MOTION.div>

            {/* Text — from Right */}
            <MOTION.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#34d399] text-2xl lg:text-4xl font-bold">
                About Me
              </h2>
              <div className="w-12 h-2px bg-[#34d399] mx-auto lg:mx-0 mt-2"></div>

              <p className="mt-6 text-sm lg:text-base text-gray-200 max-w-xl">
               Motivated Frontend Developer skilled in creating responsive and user-friendly web interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Passionate about crafting engaging digital experiences, integrating APIs, and following clean coding practices. Eager to contribute to innovative web projects in a collaborative, growth-focused environment.
              </p>
            </MOTION.div>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="max-w-6xl mx-auto px-4 py-20 lg:py-32 mt-28 lg:mt-40">
          <div className="text-center">
            <p className="text-[#34d399] text-2xl lg:text-4xl font-bold">
              Skills
            </p>
            <div className="w-12 h-2px bg-[#34d399] mx-auto mt-2"></div>
          </div>

          {/* Animated grid container */}
          <MOTION.div
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {skills.map((skill, index) => (
              <MOTION.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => {
                  setActive(index);
                 
                }}
                className={`flex items-center justify-center py-3 rounded-2xl text-lg du font-medium ease-in ${
                  active === index
                    ? "bg-[#34d399] text-black scale-110 shadow-[0_0_30px_#34d399] duration-300 translate-y-1.5"
                    : "border-2 border-[#34d399] bg-[#020617] text-[#34d399] translate-0"
                }`}
              >
                <SkillCard skill={skill} />
              </MOTION.div>
            ))}
          </MOTION.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="max-w-6xl mx-auto px-4 py-20 lg:py-32 mt-28 lg:mt-40">
          <div className="text-center">
            <p className="text-[#34d399] text-2xl lg:text-4xl font-bold">
              Projects
            </p>
            <div className="w-12 h-2px bg-[#34d399] mx-auto mt-2"></div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <MOTION.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center border lg:border-white/20 rounded-2xl bg-[#020617] hover:border-[#34d399] p-4 transition"
              >
                <ProjectCard project={project} />
              </MOTION.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-10 lg:py-20">
          <MOTION.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Contact />
          </MOTION.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
