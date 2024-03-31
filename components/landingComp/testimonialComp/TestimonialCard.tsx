import style from "@/app/landing.module.css";
import Image from "next/image";

interface Data {
    id: number;
    name: string;
    content: string;
    profileImg: string;
    imgPos: string;
}

export default function TestimonialCard({ data }: { data: Data }) {
    const { name, content, profileImg, imgPos } = data;
    return (
        <div className={`${style.testimonialCard} testimonial-card`}>
            <div className={style.testimonialImage}>
                <Image
                    src={profileImg}
                    fill
                    alt='후기 프로필 사진'
                    className={style.image}
                    style={{ objectPosition: imgPos }}
                    sizes='100%'
                ></Image>
            </div>
            <div className={style.reviewContainer}>
                <p className={style.reviewContent}>{content}</p>
                <p className={style.reviewAuthor}>{name}님</p>
            </div>
        </div>
    );
}
