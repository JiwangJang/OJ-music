"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
    title: string;
    subTitle?: string;
    imgSrc: string;
}

export default function Intro({ title, subTitle = "", imgSrc }: Props) {
    const mentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mentRef.current) {
            mentRef.current.style.opacity = "1";
            mentRef.current.style.transform = "translateY(0)";
        }
    }, []);

    return (
        <div className='full-vh'>
            <div className='intro-image'>
                <Image src={imgSrc} fill sizes='100%' alt='소개사진' style={{ objectFit: "cover" }}></Image>
            </div>
            <div className='container'>
                <div className='intro-ment-container' ref={mentRef}>
                    <p className='head-1' style={{ whiteSpace: "pre" }}>
                        {title}
                    </p>
                    <p className='head-4' style={{ whiteSpace: "pre" }}>
                        {subTitle}
                    </p>
                </div>
            </div>
            <div className='fadeOut'></div>
        </div>
    );
}
