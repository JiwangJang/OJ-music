import Curriculum from "@/components/curriculumComp/Curriculum";
import Intro from "@/components/curriculumComp/Intro";
import PriceTable from "@/components/curriculumComp/PriceTable";

export default function Page() {
    return (
        <div>
            <Intro />
            <Curriculum />
            <PriceTable />
        </div>
    );
}
