import style from "@/app/landing.module.css";
import Image from "next/image";

export default function AvailableParts() {
    return (
        <div className={`container division-padding`} id='available'>
            <p className='head-1' style={{ textAlign: "center" }}>
                가능한 과목
            </p>
            <div className={style.availableContainer}>
                <div className={style.imageContainer} style={{ gridRow: "1/3", gridColumn: "1/6" }}>
                    <Image
                        src={"/image/landing/piano.jpg"}
                        alt='피아노사진'
                        className={style.image}
                        fill
                        sizes='100%'
                    ></Image>
                </div>
                <div className={style.imageContainer} style={{ gridRow: "1", gridColumn: "6/9" }}>
                    <Image
                        src={"/image/landing/drum.jpg"}
                        alt='드럼사진'
                        className={style.image}
                        fill
                        sizes='100%'
                    ></Image>
                </div>
                <div className={style.imageContainer} style={{ gridRow: "1", gridColumn: "9/13" }}>
                    <Image
                        src={"/image/landing/elec-guitar.jpg"}
                        alt='일렉기타사진'
                        className={style.image}
                        fill
                        sizes='100%'
                    ></Image>
                </div>
                <div className={style.imageContainer} style={{ gridRow: "2", gridColumn: "6/10" }}>
                    <Image
                        src={"/image/landing/base.jpg"}
                        alt='베이스사진'
                        className={style.image}
                        fill
                        sizes='100%'
                    ></Image>
                </div>
                <div className={style.imageContainer} style={{ gridRow: "2", gridColumn: "10/13" }}>
                    <Image
                        src={"/image/landing/more.jpg"}
                        alt='더보기'
                        className={style.image}
                        fill
                        sizes='100%'
                    ></Image>
                </div>
            </div>
        </div>
    );
}
