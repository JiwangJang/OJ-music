"use client";

import style from "@/app/introduce/introduce.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function IntroduceIntro() {
    const mentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mentRef.current) {
            mentRef.current.style.opacity = "1";
            mentRef.current.style.transform = "translateY(0)";
        }
    }, []);

    return (
        <div className='full-vh'>
            <div className={style.introImage}>
                <Image src={"/image/introduce/intro.jpg"} fill sizes='100%' alt='소개사진'></Image>
            </div>
            <div className={`container ${style.introMentContainer}`} ref={mentRef}>
                <p className='head-1'>
                    안녕하세요 <br /> 오제이 음악학원입니다
                </p>
            </div>
            <div className='fadeOut'></div>
        </div>
    );
}
