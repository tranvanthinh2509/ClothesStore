'use client'
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface IProps {
    images: string[],
}

const ContainerImage:React.FC<IProps> = ({images}) => {
    console.log(images)
    const [ currentImage, setCurrentImage] = useState(images[0])
    return (
        <div className="flex gap-3">
            <ul className="flex-2 flex flex-col max-h-[500px] snap-proximity scrollbar-hide gap-1 overflow-y-auto snap-y">
                {images.map(item => (
                    <li onClick={() => setCurrentImage(item)} className="rounded-md cursor-pointer">
                        <img alt='ang' className="w-full h-full rounded-md" src={item}></img>
                    </li>
                ))}
            </ul>
            <img alt='anh' className="flex-7 max-h-[500px] object-cover rounded-md" src={currentImage} ></img>
        </div>
    )
}

export default ContainerImage