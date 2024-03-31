"use client";

import styles from "@/app/landing.module.css";
import Image from "next/image";

export default function Differents() {
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
    return (
        <div className='container division-padding' id='differents'>
            <p className='head-1' style={{ textAlign: "center", marginBottom: "36px" }}>
                저희는 다릅니다!
            </p>
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
                        <p className='head-3' style={{ whiteSpace: "pre-wrap" }}>
                            {content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
