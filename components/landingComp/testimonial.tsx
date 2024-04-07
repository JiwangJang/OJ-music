"use client";

import style from "@/app/landing.module.css";
import TestimonialCard from "./testimonialComp/TestimonialCard";
import { MouseEvent, TouchEvent, useEffect, useRef, useState } from "react";

export default function Testmonial() {
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isMobile, setIsMoblie] = useState(false);
    const testimonialRef = useRef<HTMLDivElement>(null);
    const posRef = useRef<number>(0);
    const firstPointRef = useRef<number>(0);
    const progressRatio = useRef<number>(0);
    const isClickRef = useRef<boolean>(false);
    const setTimeoutRef = useRef<NodeJS.Timeout>();
    const totalWidth = useRef<number>(0);
    // slideWidth * 6 = 전체 슬라이더 넓이(Desktop)
    // slideWidth * 12 = 전체 슬라이더 넓이(Moblie)

    useEffect(() => {
        const isMobile = window.innerWidth < 500;
        setIsMoblie(isMobile);
        const testimonialCard: HTMLDivElement | null = document.querySelector(".testimonial-card");
        if (!testimonialRef.current) return;
        if (testimonialCard) {
            if (innerWidth < 500)
                totalWidth.current =
                    (testimonialCard.offsetWidth + 8) * 11 +
                    testimonialCard.offsetWidth -
                    testimonialRef.current.offsetWidth;
            else
                totalWidth.current =
                    (testimonialCard.offsetWidth + 12) * 5 +
                    testimonialCard.offsetWidth -
                    testimonialRef.current.offsetWidth;
        }
    }, []);

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            const testimonialCard: HTMLDivElement | null = document.querySelector(".testimonial-card");
            if (!testimonialCard) return;
            if (!testimonialRef.current) return;
            if (innerWidth < 500)
                totalWidth.current =
                    (testimonialCard.offsetWidth + 8) * 11 +
                    testimonialCard.offsetWidth -
                    testimonialRef.current.offsetWidth;
            else
                totalWidth.current =
                    (testimonialCard.offsetWidth + 12) * 5 +
                    testimonialCard.offsetWidth -
                    testimonialRef.current.offsetWidth;
            posRef.current = progressRatio.current * totalWidth.current;
            testimonialRef.current.style.transform = `translateX(${posRef.current}px)`;
        });
    }

    const dummyData1 = [
        {
            id: 3452,
            name: "김미정",
            content: "선생님이 너무 친절하세요! 제가 정말 초짜인데도 쉽게 잘 알려주십니다",
            profileImg: "/image/landing/testimonial/1.jpg",
            imgPos: "top center",
        },
        {
            id: 3432,
            name: "김주빈",
            content: "음악이 이렇게나 쉬운거였다니...선생님들의 능력에 놀랐습니다.",
            profileImg: "/image/landing/testimonial/2.jpg",
            imgPos: "top center",
        },
        {
            id: 3552,
            name: "양찬영",
            content: "이 학원은 저에게 있어서 누구에게도 알려주기 싫습니다. 너무 잘 가르쳐서 혼자만 다니고 싶어요!",
            profileImg: "/image/landing/testimonial/3.jpg",
            imgPos: "top center",
        },
        {
            id: 1452,
            name: "조주석",
            content: "시설도 좋고, 선생님도 좋고, 학원의 가치도 좋고! 안다닐 이유가 없죠?",
            profileImg: "/image/landing/testimonial/4.jpg",
            imgPos: "top center",
        },
        {
            id: 3352,
            name: "유다영",
            content:
                "피아노 가르치시는 선생님이 너무 친절하시고, 잘생기셨어요... 내생에 이렇게 잘생긴 사람은 처음이야... 반할것같아요",
            profileImg: "/image/landing/testimonial/5.jpg",
            imgPos: "top center",
        },
        {
            id: 4234,
            name: "성도윤",
            content:
                "저는 어릴때부터 학원을 다녔는데요, 그때마다 지루해서 포기하기 십상이었습니다. 하지만 이학원은 어찌된 영문인지 너무 재밌고 그래서 지루하지가 않아요, 어떻게 이런 저를 여기까지 키워 냈는지 의문입니다.",
            profileImg: "/image/landing/testimonial/6.jpg",
            imgPos: "top center",
        },
    ];
    const dummyData2 = [
        {
            id: 3525,
            name: "탁홍준",
            content:
                "저는 기타라고 하면 너무 어려워서 쉽게 포기하게 될 줄 알았는데, 여기 선생님들의 열정이 대단해서, 저를 포기하지 못하게 만들더군요. 정말 대단한 학원입니다.",
            profileImg: "/image/landing/testimonial/7.jpg",
            imgPos: "top center",
        },
        {
            id: 6947,
            name: "추혜은",
            content: "선생님이 너무 좋아요! 이런 선생님들을 어디서 구하신거에요?? 정말 원장선생님의 능력이 대단합니다.",
            profileImg: "/image/landing/testimonial/8.jpg",
            imgPos: "top center",
        },
        {
            id: 6932,
            name: "하현욱",
            content:
                "학원의 내부 인테리어가 너무 감성집니다. 거기다가 선생님들의 실력은 더 좋고요. 저는 전공할 생각이 있어서, 선생님의 실력이 무엇보다도 중요했는데 여기서 대단한 선생님들을 만나서 서울예술대학교에 합격할 수 있었습니다. 오제이음악학원 파이팅!",
            profileImg: "/image/landing/testimonial/9.jpg",
            imgPos: "top center",
        },
        {
            id: 9593,
            name: "윤소미",
            content:
                "저는 내향적인 성향이라, 다른 이들과 이야기하거나 활동하는데 조금 어려움을 겪습니다. 근데 이학원은 어찌된 영문인지 이런 내향적인 저도 연주할 때 만큼은 외향적으로 바뀌에 만들어 줬습니다! 역시 선생님의 능력이 좋긴한가봐요!",
            profileImg: "/image/landing/testimonial/10.jpg",
            imgPos: "top center",
        },
        {
            id: 7574,
            name: "김인영",
            content: "어떻게 하면 이렇게 잘 가르칠 수가 있는거죠? 대단합니다.",
            profileImg: "/image/landing/testimonial/11.jpg",
            imgPos: "top center",
        },
        {
            id: 2945,
            name: "봉지혜",
            content: "후기가 너무 좋길래 한번 와봤는데, 좋을만 하네요",
            profileImg: "/image/landing/testimonial/12.jpg",
            imgPos: "top center",
        },
    ];

    const mouseDownEvent = (e: MouseEvent) => {
        if (!testimonialRef.current) return;
        firstPointRef.current = e.pageX - posRef.current;
        testimonialRef.current.style.cursor = "grabbing";
        isClickRef.current = true;
    };
    const mouseUpEvent = () => {
        if (!testimonialRef.current) return;
        testimonialRef.current.style.cursor = "grab";
        isClickRef.current = false;
        if (posRef.current === 0) {
            setIsStart(true);
        } else if (posRef.current === -totalWidth.current) {
            setIsEnd(true);
        } else {
            setIsEnd(false);
            setIsStart(false);
        }
    };
    const mouseMoveEvent = (e: MouseEvent) => {
        if (!testimonialRef.current) return;
        if (!isClickRef.current) return;
        clearTimeout(setTimeoutRef.current);
        posRef.current = e.pageX - firstPointRef.current;
        if (posRef.current < -totalWidth.current) posRef.current = -totalWidth.current;
        if (posRef.current > 0) posRef.current = 0;
        setTimeoutRef.current = setTimeout(() => {
            isClickRef.current = false;
            if (!testimonialRef.current) return;
            testimonialRef.current.style.cursor = "grab";
        }, 300);

        progressRatio.current = posRef.current / totalWidth.current;
        testimonialRef.current.style.transform = `translateX(${posRef.current}px)`;
    };
    const nextSlide = () => {
        if (posRef.current === -totalWidth.current) return;
        const testimonialCard: HTMLDivElement | null = document.querySelector(".testimonial-card");
        if (!testimonialRef.current) return;
        if (!testimonialCard) return;
        const cut = testimonialCard.offsetWidth + 12;
        const remain = Math.abs(posRef.current % cut);

        if (remain === 0) {
            posRef.current -= cut;
        } else {
            posRef.current -= remain;
        }

        if (posRef.current <= -totalWidth.current) {
            setIsEnd(true);
            posRef.current = -totalWidth.current;
        } else {
            setIsEnd(false);
            if (isStart) setIsStart(false);
        }
        progressRatio.current = posRef.current / totalWidth.current;
        testimonialRef.current.style.transform = `translateX(${posRef.current}px)`;
    };
    const prevSlide = () => {
        if (posRef.current === 0) return;
        const testimonialCard: HTMLDivElement | null = document.querySelector(".testimonial-card");
        if (!testimonialRef.current) return;
        if (!testimonialCard) return;
        const cut = testimonialCard.offsetWidth + 12;
        const remain = Math.abs(posRef.current % cut);

        if (remain === 0) {
            posRef.current += cut;
        } else {
            posRef.current += remain;
        }

        if (posRef.current >= 0) {
            setIsStart(true);
            posRef.current = 0;
        } else {
            setIsStart(false);
            if (isEnd) setIsEnd(false);
        }
        progressRatio.current = posRef.current / totalWidth.current;
        testimonialRef.current.style.transform = `translateX(${posRef.current}px)`;
    };

    const touchStartEvent = (e: TouchEvent) => {
        if (!testimonialRef.current) return;
        if (isClickRef.current) return;
        firstPointRef.current = e.targetTouches[0].pageX - posRef.current;
        isClickRef.current = true;
    };
    const touchEndEvent = () => {
        if (!testimonialRef.current) return;
        isClickRef.current = false;
        if (posRef.current === 0) {
            setIsStart(true);
        } else if (posRef.current === -totalWidth.current) {
            setIsEnd(true);
        } else {
            setIsEnd(false);
            setIsStart(false);
        }
    };
    const touchMoveEvent = (e: TouchEvent) => {
        if (!testimonialRef.current) return;
        if (!isClickRef.current) return;
        posRef.current = e.targetTouches[0].pageX - firstPointRef.current;
        console.log(totalWidth.current);
        if (posRef.current < -totalWidth.current) posRef.current = -totalWidth.current;
        if (posRef.current > 0) posRef.current = 0;
        progressRatio.current = posRef.current / totalWidth.current;
        testimonialRef.current.style.transform = `translateX(${posRef.current}px)`;
    };

    return (
        <div className="container division-padding" style={{ userSelect: "none" }}>
            <p className="head-1">수강생 후기</p>
            <div className="desktop-body" style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ display: "flex", alignItems: "center" }}>실제 수강생의 생생한 후기를 읽어보세요</p>
                <div className={style.utilBtns}>
                    {/* 한쪽 끝에 도달하면 opacity를 0.3으로 만듦 */}
                    <div className={style.leftBtn} onClick={prevSlide} style={{ opacity: isStart ? 0.3 : 1 }}></div>
                    <div className={style.rightBtn} onClick={nextSlide} style={{ opacity: isEnd ? 0.3 : 1 }}></div>
                </div>
            </div>
            <div
                className={style.testimonialContainer}
                ref={testimonialRef}
                onMouseDown={mouseDownEvent}
                onMouseUp={mouseUpEvent}
                onMouseMove={mouseMoveEvent}
                onTouchStart={touchStartEvent}
                onTouchEnd={touchEndEvent}
                onTouchMove={touchMoveEvent}
                style={{ cursor: "grab" }}
            >
                <div className={style.cardContainer}>
                    {dummyData1.map((data) => (
                        <TestimonialCard key={data.id} data={data} />
                    ))}
                </div>
                <div className={style.cardContainer}>
                    {dummyData2.map((data) => (
                        <TestimonialCard key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
}
