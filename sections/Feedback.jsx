"use client";

import { motion } from "framer-motion";
import { useState,useEffect } from 'react';
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../client";

const urlBuilder = imageUrlBuilder(client);
const Feedback = () => {
  const [misc, setMisc] = useState([]);
  useEffect(() => {
    const query = '*[_type == "misc"]';
    client.fetch(query).then((data) => setMisc(data));
  }, []);
  return (
    <section className={`${styles.paddings}`}>
        {misc.map((item, index) => (

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        key={index}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              {item.title}
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              A Word from me
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            {item.description}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src={urlBuilder.image(item.imgUrl)}
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
          ))}
    </section>
  );
};

export default Feedback;
