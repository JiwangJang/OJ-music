"use client";

import style from "@/app/introduce/introduce.module.css";
import { useEffect, useRef } from "react";

export default function Location() {
    const mapRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        window.kakao.maps.load(() => {
            const { kakao } = window;
            const targetPos = new kakao.maps.LatLng(34.760446263506566, 127.66230758343472);
            const option = {
                center: targetPos,
                level: 2,
            };

            const marker = new kakao.maps.Marker({
                position: targetPos,
            });
            const map = new kakao.maps.Map(mapRef.current, option);

            marker.setMap(map);

            window.addEventListener("resize", () => {
                map.panTo(targetPos);
            });
        });
    }, []);

    return (
        <div className='container division-padding' style={{ paddingTop: 0 }}>
            <p className='head-1'>학원위치</p>
            <p className={`desktop-body ${style.address}`}>주소 : 전라남도 여수시 시청로 1</p>
            <div id='map' ref={mapRef}></div>
        </div>
    );
}
