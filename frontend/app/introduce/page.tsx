
/*
Giới thiệu
Website chính thức và duy nhất của MixiShop. Hiện tại chúng mình chỉ nhận đơn hàng trên website chứ không nhận bất kỳ nơi nào khác nhé!

Nếu có ưu đãi cũng sẽ được thông báo công khai trên các kênh CHÍNH THỨC VÀ DUY NHẤT sau đây:

Website : https://shop.mixigaming.com/

Fanpage : https://www.facebook.com/MixiShop-182674912385853/

Instagram : https://www.instagram.com/mixi.shop/

Email : Mixiishop@gmail.com

MixiShop xin vui lòng được phục vụ quý khách!


*/

const data = [
    {
        title: 'Website chính thức và duy nhất của MsdfixiShop. Hiện tại chúng mình chỉ nhận đơn hàng trên website chứ không nhận bất kỳ nơi nào khác nhé!',
        id: 1
    },
    {
        title: 'Nếu có ưu đãi cũng sẽ được thông báo công khai trên các kênh CHÍNH THỨC VÀ DUY NHẤT sau đây:',
        id: 2
    },
    {
        title: 'Website : https://shop.mirewtxisdfgaming.com/',
        id: 3
    },
    {
        title: 'Fanpage : https://www.facebook.com/MixiShop-182674912385853/',
        id: 4
    },
    {
        title: 'Instagram : https://www.instagram.com/msdfddsfixi.shop/',
        id: 5
    },
    {
        title: 'Email : Mwergixiisdfshop@gmail.com',
        id: 6
    },
    {
        title: 'Shop xin vui lòng được phục vụ quý khách!',
        id: 7
    },
]

const Introduce = () => {
    return (
        <div className="py-[100px] w-[1260px] mx-auto">
            <h2 className="text-xl font-bold mb-6">Giới thiệu</h2>
            
            <ul className="mt-6">
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Introduce