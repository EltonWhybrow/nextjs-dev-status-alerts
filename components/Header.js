import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Header({ name }) {


  useEffect(() => {
    const playBtn = document.getElementById('play');
    const siren = document.getElementById('siren');
    const audio = document.querySelector('audio[data-category="siren"]');



    playBtn.addEventListener('mouseover', function () {
      siren.play();
    }, false);

    playBtn.addEventListener('mouseleave', function () {
      siren.pause();
      siren.currentTime = 0;
    }, false);

    // resetBtn.addEventListener('mouseover', function () {
    //   siren.play();
    // }, false);

    // resetBtn.addEventListener('mouseleave', function () {
    //   siren.pause();
    //   siren.currentTime = 0;
    // }, false);
  }, [])


  return (
    <header className="pt-5">

      <audio date-category="siren" id="siren" src="sounds/one-short-siren.mp3" preload="auto">
        Your browser does not support the <code>audio</code> element.
      </audio>

      <div className="text-center">
        <div id="play" className="relative group hidden dark:block">
          <Image src="/alerts.webp" alt="alert" height="98" width="339" />
          <div className="light-flash group-hover:animate-spin origin-center">
            <Image src="/flash.png" alt="flash" height="29" width="29" />
          </div>
        </div>
        <div id="play" className="relative group block dark:hidden">
          <Image src="/alerts-dark.webp" alt="alert" height="98" width="339" />
          <div className="light-flash group-hover:animate-spin origin-center">
            <Image src="/flash.png" alt="flash" height="29" width="29" />
          </div>
        </div>

      </div>
    </header >
  );
}
