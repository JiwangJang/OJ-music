import Intro from "@/components/layoutComp/Intro";
import ChoosePart from "@/components/teacherComp/ChoosePart";

export default function Page() {
    return (
        <div>
            <Intro
                title='강사소개'
                subTitle='당신만의 멜로디, 리듬을 찾아줄 강사님들을 소개합니다'
                imgSrc='/image/teacher/intro.jpg'
            />
            <ChoosePart />
        </div>
    );
}
