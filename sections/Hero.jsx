"use client";

import { motion } from "framer-motion";
import { slideIn, navVariants, textVariant } from "../utils/motion";

import styles from "../styles";
import { socials } from "../constants";
const Hero = () => (
  <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1 }}
    className="flex flex-col mb-80"
  >
    <div className={`px- bg-[#161b22] flex flex-wrap `}>
      <motion.h1
        variants={textVariant(1.1)}
        className={`${styles.heroHeading} p-10`}
      >
        <span className="text-gradient">Welcome</span>👋! <br />
        To My <span className="orange_text-gradient">Portofolio</span>
        <p className="sm-text">
          My portfolio showcases a variety of projects that demonstrate my
          capabilities and interests. <br /> Take a look and let me know what
          you think!
        </p>
        <div className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer button-gradient w-[200px]">
          <button
            type="button"
            className="font-poppins font-semibold text-[16px] leading-[16px] text-white"
          >
            Explore Projects
          </button>
        </div>
        <div className="flex mt-5 gap-5">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[30px] h-[30px] object-contain cursor-pointer"
                />
                ))}
          </div>
       
        
      </motion.h1>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="w-full absolute"
      >

      <img
          src="/figma.png"
          id="figma"
          className="absolute h-[110px] langs"
          alt=""
        />
      <img
          src="/c.png"
          id="c"
          className="absolute h-[110px] langs"
          alt=""
        />
      <img
          src="/java.png"
          id="vs-code"
          className="absolute h-[90px] langs"
          alt="gg"
        />
        <img
          src="/html.png"
          id="html"
          className="absolute h-[110px] langs"
          alt=""
        />
        <img
          src="/node.png"
          id="node"
          className="absolute h-[110px] langs"
          alt=""
        />
        <img
          src="/cpp.png"
          id="cpp"
          className="absolute h-[110px] langs"
          alt=""
        />
        <img
          src="/css.png"
          id="css"
          className="absolute h-[110px] langs"
          alt=""
        />
        <img
          src="/redux.png"
          id="react"
          className="absolute h-[110px] langs"
          alt=""
        />
        <img
          src="/sass.png"
          id="sass"
          className="absolute h-[110px] langs"
          alt=""
        />
        <img
          src="/flutter.png"
          id="flutter"
          className="absolute h-[110px] langs"
          alt=""
        />
        <img
          src="/git.png"
          id="git"
          className="absolute h-[110px] langs"
          alt=""
        />
        <img
          src="/py.png"
          id="py"
          className="absolute h-[100px] langs"
          alt=""
        />
  </motion.div>

        
        
    </div>
    <img className="wave" src="/wave-2.svg" alt="" />
  </motion.div>
);

export default Hero;
