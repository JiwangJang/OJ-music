import Image from "next/image";
import style from "@/app/introduce/introduce.module.css";

export default function AcademyIntroduce() {
    return (
        <div className={`container division-padding ${style.academyIntroduceContainer}`}>
            <div className={style.introduceArticle}>
                <p className='head-1'>학원소개</p>
                <p className='desktop-body' style={{ lineHeight: 1.2 }}>
                    우리 학원은 세상에 음악의 즐거움을 널리 알리자는 사명아래, 2015년 서울 신촌에서 5명의 선생님이 모여
                    학원을 처음 설립했습니다. 그 후 열정적인 강의력을 바탕으로 2017년 오제이 음악학원 상수점을
                    오픈했으며, 지금까지 그 명성을 이어오고 있습니다. 저희 학원에서는 검증된 강사진과 커리큘럼을
                    바탕으로 여러분의 멜로디, 리듬을 찾을 수 있도록 최선을 다하겠습니다.
                </p>
            </div>
            <div className={style.outlookImage}>
                <Image
                    src={"/image/introduce/outlook.png"}
                    fill
                    sizes='100%'
                    alt='학원전경'
                    style={{ objectFit: "cover" }}
                ></Image>
            </div>
        </div>
    );
}
