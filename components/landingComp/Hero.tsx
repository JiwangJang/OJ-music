"use client";

import styles from "@/app/landing.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const mentRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.to(mentRef.current, { opacity: 1, y: 0 });
    });

    return (
        <div className="full-vh">
            <div className={styles.videoContainer}>
                <video className={styles.video} src="/video/landing.mp4" autoPlay loop muted playsInline></video>
            </div>
            <div className={`${styles.mentContainer} container full-vh `} ref={mentRef}>
                <p className="head-1">
                    나만의 멜로디 <br />
                    나만의 리듬
                </p>
                <div className="head-4">
                    <p>최근 3년 예대 입시합격 1,000명!</p>
                    <p style={{ letterSpacing: "-0.1em" }}>교육부 주관 음악학원 브랜드 가치 평가 3년 연속 1위!</p>
                    <p>실력있는 강사들만 엄선한 최고의 음악학원!</p>
                </div>
            </div>
            <div className={styles.fadeOut}></div>
        </div>
    );
}
