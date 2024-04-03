"use client";

import { useState } from "react";
import Instrument from "./ChoosePartComp/Instrument";
import Teacher from "./ChoosePartComp/Teacher";
import TeacherProfile from "./ChoosePartComp/TeacherProfile";

export default function ChoosePart() {
    const [instrument, setInstrument] = useState();
    const [teacher, setTeacher] = useState();

    return (
        <>
            <div className='container division-padding'>
                <Instrument />
                <Teacher />
            </div>
            <TeacherProfile />
        </>
    );
}
