import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image';
import React, { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { motion, stagger } from 'framer-motion';
import { FaRedo } from 'react-icons/fa';

export default function Index({ posts, globalData }) {

  const [characters, setCharacters] = useState(posts);
  const [activeFilter, setActiveFilter] = useState(null);

  const filterByCategory = (cat) => {
    return posts.filter(character => {
      if (Array.isArray(cat)) {
        return cat.some(c => character.data.category.includes(c));
      } else {
        return character.data.category.includes(cat);
      }
    });
  };

  const handleFilterChange = (newCat) => {
    setActiveFilter(newCat);
    const filteredCharacters = filterByCategory(newCat);
    setCharacters(filteredCharacters);
  };
  const resetFilter = () => {
    setActiveFilter(null);
    setCharacters(posts);
  };




  const container = {
    hidden: {
      opacity: 0,
    },

    visible: (i) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.9,
        delayChildren: 0.5 * i,
      },
    }),
  };

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full pb-52">
        {/* <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1> */}
        <div className='flex flex-wrap justify-center align-middle pb-2'>

          <div className="w-1/2 md:w-auto">
            <button className={`w-full dark:bg-opacity-60 hover:bg-blue-700 bg-opacity-70 px-3 py-2 text-slate-100 md:rounded-l-lg shadow-md ${activeFilter === 'planning' ? 'bg-blue-600' : 'bg-black'}`} onClick={() => handleFilterChange("planning")}>@Planning</button>
          </div>

          <div className="w-1/2 md:w-auto">
            <button className={`w-full dark:bg-opacity-60 hover:bg-blue-700 bg-opacity-70 px-3 py-2 text-slate-100 shadow-md ${activeFilter === 'scrum' ? 'bg-blue-600' : 'bg-black'}`} onClick={() => handleFilterChange("scrum")}>@Scrum</button>
          </div>

          <div className="w-1/2 md:w-auto">
            <button className={`w-full dark:bg-opacity-60 hover:bg-blue-700 bg-opacity-70 px-3 py-2 text-slate-100 shadow-md ${activeFilter === 'review' ? 'bg-blue-600' : 'bg-black'}`} onClick={() => handleFilterChange("review")}>@Review</button>
          </div>

          <div className="w-1/2 md:w-auto">
            <button className={`w-full dark:bg-opacity-60 hover:bg-blue-700 bg-opacity-70 px-3 py-2 text-slate-100 shadow-md ${activeFilter === 'retro' ? 'bg-blue-600' : 'bg-black'}`} onClick={() => handleFilterChange("retro")}>@Retro</button>
          </div>

          <div className="w-1/2 md:w-auto">
            <button className={`w-full dark:bg-opacity-60 hover:bg-blue-700 bg-opacity-70 px-3 py-2 text-slate-100 shadow-md ${activeFilter === 'refine' ? 'bg-blue-600' : 'bg-black'}`} onClick={() => handleFilterChange("refine")}>@Refine</button>
          </div>

          <div className="w-1/2 md:w-auto">
            <button className={`w-full dark:bg-opacity-60 hover:bg-blue-700 bg-opacity-70 px-3 py-2 text-slate-100 shadow-md ${activeFilter === 'testing' ? 'bg-blue-600' : 'bg-black'}`} onClick={() => handleFilterChange("testing")}>@testing</button>
          </div>

          <div className="w-full md:w-auto">
            <button className={`justify-center items-center flex w-full dark:bg-opacity-60 bg-black hover:bg-blue-700 bg-opacity-70 px-3 py-2 h-full leading-7 text-slate-100 md:rounded-r-lg shadow-md`} onClick={() => resetFilter()}><FaRedo /></button>
          </div>

          {/* <div className="w-1/2 md:w-auto p-1">
            <button className=" w-full  text-sm  px-2 py-3 dark:text-slate-100 text-slate-900" onClick={() => resetFilter()}><FaRedo /></button>
          </div> */}

        </div>

        <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 px-2">

          {/* {characters && characters.map(user => (
            <div key={user.character + 1}>{user.data.category}</div>
          ))} */}

          {characters && characters.map((post, i) => (
            <motion.div
              variants={container}
              key={post.filePath}
              className="w-full relative mx-auto  rounded-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 z-50 cursor-pointer"
            >


              <AudioPlayer index={i} src={post.data.audio} post={post} />


              {/* <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-center mx-auto text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link> */}
            </motion.div>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
