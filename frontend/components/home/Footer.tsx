'use strict'

const Footer = () => {
    return (
        <div className="bg-blue-500 mt-6 flex justify-center text-white py-10 gap-10">
            <div className="flex w-[1260px]">
                <ul className="flex-1">
                    <li>Địa chỉ: 198 Hoàng Văn Thái</li>
                    <li>Số điện thoại: 09876423748</li>
                    <>Email: shopvipvip@gmail.com</>
                </ul>

                <ul className="flex-1">
                    <h3 className="mb-2 text-bold text-lg">Chính sách</h3>
                    <li>Trang chủ</li>
                    <li>Blog</li>
                    <li>Sản phẩm</li>
                    <li>Liên hệ</li>
                    <li>Kiểm tra đơn hàng</li>
                </ul>

                <ul className="flex-1">
                    <h3 className="mb-2 text-bold text-lg">Hỗ trợ khách hàng</h3>
                    <li>Tìm kiếm</li>
                    <li>Chính sách bảo mật</li>
                    <li>Điều khoản dịch vụ</li>
                    <li>Hướng dẫn kiểm tra đơn hàng</li>
                </ul>

                <ul>
                    <h3 className="text-lg mb-2">Đăng ký nhận tin</h3>
                </ul>
            </div>
        </div>
    )
}

export default Footer