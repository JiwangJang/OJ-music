import style from "@/app/landing.module.css";
import Image from "next/image";

export default function AvailableParts() {
    return (
        <div className={`container division-padding`} id='available'>
            <p className='head-1' style={{ textAlign: "center" }}>
                가능한 과목
            </p>
            <div className={style.availableContainer}>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/piano.jpg"}
                        alt='피아노사진'
                        fill
                        sizes='100%'
                        style={{objectFit : "cover"}}
                    ></Image>
                </div>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/drum.jpg"}
                        alt='드럼사진'
                        fill
                        sizes='100%'
                        style={{objectFit : "cover"}}
                    ></Image>
                </div>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/elec-guitar.jpg"}
                        alt='일렉기타사진'
                        fill
                        sizes='100%'
                        style={{objectFit : "cover"}}
                    ></Image>
                </div>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/base.jpg"}
                        alt='베이스사진'
                        fill
                        sizes='100%'
                        style={{objectFit : "cover"}}
                    ></Image>
                </div>
                <div className={style.imageContainer}>
                    <Image
                        src={"/image/landing/more.jpg"}
                        alt='더보기'
                        fill
                        sizes='100%'
                        style={{objectFit : "cover"}}
                    ></Image>
                </div>
            </div>
        </div>
    );
}
