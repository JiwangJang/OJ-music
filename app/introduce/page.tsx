import AcademyIntroduce from "@/components/introduceComp/AcademyIntroduce";
import Location from "@/components/introduceComp/Location";
import Intro from "@/components/layoutComp/Intro";

export default function Page() {
    return (
        <div>
            <Intro title={`안녕하세요\n오제이 음악학원입니다`} imgSrc='/image/introduce/intro.jpg' />
            <AcademyIntroduce />
            <Location />
        </div>
    );
}
