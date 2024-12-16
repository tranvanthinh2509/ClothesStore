import CartItem from "@/components/cart/CartItem"

const data = [
    {
        id: 1,
    },
    {
        id: 2,
    }
]

const Cart = () => {
    return (
        <div className="w-[1260px] mx-auto py-[50px]">
            <h2 className="text-xl font-bold mb-4">Giỏ hàng</h2>

            <div className="flex gap-6">
                <div className="flex flex-7 flex-col gap-4">
                    {data.map(item => (
                        <CartItem key={item.id}/>
                    ))}
                </div>

                <div className="flex-2">
                    <div className="bg-gray-300 p-4 rounded-md">
                        <div className="flex items-center justify-between">
                            <h2 className="font-medium text-base">Tổng cộng</h2>
                            <strong className="text-blue-500">200.000</strong>
                        </div>

                        <button className="bg-black w-full rounded-md mt-2 py-2 text-white">Thanh Toán</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart