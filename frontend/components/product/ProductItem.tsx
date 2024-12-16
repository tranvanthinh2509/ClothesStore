'use client'
import { useState } from "react"
import { FaCartShopping } from "react-icons/fa6";
import { convertNumberToVND } from "@/ultis/convert";
import Link from "next/link";

interface IProps {
    name: string,
    image: string,
    price: string,
    id: string
}


const ProductItem:React.FC<IProps> = ({name, image, price, id}) => {
    const [ showModal, setShowModal ] = useState<boolean>(false)

    return (
        <Link href={`/product/${id}`} className="hover:cursor-pointer w-[250px] rounded-md overflow-hidden bg-white relative">
            <div onMouseLeave={() => setShowModal(false)} onMouseEnter={() => setShowModal(true)} className="relative">
                <img alt='anh'  className='w-full object-cover' src={image}></img>

                {showModal && 
                    <button className="py-2 px-4 rounded-md bg-gray-200 absolute left-[50%] translate-x-[-50%] bottom-[10px] z-10">
                        <FaCartShopping />
                    </button>
                }
            </div>
            
            <div className="p-3">
                <p className="front-semibold ">{name}</p>
                <p className="font-bold text-sm text-blue-700">{convertNumberToVND(Number(price))}</p>
            </div>
        </Link>
    )
}

export default ProductItem