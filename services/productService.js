import productRepo from '../repositories/productRepo.js'

export const getProducts = async () => {
    const products = await productRepo.selectAll()

    var result = new Array()

    products.rows.map((product) => {
        var obj = new Object()
        products.rowDescription.columns.map((el, i) => {
            obj[el.name] = product[i]
        })
        result.push(obj)
    })
    return result
}

export const getProduct = async (productId) => {
    const products = await productRepo.selectById(productId)
    var obj = new Object()
    products.rows.map((product) => {
        products.rowDescription.columns.map((el, i) => {
            obj[el.name] = product[i]
        })
    })
    return obj
}

export const createProduct = async (productData) => {
    const newProduct = {
        name: String(productData.name),
        description: String(productData.description),
        registration_date: new Date(),
    }
    await productRepo.create(newProduct)
    return newProduct.id
}

export const updateProduct = async (productId, productData) => {
    const product = await getProduct(productId)
    if (Object.keys(product).length === 0 && product.constructor === Object) {
        throw new Error('Product not found')
    }
}
