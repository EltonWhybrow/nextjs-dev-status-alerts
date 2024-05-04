"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, stagger } from 'framer-motion';

const AudioPlayer = ({ src, post, index }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(null);

    const togglePlay = () => {
        // if (isPlaying) {
        //     audioRef.current.pause();
        // } else {
        if (src.length > 0) {
            // Randomly select an item from the src array
            const randomIndex = Math.floor(Math.random() * src.length);
            const randomSrc = src[randomIndex];

            // Set the random source to the audio element
            audioRef.current.src = randomSrc;

            audioRef.current.play();
            audioRef.current.onended = function () {
                setIsPlaying(false);
            };
            // }
            setIsPlaying(!isPlaying);
        }

    };

    return (
        <>
            {/* <a href="#video" onclick="scrollToVideo()">Play Video</a> */}
            <motion.div
                key={index}
                initial={{ scale: .9 }}
                whileHover={{
                    scale: 1.2, // Scale up to 1.5 on hover
                    rotate: 360, // Rotate 360 degrees on hover
                    transition: { duration: .4 }, // Transition duration of 2 seconds
                }}



                className='z-50 mx-auto flex justify-center align-middle'
            >
                <motion.div

                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                    }}



                >
                    <audio ref={audioRef} src={src} />
                    {/* <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button> */}
                    <div className='py-2 relative mx-auto my-1 cursor z-50'>
                        <Image src={post.data.img} alt={post.data.title} width={200} height={230} />
                        <div onClick={togglePlay} className={isPlaying ? `absolute cursor z-60 ${post.data.title}-mouth move` : `absolute cursor z-60 ${post.data.title}-mouth`}>
                            <Image src={post.data.mouth} alt="mouth" width={200} height={230} />

                        </div>
                    </div>

                </motion.div>
            </motion.div>
        </>
    );
};
export default AudioPlayer;
