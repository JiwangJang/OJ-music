import AcademyIntroduce from "@/components/introduceComp/AcademyIntroduce";
import Location from "@/components/introduceComp/Location";
import Intro from "@/components/layoutComp/Intro";
import introIamge from "@/public/image/introduce/intro.jpg";

export default function Page() {
    return (
        <div>
            <Intro title={`안녕하세요\n오제이 음악학원입니다`} imgSrc={introIamge} />
            <AcademyIntroduce />
            <Location />
        </div>
    );
}
