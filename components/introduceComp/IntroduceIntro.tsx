import style from "@/app/introduce/introduce.module.css";
import Image from "next/image";

export default function IntroduceIntro() {
    return (
        <div className="full-vh">
            <div className={style.introImage}>
                <Image src={"/image/introduce/intro.jpg"} fill sizes="100%" alt="소개사진"></Image>
            </div>
        </div>
    );
}
