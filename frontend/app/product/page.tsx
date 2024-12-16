import ProductItem from "@/components/product/ProductItem"
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

const Product = async() => {
    const products = await getListProduct({page: 1})

    return (
        <div className="w-[1260px] mx-auto py-[50px]">
            <h2 className="font-bold text-xl">Tất cả các sản phẩm</h2>
        
            <div className="flex gap-4">
                <div className="flex-2 mt-5">
                    <h3>MỨC GIÁ</h3>
                    <ul>
                        <li className="flex items-center mt-2">
                            <input className="mr-2 w-[15px] h-[15px]" type='checkbox'></input>
                            <span>Giá dưới 1.000.000đ</span>
                        </li>
                        <li className="flex items-center mt-2">
                            <input className="mr-2 w-[15px] h-[15px]" type='checkbox'></input>
                            <span>1.000.000đ - 2.000.000đ</span>
                        </li>
                        <li className="flex items-center mt-2">
                            <input className="mr-2 w-[15px] h-[15px]" type='checkbox'></input>
                            <span>2.000.000đ - 3.000.000</span>
                        </li>
                    </ul>
                </div>

                <div className="flex-8 mt-5">
                    <ul className="grid grid-cols-4 gap-3">
                        {products.data.rows.map((item:any) => (
                            <ProductItem id={item.id} name={item.name} image={item.banner} price={item.price}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product