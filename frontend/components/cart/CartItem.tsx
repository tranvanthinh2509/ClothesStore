import { IoMdClose } from "react-icons/io";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";


const CartItem = () => {
    return (
        <div className="flex items-center justify-between border-b-[1px] border-gray-300 pb-2">
            <div className="flex items-center">
                <IoMdClose className="text-xl text-black mr-5" />
                <img alt="anh" className="w-[70px] h-[100px] rounded-md" src='https://product.hstatic.net/200000881795/product/1_a2c3e7f24d70484cbb23a3fde6782f09_large.png'></img>

                <div className="ml-4">
                    <p className="text-sm">Áo 3 lỗ</p>
                    <p className="text-sm">Size 2XL</p>
                </div>
            </div>

            <div className="flex items-center">
                <strong className="text-blue-500 mr-4">200.000</strong>

                <div className="flex items-center gap-4 p-2 border-[1px] border-gray-300">
                    <HiMiniMinus className="text-xl hover:cursor-pointer"/>
                    <strong className="text-sm">1</strong>
                    <HiOutlinePlusSmall className="text-xl hover:cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default CartItem