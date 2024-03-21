"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, stagger } from 'framer-motion';

const AudioPlayer = ({ src, post }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(null);

    const togglePlay = () => {
        // if (isPlaying) {
        //     audioRef.current.pause();
        // } else {
        audioRef.current.play();
        audioRef.current.onended = function () {
            setIsPlaying(false);
        };
        // }
        setIsPlaying(!isPlaying);

    };

    return (
        <>
            <motion.div
                initial={{ scale: .9 }}
                whileHover={{
                    scale: 1.2, // Scale up to 1.5 on hover
                    rotate: 360, // Rotate 360 degrees on hover
                    transition: { duration: .4 }, // Transition duration of 2 seconds
                }}
                stagger={0.9}


                className='z-50'
            >
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                    }}



                >
                    <audio ref={audioRef} src={src} />
                    {/* <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button> */}
                    <div className=' relative py-2 mx-auto my-1 flex justify-center cursor z-50'>
                        <Image onClick={togglePlay} src={post.data.img} alt={post.data.title} width={200} height={230} className='h-full' />
                        <div className={isPlaying ? `absolute ${post.data.title}-mouth move` : `absolute ${post.data.title}-mouth`}>
                            <Image src={post.data.mouth} alt="mouth" width={94} height={66} className='h-full' />

                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};
export default AudioPlayer;
