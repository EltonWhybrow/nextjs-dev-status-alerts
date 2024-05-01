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

export default function Index({ posts, globalData }) {

  const [characters, setCharacters] = useState(posts);

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
    const filteredCharacters = filterByCategory(newCat);
    setCharacters(filteredCharacters);
  };
  const resetFilter = () => {
    setCharacters(posts);
  };

  console.log(">>> characters", characters);


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
        <div className='flex flex-wrap justify-center align-middle'>
          <div className="w-1/2 md:w-auto p-1">


            <button className=" w-full  bg-black dark:bg-opacity-60 bg-opacity-70 px-3 py-2 text-slate-100 rounded-lg shadow-md" onClick={() => resetFilter()}>All</button>
          </div>
          <div className="w-1/2 md:w-auto p-1">


            <button className=" w-full  bg-black dark:bg-opacity-60 bg-opacity-70 px-3 py-2 text-slate-100 rounded-lg shadow-md" onClick={() => handleFilterChange("meeting")}>Meeting</button>
          </div>
          <div className="w-1/2 md:w-auto p-1">


            <button className=" w-full  bg-black dark:bg-opacity-60 bg-opacity-70 px-3 py-2 text-slate-100 rounded-lg shadow-md" onClick={() => handleFilterChange("project")}>Project</button>
          </div>

          <div className="w-1/2 md:w-auto p-1">


            <button className=" w-full  bg-black dark:bg-opacity-60 bg-opacity-70 px-3 py-2 text-slate-100 rounded-lg shadow-md" onClick={() => handleFilterChange("testing")}>Testing</button>
          </div>
          <div className="w-1/2 md:w-auto p-1">


            <button className=" w-full  bg-black dark:bg-opacity-60 bg-opacity-70 px-3 py-2 text-slate-100 rounded-lg shadow-md" onClick={() => handleFilterChange("misc")}>Misc</button>
          </div>



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
