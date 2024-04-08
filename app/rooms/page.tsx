import Intro from "@/components/layoutComp/Intro";
import RoomsPhotos from "@/components/roomsComp/RoomsPhotos";
import introImage from "@/public/image/rooms/landing.jpg";

export default function Page() {
    return (
        <div>
            <Intro imgSrc={introImage} title="시설안내" subTitle="오제이 음악학원의 우수한 시설을 만나보세요" />
            <RoomsPhotos />
        </div>
    );
}
