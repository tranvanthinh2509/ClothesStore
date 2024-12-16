

const getListProduct = async(data:any) => {
    const response = await fetch('http://localhost:5000/api/product/getLimitProduct?' + new URLSearchParams(data), {
        method: 'get',
    })

    return await response.json()
}

const getDetailProduct = async(id:string) => {
    const response = await fetch('http://localhost:5000/api/product/getDetailProduct/' + id, {
        method: 'get',
    })

    return await response.json()
}

export  {
    getListProduct,
    getDetailProduct
}