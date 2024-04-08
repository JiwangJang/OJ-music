import { StaticImageData } from "next/image";

import profile1 from '@/public/image/teacher/human/1.jpg'
import profile2 from '@/public/image/teacher/human/2.jpg'
import profile3 from '@/public/image/teacher/human/3.jpg'
import profile4 from '@/public/image/teacher/human/4.jpg'
import profile5 from '@/public/image/teacher/human/5.jpg'
import profile6 from '@/public/image/teacher/human/6.jpg'
import profile7 from '@/public/image/teacher/human/7.jpg'
import profile8 from '@/public/image/teacher/human/8.jpg'
import profile9 from '@/public/image/teacher/human/9.jpg'
import profile10 from '@/public/image/teacher/human/10.jpg'
import profile11 from '@/public/image/teacher/human/11.jpg'
import profile12 from '@/public/image/teacher/human/12.jpg'
import profile13 from '@/public/image/teacher/human/13.jpg'
import profile14 from '@/public/image/teacher/human/14.jpg'

interface TeacherInfo {
    name: string;
    profile: StaticImageData;
    career: string[];
    key: number;
}

interface TeacherInfoList {
    [key: string]: TeacherInfo[];
}

const teacherInfoList: TeacherInfoList = {
    piano: [
        {
            name: "신동우",
            profile:profile1,
            career: [
                "서울예술대학교 실용음악과(피아노) 졸업",
                "밴쿠버 동계올림픽 음악감독",
                "영화 “파묘” 음악감독",
                "재즈페스티벌 초청",
            ],
            key: 2415,
        },
        {
            name: "고정재",
            profile: profile2,
            career: [
                "한양대ERICA 실용음악과(피아노) 졸업",
                "JYP.Ent 음악감독",
                "영화 “범죄도시2” 음악감독",
                "장기하와 얼굴들 피아노 세션",
            ],
            key: 2432,
        },
    ],
    elec: [
        {
            name: "예경원",
            profile: profile3,
            career: [
                "서울예술대학교 실용음악과(일렉기타) 졸업",
                "밴쿠버 동계올림픽 음악감독",
                "영화 “파묘” 음악감독",
                "재즈페스티벌 초청",
            ],
            key: 2415,
        },
        {
            name: "설성근",
            profile: profile4,
            career: [
                "한양대ERICA 재즈피아노과(일렉기타) 졸업",
                "JYP.Ent 음악감독",
                "영화 “범죄도시2” 음악감독",
                "장기하와 얼굴들 피아노 세션",
            ],
            key: 2432,
        },
    ],
    base: [
        {
            name: "허기용",
            profile: profile5,
            career: [
                "서울예술대학교 실용음악과(일렉기타) 졸업",
                "밴쿠버 동계올림픽 음악감독",
                "영화 “파묘” 음악감독",
                "재즈페스티벌 초청",
            ],
            key: 2415,
        },
        {
            name: "장희경",
            profile: profile6,
            career: [
                "한양대ERICA 재즈피아노과(일렉기타) 졸업",
                "JYP.Ent 음악감독",
                "영화 “범죄도시2” 음악감독",
                "장기하와 얼굴들 피아노 세션",
            ],
            key: 2432,
        },
    ],
    drum: [
        {
            name: "심재민",
            profile: profile7,
            career: [
                "서울예술대학교 실용음악과(일렉기타) 졸업",
                "밴쿠버 동계올림픽 음악감독",
                "영화 “파묘” 음악감독",
                "재즈페스티벌 초청",
            ],
            key: 2415,
        },
        {
            name: "성민선",
            profile: profile8,
            career: [
                "한양대ERICA 재즈피아노과(일렉기타) 졸업",
                "JYP.Ent 음악감독",
                "영화 “범죄도시2” 음악감독",
                "장기하와 얼굴들 피아노 세션",
            ],
            key: 2432,
        },
    ],
    saxophone: [
        {
            name: "박혜준",
            profile: profile9,
            career: [
                "서울예술대학교 실용음악과(일렉기타) 졸업",
                "밴쿠버 동계올림픽 음악감독",
                "영화 “파묘” 음악감독",
                "재즈페스티벌 초청",
            ],
            key: 2415,
        },
        {
            name: "양도훈",
            profile: profile10,
            career: [
                "한양대ERICA 재즈피아노과(일렉기타) 졸업",
                "JYP.Ent 음악감독",
                "영화 “범죄도시2” 음악감독",
                "장기하와 얼굴들 피아노 세션",
            ],
            key: 2432,
        },
    ],
    midi: [
        {
            name: "제갈기정",
            profile:profile11,
            career: [
                "서울예술대학교 실용음악과(일렉기타) 졸업",
                "밴쿠버 동계올림픽 음악감독",
                "영화 “파묘” 음악감독",
                "재즈페스티벌 초청",
            ],
            key: 2415,
        },
        {
            name: "배영남",
            profile: profile12,
            career: [
                "한양대ERICA 재즈피아노과(일렉기타) 졸업",
                "JYP.Ent 음악감독",
                "영화 “범죄도시2” 음악감독",
                "장기하와 얼굴들 피아노 세션",
            ],
            key: 2432,
        },
    ],
    vocal: [
        {
            name: "정윤희",
            profile: profile13,
            career: [
                "서울예술대학교 실용음악과(일렉기타) 졸업",
                "밴쿠버 동계올림픽 음악감독",
                "영화 “파묘” 음악감독",
                "재즈페스티벌 초청",
            ],
            key: 2415,
        },
        {
            name: "백채영",
            profile: profile14,
            career: [
                "한양대ERICA 재즈피아노과(일렉기타) 졸업",
                "JYP.Ent 음악감독",
                "영화 “범죄도시2” 음악감독",
                "장기하와 얼굴들 피아노 세션",
            ],
            key: 2432,
        },
    ],
};

export default teacherInfoList;
