interface TeacherInfo {
    name: string;
    profile: string;
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
            profile: "/image/teacher/human/1.jpg",
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
            profile: "/image/teacher/human/2.jpg",
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
            profile: "/image/teacher/human/3.jpg",
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
            profile: "/image/teacher/human/4.jpg",
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
            profile: "/image/teacher/human/5.jpg",
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
            profile: "/image/teacher/human/6.jpg",
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
            profile: "/image/teacher/human/7.jpg",
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
            profile: "/image/teacher/human/8.jpg",
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
            profile: "/image/teacher/human/9.jpg",
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
            profile: "/image/teacher/human/10.jpg",
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
            profile: "/image/teacher/human/11.jpg",
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
            profile: "/image/teacher/human/12.jpg",
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
            profile: "/image/teacher/human/13.jpg",
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
            profile: "/image/teacher/human/14.jpg",
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
