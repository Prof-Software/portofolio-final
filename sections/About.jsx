"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} borders flex z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        As a <span className="text-gradient font-extrabold">Developer</span> , I am passionate
        about using my skills and expertise to make a positive impact in the
        world. <br />I am known for my{" "}
        <span className="orange_text-gradient font-extrabold">Software Developing Skills</span>
        , and my ability to{" "}
        <span className="text-gradient font-extrabold">Learn New Things Everyday</span>. My
        ultimate goal is to continue growing and learning, and to use my talents
        to make a difference in the lives of others. In my free time, I enjoy{" "}
        <span className="text-white font-extrabold">
          Solving Questions and Providing answers to People on StackOverflow
        </span>
        . I am always looking for new ways to challenge myself and expand my
        horizons, and I believe that this attitude has helped me to succeed in
        my career. Thank you for taking the time to learn more about me. I hope
        that my passion and dedication shine through in my work, and I look
        forward to the opportunity to work with you in the future.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
