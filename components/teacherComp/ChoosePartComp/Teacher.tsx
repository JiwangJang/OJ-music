import { Dispatch, SetStateAction } from "react";
import style from "@/app/teacher/teacher.module.css";
import Image from "next/image";
import teacherInfoList from "@/data/teacherInfoData";

interface Props {
    instrument: string;
    teacher: string;
    setTeacher: Dispatch<SetStateAction<string>>;
}

export default function Teacher({ instrument, teacher, setTeacher }: Props) {
    return (
        <div className="bottom-division-padding">
            <p className="head-2">강사선택</p>
            <div className={style.teacherContainer}>
                {teacherInfoList[instrument].map(({ name, profile, key }) => (
                    <div
                        key={key}
                        style={{
                            backgroundImage: name === teacher ? "linear-gradient(125deg, #b4b4ff, #4f01a1)" : "",
                        }}
                        className={style.teacherProfile}
                        onClick={() => setTeacher(name)}
                    >
                        <Image
                            src={profile}
                            fill
                            priority
                            sizes="100%"
                            alt="강사사진"
                            style={{ objectFit: "cover" }}
                            placeholder="blur"
                        ></Image>
                    </div>
                ))}
            </div>
        </div>
    );
}
