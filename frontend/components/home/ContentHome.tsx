'use strict'
import ProductItem from "../product/ProductItem"
import { getListProduct } from "@/apis/product.api"

const data = [
    {
        name: 'Ao Jean',
        image: 'https://product.hstatic.net/200000881795/product/1_a2c3e7f24d70484cbb23a3fde6782f09_large.png',
        price: '200.000'
    },
    {
        name: 'Ao Jean',
        image: 'https://product.hstatic.net/200000881795/product/1_a2c3e7f24d70484cbb23a3fde6782f09_large.png',
        price: '200.000'
    },
    {
        name: 'Ao Jean',
        image: 'https://product.hstatic.net/200000881795/product/1_a2c3e7f24d70484cbb23a3fde6782f09_large.png',
        price: '200.000'
    },
    {
        name: 'Ao Jean',
        image: 'https://product.hstatic.net/200000881795/product/1_a2c3e7f24d70484cbb23a3fde6782f09_large.png',
        price: '200.000'
    },
    {
        name: 'Ao Jean',
        image: 'https://product.hstatic.net/200000881795/product/1_a2c3e7f24d70484cbb23a3fde6782f09_large.png',
        price: '200.000'
    },
    {
        name: 'Ao Jean',
        image: 'https://product.hstatic.net/200000881795/product/1_a2c3e7f24d70484cbb23a3fde6782f09_large.png',
        price: '200.000'
    },
    {
        name: 'Ao Jean',
        image: 'https://product.hstatic.net/200000881795/product/1_a2c3e7f24d70484cbb23a3fde6782f09_large.png',
        price: '200.000'
    },
]


const ContentHome = async() => {
    const products = await getListProduct({page: 1})

    return (
        <div>
            <ul className="py-4">
                <li className="font-semibold text-lg">Hàng mới</li>
            </ul>

            <ul className="grid grid-cols-5 gap-4">
                {products.data.rows.map((item:any) => (
                    <ProductItem id={item.id} name={item.name} image={item.banner} price={item.price}/>
                ))}
            </ul>
        </div>
    )
}

export default ContentHome