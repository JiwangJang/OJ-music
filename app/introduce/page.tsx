import AcademyIntroduce from "@/components/introduceComp/AcademyIntroduce";
import IntroduceIntro from "@/components/introduceComp/IntroduceIntro";
import Location from "@/components/introduceComp/Location";

export default function Page() {
    return (
        <div>
            <IntroduceIntro />
            <AcademyIntroduce />
            <Location />
        </div>
    );
}
