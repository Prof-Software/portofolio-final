'use client';

import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';
import styles from '../styles';
import { insights } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import { client } from '../client';
const urlBuilder = imageUrlBuilder(client)
const Insights = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const query = '*[_type == "post"]';
    client.fetch(query).then((data) => setBlogs(data));
  }, []);
  console.log(blogs)
  return(
  <section className={`${styles.paddings} bg-[#0d1117] h-full relative z-10`}>
    <div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} bg-[#0d1117] mx-auto flex flex-col`}
    >
      <TypingText title="| My Blog" textStyles="text-center" />
      <TitleText title={<>Check Out my Latest Posts!</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px] bg-[#0d1117]">
        {blogs.map((item, index) => (
            <Link key={item.slug.current} as={`blog/${item.slug.current}`} href={"/blog/" + item.slug.current}>
                <InsightCard   subtitle={item.desc} imgUrl={urlBuilder.image(item.mainImage).maxHeight(400).width(500).toString()} {...item} index={index + 1} />
            </Link>
        ))}
      </div>
    </div>
  </section>
  )
};

export default Insights;
