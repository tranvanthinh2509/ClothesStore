import Header from "@/components/header/Header";
import Slice from '../components/home/Slice'
import ContentHome from "@/components/home/ContentHome";

export default function Home() {
  return (
    <div>

      <div className="flex justify-center">
        <div className="max-w-[1260px]">
          <Slice />

          <ContentHome />
        </div>
      </div>
    </div>
  );
}
