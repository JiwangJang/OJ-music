"use client";

import { useEffect, useState } from "react";
import Instrument from "./ChoosePartComp/Instrument";
import Teacher from "./ChoosePartComp/Teacher";
import TeacherProfile from "./ChoosePartComp/TeacherProfile";
import { useSearchParams } from "next/navigation";

export default function ChoosePart() {
    const params = useSearchParams();
    const [instrument, setInstrument] = useState(params.get("instrument") ?? "");
    const [teacher, setTeacher] = useState("");

    const resetAndSetInstrument: (instrument: string) => void = (instrument) => {
        if (teacher) setTeacher("");
        setInstrument(instrument);
    };

    return (
        <>
            <div className="container">
                <Instrument instrument={instrument} setInstrument={resetAndSetInstrument} />
                {instrument && <Teacher instrument={instrument} teacher={teacher} setTeacher={setTeacher} />}
            </div>
            {teacher && <TeacherProfile instrument={instrument} teacher={teacher} />}
        </>
    );
}
