"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef } from "react";

interface PathDatas {
    name: string;
    content: string;
    key: number;
}

gsap.registerPlugin(useGSAP);

export default function Header() {
    const menuRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const pathData: PathDatas[] = [
        {
            name: "/introduce",
            content: "학원소개",
            key: 2192,
        },
        {
            name: "/curriculum",
            content: "커리큘럼",
            key: 3423,
        },
        {
            name: "/teacher",
            content: "강사소개",
            key: 6146,
        },
        {
            name: "/rooms",
            content: "시설안내",
            key: 2547,
        },
        {
            name: "/what-is-jazz",
            content: "재즈란?",
            key: 9879,
        },
    ];
    const headerRef = useRef<HTMLElement>(null);
    const prevScrollRef = useRef<number>(0);
    const scrollEvent = useCallback(() => {
        if (!headerRef.current) return;
        const scrollY = window.scrollY;
        if (prevScrollRef.current < scrollY) {
            headerRef.current.style.transform = "translateY(-100%)";
        }
        if (prevScrollRef.current > scrollY) {
            headerRef.current.style.transform = "translateY(0%)";
        }
        prevScrollRef.current = scrollY;
        switch (pathname) {
            case "/":
                const differents = document.querySelector("#differents");
                const available = document.querySelector("#available");
                if (!(differents instanceof HTMLDivElement) || !(available instanceof HTMLDivElement)) return;
                if (scrollY >= differents.offsetTop * 0.8) differents.classList.add("active");
                if (scrollY >= available.offsetTop * 0.8) available.classList.add("active");
                break;

            default:
                break;
        }
    }, [pathname]);

    useGSAP(() => {
        gsap.to("header", { y: 0 });
    });

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollEvent);
    }

    const menuOpen = () => {
        if (!menuRef.current) return;
        menuRef.current.classList.add("active");
        document.body.style.overflowY = "hidden";
    };

    const menuClose = () => {
        if (!menuRef.current) return;
        menuRef.current.classList.remove("active");
        document.body.style.overflowY = "auto";
    };
    return (
        <header ref={headerRef}>
            <div id='header-container' className='container'>
                <Link href={"/"}>
                    <Image
                        src={"/svg/logo.svg"}
                        width={205}
                        height={74}
                        alt='오제이음악학원로고'
                        id='header-logo'
                    ></Image>
                </Link>
                <Image
                    src={"/svg/menu.svg"}
                    width={64}
                    height={64}
                    alt='메뉴열기'
                    id='menu-open-btn'
                    onClick={menuOpen}
                ></Image>
                <nav ref={menuRef} onClick={menuClose}>
                    <ul>
                        <Image
                            src={"/svg/close.svg"}
                            width={48}
                            height={48}
                            alt='메뉴닫기'
                            id='menu-close-btn'
                            onClick={menuClose}
                        ></Image>
                        {pathData.map(({ name, content, key }) => (
                            <li className={name === pathname ? "active" : ""} key={key}>
                                <Link href={name} className='nav-link'>
                                    {content}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
