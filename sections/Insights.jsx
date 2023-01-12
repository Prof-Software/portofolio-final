'use client';

import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { client } from '../client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

const urlBuilder = imageUrlBuilder(client)
const Insights = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const query = '*[_type == "post"][0...3]';
    client.fetch(query).then((data) => setBlogs(data));
  }, []);
  return(
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| My Blog" textStyles="text-center" />
      <TitleText title={<>Check Out my Latest Posts!</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {blogs.map((item, index) => (
          <Link key={`insight-${index}`} href={"/blog/" + item.slug.current}>
          <InsightCard  slug={item?.slug?.current} subtitle={item.desc} imgUrl={urlBuilder.image(item.mainImage).maxHeight(400).width(500).toString()} {...item} index={index + 1} />
          </Link>
        ))}
        <Link href='/blogs'><h1 className='text-white text-lg bg-slate-800 flex w-28 rounded-lg m-auto  items-center justify-center  p-1'>All Blogs</h1></Link>
      </div>
    </motion.div>
  </section>
  )
};

export default Insights;
