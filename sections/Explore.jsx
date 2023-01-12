"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../styles";
import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

import imageUrlBuilder from '@sanity/image-url';
import { client } from "../client";

const urlBuilder = imageUrlBuilder(client)

const Explore = (posts) => {
  const [active, setActive] = useState("world-2");
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"][0...3]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Projects" textStyles="text-center" />
        <TitleText
          title={
            <>
              Check Out My Projects <br className="md:block hidden" />
              
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {abouts.map((about, index) => (
            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="container-card"
            key={about.title + index}
          >
            <img src={urlBuilder.image(about.imgUrl).maxHeight(400).width(500).toString()} className='showcase' alt={about.title} />
            <div className="card p-7 ">
            <h2 className="font-poppins font-semibold mt-5 xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] dark:text-[#D0DFFF] text-[#3A4556]">{about.title}</h2>
            <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal dark:text-[#A3B3BC] text-[#5B6478] mb-4" style={{ marginTop: 10 }}>{about.description}</p>
            </div>
          </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
