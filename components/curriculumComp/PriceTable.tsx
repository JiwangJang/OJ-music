import style from "@/app/curriculum/curriculum.module.css";
import PriceTableRow from "./PriceTableRow";

export default function PriceTable() {
    const priceData = [
        {
            id: 1234,
            instrument: "피아노",
            major: "450,000",
            hobby: "250,000",
        },
        {
            id: 5252,
            instrument: "기타",
            major: "420,000",
            hobby: "220,000",
        },
        {
            id: 1232,
            instrument: "베이스",
            major: "440,000",
            hobby: "240,000",
        },
        {
            id: 6345,
            instrument: "드럼",
            major: "500,000",
            hobby: "300,000",
        },
        {
            id: 4253,
            instrument: "미디",
            major: "480,000",
            hobby: "280,000",
        },
        {
            id: 6513,
            instrument: "시창청음",
            major: "500,000",
            hobby: "300,000",
        },
        {
            id: 4214,
            instrument: "보컬",
            major: "600,000",
            hobby: "400,000",
        },
    ];

    return (
        <div className='container division-padding'>
            <p className='head-1'>강의료</p>
            <table className={style.priceTable}>
                <thead>
                    <tr>
                        <th>악기</th>
                        <th>전공반</th>
                        <th>취미반</th>
                    </tr>
                </thead>
                <tbody>
                    {priceData.map(({ id, instrument, major, hobby }) => (
                        <PriceTableRow key={id} instrument={instrument} major={major} hobby={hobby} />
                    ))}
                </tbody>
            </table>
            <p className='desktop-body'>본 가격은 일주일 1회 1시간 기준으로, 상담 후 가격 조정이 가능합니다</p>
        </div>
    );
}
