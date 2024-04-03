"use client";

import style from "@/app/curriculum/curriculum.module.css";
import CurriculumStep from "./CurriculumStep";
import { useCallback } from "react";

export default function Curriculum() {
    const curriculumData = [
        {
            title: "Step 1. 실력 파악",
            imageSrc: "/image/curriculum/step1.jpg",
            content: "우선 수강생과 상담을 통해\n방향성을 설정하고\n실력을 파악합니다",
            id: 1231,
        },
        {
            title: "Step 2. 수준별 강의",
            imageSrc: "/image/curriculum/step2.jpg",
            content: "1단계에서 설정한 방향과\n파악한 실력에 맞추어\n강의를 진행합니다",
            id: 2412,
        },
        {
            title: "Step 3. 나만의 멜로디, 리듬 찾기",
            imageSrc: "/image/curriculum/step3.jpg",
            content: "그후 수강생과 같이\n나만의 멜로디, 리듬을\n같이 찾아봅니다",
            id: 4142,
        },
    ];

    const scrollEvent = useCallback(() => {
        const [curriculum1, curriculum2, curriculum3] = document.querySelectorAll(".curriculum");
        if (
            !(curriculum1 instanceof HTMLDivElement) ||
            !(curriculum2 instanceof HTMLDivElement) ||
            !(curriculum3 instanceof HTMLDivElement)
        )
            return;

        if (scrollY > curriculum1.offsetTop * 0.7) curriculum1.classList.add("active");
        if (scrollY > curriculum2.offsetTop * 0.7) curriculum2.classList.add("active");
        if (scrollY > curriculum3.offsetTop * 0.7) curriculum3.classList.add("active");
    }, []);

    if (typeof window !== "undefined") window.addEventListener("scroll", scrollEvent);

    return (
        <div className='container division-padding'>
            <div className={style.stepContainer}>
                {curriculumData.map(({ title, imageSrc, content, id }) => (
                    <CurriculumStep key={id} title={title} imageSrc={imageSrc} content={content} />
                ))}
            </div>
        </div>
    );
}
