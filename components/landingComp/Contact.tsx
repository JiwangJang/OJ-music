"use client";

import style from "@/app/landing.module.css";
import { useEffect, useState } from "react";

export default function Contact() {
    const [isMobile, setIsMoblie] = useState(false);

    useEffect(() => {
        const isMobile = /Mobi/i.test(window.navigator.userAgent);
        setIsMoblie(isMobile);
    }, []);

    return (
        <div className="container division-padding">
            <div className={style.contactContainer}>
                <p className={`${style.hookingment} head-1`}>
                    {isMobile ? (
                        <>
                            지금 바로 당신의 꿈을 <br />
                            펼쳐보세요
                        </>
                    ) : (
                        <>
                            지금 바로 <br />
                            당신의 꿈을
                            <br /> 펼쳐보세요
                        </>
                    )}
                </p>
                <div className={style.contactForm}>
                    <div>
                        <label htmlFor="phone-number" className="head-4">
                            연락처
                        </label>
                        <input type="tel" id="phone-number" />
                    </div>
                    <div>
                        <label htmlFor="query" className="head-4">
                            문의사항
                        </label>
                        <input type="text" id="query" />
                    </div>
                    <button className="head-4">상담신청</button>
                </div>
            </div>
        </div>
    );
}
