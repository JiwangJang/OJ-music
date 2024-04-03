"use client";

import Image from "next/image";
import style from "@/app/curriculum/curriculum.module.css";
import { useEffect, useRef } from "react";

export default function Intro() {
    const introMentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!introMentRef.current) return;
        introMentRef.current.style.opacity = "1";
        introMentRef.current.style.transform = "translateY(0)";
    }, []);

    return (
        <div style={{ height: "100lvh" }}>
            <div className={style.introImageContainer}>
                <Image
                    src={"/image/curriculum/intro.jpg"}
                    fill
                    sizes='100%'
                    alt='인트로'
                    style={{ objectFit: "cover" }}
                ></Image>
            </div>
            <div className={`${style.mentContainer} container`} ref={introMentRef}>
                <p className='head-1'>
                    오제이음악학원의 <br /> 커리큘럼
                </p>
                <p className='head-4'>저희를 믿고 따라와주세요</p>
            </div>
            <div className='fadeOut'></div>
        </div>
    );
}
