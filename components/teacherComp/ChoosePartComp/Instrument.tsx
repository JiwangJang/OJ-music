import style from "@/app/teacher/teacher.module.css";
import instrumentData from "@/data/instrumentData";
import Image, { StaticImageData } from "next/image";
import { MouseEvent, TouchEvent, useCallback, useEffect, useRef, useState } from "react";

interface Props {
    instrument: string;
    setInstrument: (instrument: string) => void;
}

interface InstrumentSelectorProps {
    name: string;
    image: StaticImageData;
    isSelect: boolean;
    setFunc: (instrument: string) => void;
}

export default function Instrument({ instrument, setInstrument }: Props) {
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const slideContainer = useRef<HTMLDivElement>(null);
    const instrumentContainer = useRef<HTMLDivElement>(null);
    const isClick = useRef<boolean>(false);
    const firstClickPoint = useRef<number>(0);
    const totalWidth = useRef<number>(0);
    const curPos = useRef<number>(0);
    const progressRatio = useRef<number>(0);
    const setTimeoutRef = useRef<NodeJS.Timeout>();

    const setTotalWidth = useCallback(() => {
        const seletor = document.querySelector(".instrument-selector");
        if (!(slideContainer.current instanceof HTMLDivElement)) return;
        if (!(slideContainer.current.offsetParent instanceof HTMLDivElement)) return;
        if (!(seletor instanceof HTMLDivElement)) return;

        if (innerWidth > 1200) {
            totalWidth.current =
                (seletor.offsetWidth + 24) * 6 + seletor.offsetWidth - slideContainer.current.offsetWidth;
        } else {
            totalWidth.current =
                (seletor.offsetWidth + innerWidth * 0.02) * 6 +
                seletor.offsetWidth -
                slideContainer.current.offsetWidth;
        }

        curPos.current = totalWidth.current * progressRatio.current;
        slideContainer.current.style.transform = `translateX(${curPos.current}px)`;
    }, []);

    // 악기선택의 총 넓이 구하는 과정
    useEffect(() => setTotalWidth(), [setTotalWidth]);
    // 브라우저 리사이즈 대응
    if (typeof window !== "undefined")
        window.addEventListener("resize", () => {
            // 모바일 화면의 경우 첫위치로 돌리지 않기위한 방법
            setTotalWidth();
        });

    const MouseDownEvent = useCallback((e: MouseEvent) => {
        isClick.current = true;
        firstClickPoint.current = e.pageX - curPos.current;
        if (instrumentContainer.current) instrumentContainer.current.style.cursor = "grabbing";
    }, []);

    const MouseUpEvent = useCallback(() => {
        isClick.current = false;
        if (instrumentContainer.current) instrumentContainer.current.style.cursor = "grab";

        if (curPos.current >= 0) {
            setIsStart(true);
        } else if (Math.abs(curPos.current) >= totalWidth.current) {
            setIsEnd(true);
        } else {
            setIsStart(false);
            setIsEnd(false);
        }
    }, []);

    const MouseMoveEvent = useCallback((e: MouseEvent) => {
        clearTimeout(setTimeoutRef.current);
        if (!isClick.current) return;
        if (!slideContainer.current) return;

        curPos.current = e.pageX - firstClickPoint.current;
        if (Math.abs(curPos.current) >= totalWidth.current) curPos.current = -totalWidth.current;
        if (curPos.current > 0) curPos.current = 0;

        progressRatio.current = curPos.current / totalWidth.current;
        slideContainer.current.style.transform = `translateX(${curPos.current}px)`;

        setTimeoutRef.current = setTimeout(() => {
            isClick.current = false;
            if (instrumentContainer.current) instrumentContainer.current.style.cursor = "grab";
        }, 300);
    }, []);

    const TouchStartEvent = useCallback((e: TouchEvent) => {
        if (isClick.current) return;
        isClick.current = true;
        firstClickPoint.current = e.targetTouches[0].pageX - curPos.current;
    }, []);

    const TouchEndEvent = useCallback(() => {
        if (!isClick.current) return;
        isClick.current = false;
        if (curPos.current === 0) {
            setIsStart(true);
        } else if (curPos.current === -totalWidth.current) {
            setIsEnd(true);
        } else {
            setIsEnd(false);
            setIsStart(false);
        }
    }, []);

    const TouchMoveEvent = useCallback((e: TouchEvent) => {
        clearTimeout(setTimeoutRef.current);
        if (!slideContainer.current) return;

        curPos.current = e.targetTouches[0].pageX - firstClickPoint.current;
        if (Math.abs(curPos.current) >= totalWidth.current) curPos.current = -totalWidth.current;
        if (curPos.current > 0) curPos.current = 0;

        progressRatio.current = curPos.current / totalWidth.current;
        slideContainer.current.style.transform = `translateX(${curPos.current}px)`;

        setTimeoutRef.current = setTimeout(() => (isClick.current = false), 300);
    }, []);

    const leftSlide = useCallback(() => {
        const seletor = document.querySelector(".instrument-selector");
        if (!(seletor instanceof HTMLDivElement)) return;
        if (!(slideContainer.current instanceof HTMLDivElement)) return;

        if (innerWidth > 1200) {
            curPos.current += seletor.offsetWidth + 24;
        } else {
            curPos.current += seletor.offsetWidth + outerWidth * 0.025;
        }

        if (curPos.current >= 0) {
            curPos.current = 0;
            setIsStart(true);
        } else {
            setIsEnd(false);
            setIsStart(false);
        }
        slideContainer.current.style.transform = `translateX(${curPos.current}px)`;
    }, []);

    const rightSlide = useCallback(() => {
        const seletor = document.querySelector(".instrument-selector");
        if (!(seletor instanceof HTMLDivElement)) return;
        if (!(slideContainer.current instanceof HTMLDivElement)) return;

        if (innerWidth > 1200) {
            curPos.current -= seletor.offsetWidth + 24;
        } else {
            curPos.current -= seletor.offsetWidth + outerWidth * 0.025;
        }

        if (curPos.current <= -totalWidth.current) {
            curPos.current = -totalWidth.current;
            setIsEnd(true);
        } else {
            setIsEnd(false);
            setIsStart(false);
        }

        slideContainer.current.style.transform = `translateX(${curPos.current}px)`;
    }, []);

    return (
        <div className="division-padding">
            <div className={style.instrumentHeader}>
                <p className="head-2">과목선택</p>
                <div className={style.slideBtn}>
                    <div
                        className={style.leftBtn}
                        onClick={leftSlide}
                        style={{ opacity: isStart ? "0.3" : "1", transition: "all 0.2s" }}
                    ></div>
                    <div
                        className={style.rightBtn}
                        onClick={rightSlide}
                        style={{ opacity: isEnd ? "0.3" : "1", transition: "all 0.2s" }}
                    ></div>
                </div>
            </div>
            <div
                className={style.instrumentBody}
                onMouseDown={MouseDownEvent}
                onMouseUp={MouseUpEvent}
                onMouseMove={MouseMoveEvent}
                onTouchStart={TouchStartEvent}
                onTouchEnd={TouchEndEvent}
                onTouchMove={TouchMoveEvent}
                ref={instrumentContainer}
            >
                <div ref={slideContainer} style={{ transition: "0.3s all" }}>
                    {instrumentData.map(({ id, name, image }) => (
                        <InstrumentSelector
                            key={id}
                            name={name}
                            image={image}
                            setFunc={setInstrument}
                            isSelect={instrument === name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function InstrumentSelector({ name, image, isSelect, setFunc }: InstrumentSelectorProps) {
    const kr: { [key: string]: string } = {
        piano: "피아노",
        elec: "기타",
        base: "베이스",
        drum: "드럼",
        saxophone: "색소폰",
        midi: "미디",
        vocal: "보컬",
    };

    return (
        <div
            className={`instrument-selector head-3 ${isSelect && "selected"}`}
            data-name={kr[name]}
            onClick={() => setFunc(name)}
        >
            <Image
                src={image}
                fill
                sizes="100%"
                style={{ objectFit: "cover" }}
                alt="악기사진"
                placeholder="blur"
            ></Image>
        </div>
    );
}
