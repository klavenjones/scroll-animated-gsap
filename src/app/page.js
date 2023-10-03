'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useScreenWidth } from '@/hooks';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const trigger = useRef(null);
  const hOne = useRef(null);
  const imageBoard = useRef(null);
  const imageOne = useRef(null);
  const imageTwo = useRef(null);
  const imageThree = useRef(null);
  const imageFour = useRef(null);
  const imageFive = useRef(null);
  const cardImage = useRef(null);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const imageBoardElem = imageBoard.current;
    const headline = hOne.current;
    const imgOne = imageOne.current;
    const imgTwo = imageTwo.current;
    const imgThree = imageThree.current;
    const imgFour = imageFour.current;
    const imgFive = imageFive.current;
    const cardImg = cardImage.current;

    const ctx = gsap.context((self) => {
      const imageBoard = self.selector('.imageBoard');
      const images = self?.selector('.scalableImg');
      const header = self?.selector('.upper-container h1');

      gsap
        .timeline({
          scrollTrigger: {
            trigger: imageBoard.current,
            pin: true,
            start: 'top top',
            scrub: true,
            end: '+=350%'
          },
          defaults: {
            ease: 'none'
          }
        })
        .to(document.body, { delay: 0.3, backgroundColor: '#f0f0f0' }, 'start')
        .to(header, { scale: 50, opacity: 0 }, 'start')
        .to(header, { opacity: 0 }, 'end')
        .to(images[0], { scale: 10, x: -1500 }, 'start')
        .to(images[1], { scale: 10, x: -2500 }, 'start')
        .to(images[2], { scale: 10, x: -2000 }, 'start')
        .to(images[3], { scale: 10, x: 3000 }, 'start')
        .to(images[4], { scale: 10, x: 2000 }, 'start')
        .to(
          '.cardImage',
          { delay: 0.1, scale: screenWidth > 500 ? 5 : 2 },
          'start'
        )
        .to('.cardImage', { opacity: 1 }, 'start')
        .to('.scalableImg', { opacity: 1 });
    }, document.documentElement);
  }, []);

  return (
    <div className="h-[2000px]">
      <main className="upper-container" ref={trigger}>
        <span>(PSEUDO AWARD SEASON)</span>
        <h1 ref={hOne}>
          TESTING THE GSAP LIBRARY, USED WITH REACT, AND NEXTJS. I PLAN TO PLAY
          AROUND WITH GSAP AND OTHER ANIMATION LIBRARIES TO GET MY HANDS DIRTY
          AND GET CREATIVE, WITH PERSONAL PROJECTS, STARTING WITH MY PERSONAL
          PORTFOLIO. WITH THIS ANIMATION I AM GOING TO PLAY AROUND WITH SCROLL
          ANIMATION IN GSAP.
        </h1>
      </main>
      <div className="imageBoard" useRef={imageBoard}>
        <img
          src="img1.png"
          ref={imageOne}
          alt=""
          id="scalableImg1"
          className="scalableImg"
        />
        <img
          src="img2.png"
          ref={imageTwo}
          alt=""
          id="scalableImg2"
          className="scalableImg"
        />
        <img
          src="img3.png"
          ref={imageThree}
          alt=""
          id="scalableImg3"
          className="scalableImg"
        />
        <img
          src="img4.png"
          ref={imageFour}
          alt=""
          id="scalableImg4"
          className="scalableImg"
        />
        <img
          src="img5.png"
          ref={imageFive}
          alt=""
          id="scalableImg5"
          className="scalableImg"
        />
        <div ref={cardImage} className="cardImage">
          BREAK CODE TO LEARN
        </div>
      </div>
    </div>
  );
}
