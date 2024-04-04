import style from "@/app/teacher/teacher.module.css";
import Image from "next/image";
import { Dispatch, MouseEvent, SetStateAction, useCallback, useEffect, useRef } from "react";

interface Props {
    setInstrument: Dispatch<SetStateAction<string>>;
}

interface InstrumentSelectorProps {
    name: string;
    imageSrc: string;
    setFunc: Dispatch<SetStateAction<string>>;
}

export default function Instrument({ setInstrument }: Props) {
    const instrumentData = [
        {
            id: 1254,
            name: "piano",
            imageSrc: "/image/teacher/piano.jpg",
        },
        {
            id: 5324,
            name: "elec",
            imageSrc: "/image/teacher/elec-guitar.jpg",
        },
        {
            id: 7585,
            name: "base",
            imageSrc: "/image/teacher/base.jpg",
        },
        {
            id: 6724,
            name: "drum",
            imageSrc: "/image/teacher/drum.jpg",
        },
        {
            id: 4273,
            name: "saxophone",
            imageSrc: "/image/teacher/saxophone.jpg",
        },
        {
            id: 4874,
            name: "midi",
            imageSrc: "/image/teacher/midi.jpg",
        },
        {
            id: 6248,
            name: "vocal",
            imageSrc: "/image/teacher/vocal.jpg",
        },
    ];

    const slideContainer = useRef<HTMLDivElement>(null);
    const instrumentContainer = useRef<HTMLDivElement>(null);
    const isClick = useRef<boolean>(false);
    const firstClickPoint = useRef<number>(0);
    const totalWidth = useRef<number>(0);
    const curPos = useRef<number>(0);
    const setTimeoutRef = useRef<NodeJS.Timeout>();

    const setTotalWidth = useCallback(() => {
        const seletor = document.querySelector(".instrument-selector");
        if (!(slideContainer.current instanceof HTMLDivElement)) return;
        if (!(slideContainer.current.offsetParent instanceof HTMLDivElement)) return;
        if (!(seletor instanceof HTMLDivElement)) return;
        const container = slideContainer.current.offsetParent;
        if (innerWidth > 1200) {
            totalWidth.current = (seletor.offsetWidth + 24) * 6 + seletor.offsetWidth - container.offsetWidth + 36 * 2;
        } else {
            totalWidth.current =
                (seletor.offsetWidth + innerWidth * 0.02) * 6 +
                seletor.offsetWidth -
                container.offsetWidth +
                outerWidth * 0.025 * 2;
        }

        slideContainer.current.style.transform = `translateX(0px)`;
    }, []);

    // 악기선택의 총 넓이 구하는 과정
    useEffect(() => setTotalWidth(), [setTotalWidth]);
    // 브라우저 리사이즈 대응
    if (typeof window !== "undefined") window.addEventListener("resize", () => setTotalWidth());

    const MouseDownEvent = useCallback((e: MouseEvent) => {
        isClick.current = true;
        firstClickPoint.current = e.pageX - curPos.current;
        if (instrumentContainer.current) instrumentContainer.current.style.cursor = "grabbing";
    }, []);

    const MouseUpEvent = useCallback(() => {
        isClick.current = false;
        if (instrumentContainer.current) instrumentContainer.current.style.cursor = "grab";
    }, []);

    const MouseMoveEvent = useCallback((e: MouseEvent) => {
        clearTimeout(setTimeoutRef.current);
        if (!isClick.current) return;
        if (!slideContainer.current) return;

        curPos.current = e.pageX - firstClickPoint.current;
        if (Math.abs(curPos.current) >= totalWidth.current) curPos.current = -totalWidth.current;
        if (curPos.current > 0) curPos.current = 0;
        slideContainer.current.style.transform = `translateX(${curPos.current}px)`;

        setTimeoutRef.current = setTimeout(() => {
            isClick.current = false;
            if (instrumentContainer.current) instrumentContainer.current.style.cursor = "grab";
        }, 300);
    }, []);

    const leftSlide = useCallback(() => {}, []);

    return (
        <div>
            <div className={style.instrumentHeader}>
                <p className="head-2">과목선택</p>
                <div className={style.slideBtn}>
                    <div className={style.leftBtn}></div>
                    <div className={style.rightBtn}></div>
                </div>
            </div>
            <div
                className={style.instrumentBody}
                onMouseDown={MouseDownEvent}
                onMouseUp={MouseUpEvent}
                onMouseMove={MouseMoveEvent}
                ref={instrumentContainer}
            >
                <div ref={slideContainer}>
                    {instrumentData.map(({ id, name, imageSrc }) => (
                        <InstrumentSelector key={id} name={name} imageSrc={imageSrc} setFunc={setInstrument} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function InstrumentSelector({ name, imageSrc, setFunc }: InstrumentSelectorProps) {
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
        <div className="instrument-selector head-3" data-name={kr[name]} onClick={() => setFunc(name)}>
            <Image src={imageSrc} fill sizes="100%" style={{ objectFit: "cover" }} alt="악기사진"></Image>
        </div>
    );
}
