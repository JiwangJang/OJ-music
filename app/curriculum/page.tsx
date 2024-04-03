import Curriculum from "@/components/curriculumComp/Curriculum";
import PriceTable from "@/components/curriculumComp/PriceTable";
import Intro from "@/components/layoutComp/Intro";

export default function Page() {
    return (
        <div>
            <Intro
                title={`오제이음악학원의\n커리큘럼`}
                subTitle='저희를 믿고 따라주세요'
                imgSrc='/image/curriculum/intro.jpg'
            />
            <Curriculum />
            <PriceTable />
        </div>
    );
}
