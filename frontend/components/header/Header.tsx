'use strict'
import Link from "next/link"
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const data = [
    {
        title: 'Trang chủ',
        link: '/'
    },
    {
        title: 'Giới thiệu',
        link: '/introduce'
    },
    {
        title: 'Sản phẩm',
        link: '/product'
    },
    {
        title: 'Giỏi hàng',
        link: '/cart'
    }
]

const Header = () => {
    return (
        <div className="flex bg-blue-500 px-[130px] py-5 w-full">
            <ul className="flex items-center gap-10 flex-1 text-white">
                {data.map(item => (
                    <Link key={item.link} href={item.link}>{item.title}</Link>
                ))}
            </ul>

            <div className="flex items-center gap-8 text-xl text-white">
                <BsCart2 />
                <FaRegHeart />
                <IoPersonSharp />
            </div>
        </div>
    )
}

export default Header