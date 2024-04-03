"use client";

import style from "@/app/landing.module.css";
import Image from "next/image";
import { useCallback, useRef } from "react";

export default function AvailableParts() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollEvent = useCallback(() => {
        const available = containerRef.current;
        if (!available) return;
        if (scrollY >= available.offsetTop * 0.7) available.classList.add("active");
    }, []);

    if (typeof window !== "undefined") window.addEventListener("scroll", scrollEvent);

    return (
        <div className={`container division-padding`} id='available' ref={containerRef}>
            <p className='head-1' style={{ textAlign: "center" }}>
                가능한 과목
            </p>
            <div className={style.availableContainer}>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/piano.jpg"}
                        alt='피아노사진'
                        fill
                        sizes='100%'
                        style={{ objectFit: "cover" }}
                    ></Image>
                </div>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/drum.jpg"}
                        alt='드럼사진'
                        fill
                        sizes='100%'
                        style={{ objectFit: "cover" }}
                    ></Image>
                </div>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/elec-guitar.jpg"}
                        alt='일렉기타사진'
                        fill
                        sizes='100%'
                        style={{ objectFit: "cover" }}
                    ></Image>
                </div>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/base.jpg"}
                        alt='베이스사진'
                        fill
                        sizes='100%'
                        style={{ objectFit: "cover" }}
                    ></Image>
                </div>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/more.jpg"}
                        alt='더보기'
                        fill
                        sizes='100%'
                        style={{ objectFit: "cover" }}
                    ></Image>
                </div>
            </div>
        </div>
    );
}
