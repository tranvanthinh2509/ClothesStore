import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";
import Image from "next/image"
import { getDetailProduct } from "@/apis/product.api";
import { convertNumberToVND } from "@/ultis/convert";
import ContainerImage from "@/components/product/ContainerImage";

const dataColor = [
    {
        title: 'Vang',
        id: 1
    },
    {
        title: 'Den',
        id: 2
    }
]

interface IProps {
    params: { slug: string };
  }

const DetailProduct:React.FC<IProps> = async({params}) => {
    const id = params?.slug
    
    const product = await getDetailProduct(id)

    console.log({product})

    if (!product) return null
     
    return (
        <div className="max-w-[1260px] mx-auto flex py-[50px] gap-[50px]">
            <div className="flex-1 rounded-md overflow-hidden">
                <ContainerImage images={product.data?.images.map((item:any) => item.urlImage)}/>
            </div>

            <div className="flex-1">
                <h2 className="text-xl mb-2">{product.data?.name}</h2>
                <p className="text-blue-500 font-semibold">{convertNumberToVND(Number(product?.data?.price))}</p>
                
                <div className="mt-5">
                    <h3>Màu sắc: Vang</h3>
                    <ul className="flex items-center gap-3 pl-3">
                        {dataColor.map(item => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-5">
                    <h3>{`Số lượng: ${product.data?.quantity}`}</h3>
                </div>

                <div className="mt-5">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-8 justify-center rounded-md flex-3 py-3 border-[1px] border-gray-300">
                            <HiMiniMinus className="text-xl hover:cursor-pointer"/>
                            <strong className="text-sm">1</strong>
                            <HiOutlinePlusSmall className="text-xl hover:cursor-pointer"/>
                        </div>

                        <button className="w-full flex-7 py-3 border-[1px] text-blue-500 rounded-md hover:bg-blue-500 overflow-hidden hover:text-white border-blue-500 text-blue bg-transparent">THÊM VÀO GIỎ</button>
                    </div>

                    <button className="text-white bg-blue-500 rounded-md w-full py-4 mt-3 hover:opacity-90">Mua Ngay</button>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct