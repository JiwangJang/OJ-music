import instrumentData from "@/data/instrumentData";
import teacherInfoList from "@/data/teacherInfoData";
import style from "@/app/teacher/teacher.module.css";
import Image from "next/image";

interface Props {
    instrument: string;
    teacher: string;
}

export default function TeacherProfile({ teacher, instrument }: Props) {
    const { image } = instrumentData.filter((item) => item.name === instrument)[0];
    const {
        name: teacherName,
        profile,
        career,
    } = teacherInfoList[instrument].filter((item) => item.name === teacher)[0];

    return (
        <div className={style.teacherIntroContainer}>
            <div className={style.teacherBackground}>
                <Image
                    src={image}
                    fill
                    sizes="100%"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt="배경"
                    placeholder="blur"
                ></Image>
            </div>
            <div className={`container ${style.teacherIntro}`}>
                <div className={style.profileImage}>
                    <Image
                        src={profile}
                        fill
                        sizes="100%"
                        alt="프로필이미지"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        placeholder="blur"
                    ></Image>
                </div>
                <div className={style.teacherInfo}>
                    <p className="head-2">{teacherName}</p>
                    <div className="desktop-body">
                        {career.map((log, i) => (
                            <p key={i}>_ {log}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
