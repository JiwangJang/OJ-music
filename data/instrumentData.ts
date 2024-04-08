import piano from "@/public/image/teacher/piano.jpg";
import elec from "@/public/image/teacher/elec-guitar.jpg";
import base from "@/public/image/teacher/base.jpg";
import drum from "@/public/image/teacher/drum.jpg";
import saxophone from "@/public/image/teacher/saxophone.jpg";
import midi from "@/public/image/teacher/midi.jpg";
import vocal from "@/public/image/teacher/vocal.jpg";
import { StaticImageData } from "next/image";

interface InstrumentData{
    id : number;
    name : string;
    image : StaticImageData;
};

const instrumentData:InstrumentData[] = [
    {
        id: 1254,
        name: "piano",
        image: piano,
    },
    {
        id: 5324,
        name: "elec",
        image: elec,
    },
    {
        id: 7585,
        name: "base",
        image: base,
    },
    {
        id: 6724,
        name: "drum",
        image: drum,
    },
    {
        id: 4273,
        name: "saxophone",
        image: saxophone,
    },
    {
        id: 4874,
        name: "midi",
        image: midi,
    },
    {
        id: 6248,
        name: "vocal",
        image: vocal,
    },
];

export default instrumentData;
