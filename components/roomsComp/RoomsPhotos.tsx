"use client";

import roomImage_1 from "@/public/image/rooms/1.jpg";
import roomImage_2 from "@/public/image/rooms/2.jpg";
import roomImage_3 from "@/public/image/rooms/3.jpg";
import roomImage_4 from "@/public/image/rooms/4.jpg";
import roomImage_5 from "@/public/image/rooms/5.jpg";
import roomImage_6 from "@/public/image/rooms/6.jpg";
import roomImage_7 from "@/public/image/rooms/7.jpg";
import roomImage_8 from "@/public/image/rooms/8.jpg";
import roomImage_9 from "@/public/image/rooms/9.jpg";
import style from "@/app/rooms/rooms.module.css";
import Image from "next/image";
import { useState } from "react";

export default function RoomsPhotos() {
    const [room, setRoom] = useState("");

    const rooms = [
        {
            roomName: "피아노연습실",
            image: roomImage_1,
        },
        {
            roomName: "기타연습실",
            image: roomImage_2,
        },
        {
            roomName: "합주실",
            image: roomImage_3,
        },
        {
            roomName: "로비",
            image: roomImage_4,
        },
        {
            roomName: "미디실",
            image: roomImage_5,
        },
        {
            roomName: "보컬트레이닝실",
            image: roomImage_6,
        },
        {
            roomName: "드럼연습실",
            image: roomImage_7,
        },
        {
            roomName: "원장실",
            image: roomImage_8,
        },
        {
            roomName: "다목적실",
            image: roomImage_9,
        },
    ];

    return (
        <div className="container division-padding">
            <p className="head-2">시설안내</p>
            <div className={style.roomImageContainer}>
                {rooms.map(({ roomName, image }, i) => (
                    <div key={i} className={style.roomImage} data-roomname={roomName}>
                        <Image
                            src={image}
                            fill
                            sizes="100%"
                            placeholder="blur"
                            alt="시설사진"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        ></Image>
                    </div>
                ))}
            </div>
            <div className={style.roomDetailImageCut}></div>
        </div>
    );
}
