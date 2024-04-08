import style from "@/app/what-is-jazz/whatIsJazz.module.css";
import Image from "next/image";
import onRoadImage from "@/public/image/what-is-jazz/on-road.jpg";

export default function JazzExplain() {
    return (
        <div className={`${style.contentContainer} container`}>
            <p className="head-1">재즈(Jazz)란?</p>
            <div className={style.content}>
                <p className={style.article}>
                    재즈(jazz)는 19세기 말 ~ 20세기 초 미국 뉴올리언스 아프리카계 미국인 사회에서 유래된 음악 장르로
                    블루스와 래그타임에 뿌리를 두는 음악 장르입니다. 클래식과의 주된 차이점은 즉흥연주 위주로
                    이루어진다는 점과, 스윙이라는 재즈만의 리듬이 주된 차이입니다.
                </p>
                <div className={style.image}>
                    <Image src={onRoadImage} fill sizes="100%" alt="재즈 설명사진" placeholder="blur" priority></Image>
                </div>
            </div>
        </div>
    );
}
