import React, { useEffect, useRef } from "react";
import gsap, { Linear, ScrollTrigger } from "gsap/all";

const ImagesAnim = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:parent.current,
        start:"0 90%",
        scrub:1
      },
    });
    tl
    .to(first.current,{
        x:"40%",
        ease: Linear
    },'a')
    .to(third.current,{
        x:"-40%",
        ease: Linear
    },'a');
    tl.to(second.current,{
        x:"-40%",
        ease: Linear
    },'a')
    .to(fourth.current,{
        x:"40%",
        ease: Linear
    },'a');
  });

  return (
    <div ref={parent} className="w-full h-[70vh] sm:h-[100vh] bg-white flex overflow-hidden items-center justify-center">
      <div className="w-[40%] sm:w-[19rem] 2xl:w-[20%] sm:h-[70%] relative h-1/2">
        <div
          ref={first}
          className="absolute w-20 sm:w-40 sm:h-[15rem] h-[7rem] bg-red-100 -right-1/3 top-6"
        >
          <img className="h-full w-full object-cover" src="./erp2.jpg" alt="" />
        </div>
        <div
          ref={second}
          className="absolute w-[8rem] sm:w-[20rem] aspect-video -left-2/3 top-1/3 overflow-hidden bg-red-600"
        >
          <video
            autoPlay
            loop
            muted
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="./meet.mp4"
          />
        </div>
        <div
          ref={third}
          className="absolute w-[6rem] sm:w-[17rem] aspect-video bg-red-300 -left-[20%] sm:-left-[40%] -bottom-10"
        >
          <img
            className="h-full w-full object-cover"
            src="./erpimg1.jpg"
            alt=""
          />
        </div>
        <div
          ref={fourth}
          className="absolute w-[9rem] sm:w-[17rem] sm:-right-[50%] sm:-bottom-[20%] aspect-[1.5/1] -right-[70%] -bottom-[10%]"
        >
          <video
            autoPlay
            loop
            muted
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="./erpvid2.mp4"
          />
        </div>
        <img
          className="h-full w-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
};

export default ImagesAnim;
