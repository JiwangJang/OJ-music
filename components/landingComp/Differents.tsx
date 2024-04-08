"use client";

import styles from "@/app/landing.module.css";
import Image from "next/image";
import { useCallback, useRef } from "react";
import Light from "./Light";

export default function Differents() {
    const containerRef = useRef<HTMLDivElement>(null);
    const differentsData = [
        {
            image: "/image/landing/differents/1.jpg",
            content: "국내최초 출장레슨\n서비스",
            key: 2931,
        },
        {
            image: "/image/landing/differents/2.jpg",
            content: `학원앱을 통한\n레슨 예약`,
            key: 2231,
        },
        {
            image: "/image/landing/differents/3.jpg",
            content: "악기대여 서비스",
            key: 2451,
        },
    ];

    const scrollEvent = useCallback(() => {
        const differents = containerRef.current;
        if (!differents) return;
        if (scrollY >= differents.offsetTop * 0.7) differents.classList.add("active");
    }, []);

    if (typeof window !== "undefined") window.addEventListener("scroll", scrollEvent);
    return (
        <div className="container division-padding" id="differents" ref={containerRef}>
            <p className="head-1">저희는 다릅니다!</p>
            <div className={styles.differentsContainer}>
                {differentsData.map(({ image, content, key }) => (
                    <div key={key} style={{ flex: 1 }}>
                        <Image
                            src={image}
                            width={384}
                            height={408}
                            alt={`차이점 1 : ${content}`}
                            className={styles.image}
                        ></Image>
                        <p className="head-3" style={{ whiteSpace: "pre-wrap" }}>
                            {content}
                        </p>
                    </div>
                ))}
            </div>
            <Light bgColor="#C72096" isleft={true} />
        </div>
    );
}
