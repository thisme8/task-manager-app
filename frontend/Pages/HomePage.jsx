import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import Footer from "../Components/Footer.jsx";
import HomeContent from "../Components/HomeContent.jsx";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div>
        <div className="flex flex-col  w-[100%] items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center bg-white text-[#233c2f] py-3 rounded-full font-semibold text-lg hover:bg-[#233c2f] hover:text-[#f0f8ff] transition duration-300"
                whileHover={{ scale: 1.7 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Features
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                ></motion.span>
              </motion.a>
            </div>
            <br />
            <br />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Balance productivity with peace of mind
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our thoughtfully designed features help you stay organized while
              protecting your mental well-being.
            </p>
          </div>
        </div>
        <HomeContent
          img={{
            src: "./src/assets/undraw_calendar_8r6s.svg",
            alt: "calendar",
          }}
          link="/login"
          title="Balance your life, one task at a time"
          desc="Track your well-being metrics alongside productivity to find your optimal balance."
        />
        <HomeContent
          img={{
            src: "./src/assets/undraw_gifts_4gy3.svg",
            alt: "gifts",
          }}
          link="/login"
          title="Document tasks with your well-being in mind"
          desc=" Our intuitive process helps you stay organized while maintaining your well-being."
        />
        <HomeContent
          img={{
            src: "./src/assets/undraw_photographer_2rbr.svg",
            alt: "photographer",
          }}
          link="/login"
          title="Manage time for your hobbies and interests"
          desc="Turn overwhelm into progress—bite-sized tasks that make room for joy and creativity."
        />
        <HomeContent
          img={{
            src: "./src/assets/undraw_relax-mode_6i13-2.svg",
            alt: "relax-mode",
          }}
          link="/login"
          title="Because We Understand, You Deserve Your Time "
          desc=" Our algorithm helps distribute high and low energy tasks throughout your day."
        />
        <HomeContent
          img={{
            src: "./src/assets/undraw_task-brief_esbq.svg",
            alt: "brief",
          }}
          link="/login"
          title="Master Your Schedule, Stay Ahead of Your Tasks."
          desc=" Add tasks with energy level indicators, priority, and estimated completion time."
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
