import style from "@/app/teacher/teacher.module.css";

interface Props {
    setInstrument?: () => void;
}

export default function Instrument({ setInstrument }: Props) {
    const instrumentData = [
        {
            id: 1254,
            name: "피아노",
        },
    ];

    return (
        <div>
            <div className={style.instrumentHeader}>
                <p className='head-2'>과목선택</p>
                <div className={style.slideBtn}>
                    <div className={style.leftBtn}></div>
                    <div className={style.rightBtn}></div>
                </div>
            </div>
            <div className={style.instrumentBody}>{/* 악기 사진 나열 */}</div>
        </div>
    );
}
