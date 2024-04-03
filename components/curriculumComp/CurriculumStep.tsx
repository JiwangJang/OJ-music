import Image from "next/image";
import style from "@/app/curriculum/curriculum.module.css";

interface Props {
    title: string;
    imageSrc: string;
    content: string;
}

export default function CurriculumStep({ title, imageSrc, content }: Props) {
    return (
        <div className={`${style.curriculumStep} curriculum`}>
            <p className={`head-2 ${style.curriculumTitle}`}>{title}</p>
            <p className={style.curriculumContent}>{content}</p>
            <div className={style.curriculumImage}>
                <Image src={imageSrc} fill sizes='100%' alt='커리큘럼 이미지' style={{ objectFit: "cover" }}></Image>
            </div>
        </div>
    );
}
