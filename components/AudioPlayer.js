"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AudioPlayer = ({ src, post }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(null);

    const togglePlay = () => {
        // if (isPlaying) {
        //     audioRef.current.pause();
        // } else {
        audioRef.current.play();
        // }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <motion.div
                whileHover={{
                    scale: 1.2, // Scale up to 1.5 on hover
                    rotate: 360, // Rotate 360 degrees on hover
                    transition: { duration: .4 }, // Transition duration of 2 seconds
                }}
                className='z-50'
            >
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],

                    }}>
                    <audio ref={audioRef} src={src} />
                    {/* <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button> */}
                    <div className='py-2 mx-auto my-1 flex justify-center cursor z-50'>
                        <Image onClick={togglePlay} src={post.data.img} alt={post.data.title} width={200} height={230} className='h-full' />
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default AudioPlayer;